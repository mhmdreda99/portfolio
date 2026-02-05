"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    name: "Core Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5/CSS3", level: 90 },
      { name: "Next.js", level: 85 },
    ],
  },
  {
    name: "State & Architecture",
    icon: "🏗️",
    skills: [
      { name: "Redux", level: 90 },
      { name: "Context API", level: 92 },
      { name: "MobX", level: 75 },
      { name: "React Hooks", level: 95 },
      { name: "Component Architecture", level: 90 },
    ],
  },
  {
    name: "Styling & UI",
    icon: "✨",
    skills: [
      { name: "TailwindCSS", level: 92 },
      { name: "Responsive Design", level: 95 },
      { name: "CSS-in-JS", level: 85 },
      { name: "D3.js / Data Viz", level: 75 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    name: "Performance",
    icon: "⚡",
    skills: [
      { name: "Code Splitting", level: 90 },
      { name: "Lazy Loading", level: 92 },
      { name: "Memoization", level: 88 },
      { name: "Bundle Optimization", level: 85 },
      { name: "Core Web Vitals", level: 85 },
    ],
  },
  {
    name: "Tools & Ecosystem",
    icon: "🛠️",
    skills: [
      { name: "Git/GitHub/GitLab", level: 90 },
      { name: "Webpack/Vite", level: 82 },
      { name: "npm/yarn", level: 90 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    name: "Testing & Quality",
    icon: "🧪",
    skills: [
      { name: "Unit Testing", level: 85 },
      { name: "Integration Testing", level: 80 },
      { name: "Code Review", level: 90 },
      { name: "Documentation", level: 88 },
      { name: "CI/CD", level: 75 },
    ],
  },
];

const floatingSkills = [
  "React", "TypeScript", "Next.js", "Redux", "TailwindCSS",
  "JavaScript", "HTML5", "CSS3", "Node.js", "GraphQL",
  "Git", "Webpack", "Firebase", "REST API", "Testing",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        {/* Floating skill tags */}
        {floatingSkills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.1 } : {}}
            transition={{ delay: index * 0.1 }}
            className="absolute text-white/10 text-sm font-mono pointer-events-none select-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-6"
          >
            Technical Expertise
          </motion.span>
          <h2 className="section-title">
            <span className="text-white">Skills &</span>{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle mt-4">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === index
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25"
                  : "glass text-gray-400 hover:text-white"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills display */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer bg-[length:200%_100%]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Orbital visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="relative h-[400px] flex items-center justify-center"
          >
            {/* Central icon */}
            <div className="absolute w-24 h-24 rounded-full glass flex items-center justify-center z-10">
              <span className="text-4xl">
                {skillCategories[activeCategory].icon}
              </span>
            </div>

            {/* Orbital rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 20 + ring * 5, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full border border-white/10"
                style={{
                  width: `${ring * 100 + 80}px`,
                  height: `${ring * 100 + 80}px`,
                }}
              >
                {/* Skill dots on orbit */}
                {skillCategories[activeCategory].skills
                  .slice(ring - 1, ring + 1)
                  .map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary"
                      style={{
                        top: "50%",
                        left: i === 0 ? "0" : "100%",
                        transform: "translate(-50%, -50%)",
                      }}
                      whileHover={{ scale: 2 }}
                    />
                  ))}
              </motion.div>
            ))}

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="absolute w-2 h-2 rounded-full bg-primary/50"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* All skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            All Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "React.js", "TypeScript", "JavaScript", "Next.js", "HTML5", "CSS3",
              "TailwindCSS", "Redux", "Context API", "React Hooks", "MobX",
              "D3.js", "Recharts", "Framer Motion", "Git", "GitHub", "GitLab",
              "Webpack", "Vite", "npm", "yarn", "REST APIs", "GraphQL", "Firebase",
              "Unit Testing", "Integration Testing", "PHP", "Node.js",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.02 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full glass text-sm font-medium text-gray-300 hover:text-white hover:border-primary/50 border border-transparent transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Machine Learning Engineer Nanodegree", issuer: "Udacity", icon: "🤖" },
              { name: "Problem Solving (Intermediate)", issuer: "HackerRank", icon: "🧩" },
              { name: "HCIA-AI", issuer: "Huawei", icon: "🎯" },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-3xl mb-3 block">{cert.icon}</span>
                <h4 className="font-semibold text-white text-sm mb-1">{cert.name}</h4>
                <p className="text-xs text-gray-400">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
