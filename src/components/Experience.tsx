"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "LovingLoyalty",
    companyUrl: "https://www.linkedin.com/company/lovingloyalty/",
    location: "Denmark (Remote)",
    period: "Jan 2025 - Present",
    type: "Full-time",
    description: [
      "Led frontend development for enterprise Point of Sale (POS) system serving 800+ clients worldwide",
      "Architected complete migration from Vanilla JavaScript to modern React, improving maintainability and performance",
      "Designed scalable component architecture for complex POS workflows including inventory and real-time reporting",
      "Integrated Cordova for mobile features including Bluetooth payments and printing",
    ],
    technologies: ["React", "TypeScript", "Redux", "TailwindCSS", "Cordova"],
    color: "from-primary to-secondary",
  },
  {
    title: "Senior Software Engineer",
    company: "E-VAS TEL",
    companyUrl: "https://www.linkedin.com/company/e-vas-tel/",
    location: "Egypt (Hybrid)",
    period: "Apr 2024 - Jan 2026",
    type: "Full-time",
    description: [
      "Replaced legacy nDPI engine with a new high-performance Alpha engine for deep packet inspection",
      "Led a team of 3 engineers, driving technical decisions and ensuring high-quality deliverables",
      "Developed heuristic-based detection for encrypted QUIC Client Hello packets using IP patterns and packet length analysis",
      "Created structured technical assessment frameworks for hiring DPI engineering candidates",
    ],
    technologies: ["C", "C++", "DPI", "QUIC", "TLS", "Network Security", "Linux"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Frontend Engineer",
    company: "SaikoroTech",
    location: "Remote",
    period: "2022 - 2024",
    type: "Full-time",
    description: [
      "Designed and developed responsive, high-quality interfaces using React, TypeScript, and TailwindCSS",
      "Built component-based architecture following best practices for scalability and maintainability",
      "Refactored legacy code to improve quality, performance, and team velocity",
      "Optimized frontend performance through code splitting, lazy loading, and efficient rendering",
    ],
    technologies: ["React", "TypeScript", "TailwindCSS", "Redux", "Context API"],
    color: "from-secondary to-accent",
  },
  {
    title: "Software Engineer",
    company: "E-Commerce Platform (UAE)",
    location: "Remote",
    period: "2023 - 2024",
    type: "Contract",
    description: [
      "Led frontend development for premium e-commerce shoes store serving UAE market",
      "Built responsive shopping cart and checkout flows optimized for conversion",
      "Integrated payment gateways and order management systems",
      "Developed user account features including order history and wishlists",
    ],
    technologies: ["React", "Next.js", "Payment Integration", "REST APIs"],
    color: "from-accent to-neon-green",
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "Jan 2022 - Mar 2024",
    type: "Freelance",
    description: [
      "Developed responsive web applications using React and modern frontend tooling",
      "Built RESTful APIs and integrated backend services with frontend interfaces",
      "Managed full-stack projects independently from requirements to delivery",
    ],
    technologies: ["React", "Node.js", "REST APIs", "Firebase", "Full-Stack"],
    color: "from-neon-green to-primary",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary/10 rounded-full filter blur-[100px]" />
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
            Career Journey
          </motion.span>
          <h2 className="section-title">
            <span className="text-white">Professional</span>{" "}
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mt-4">
            Building scalable solutions across diverse industries
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.15 }}
                    className="relative"
                  >
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color}`} />
                    <div className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} animate-ping opacity-50`} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative"
                  >
                    {/* Glow effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                    <div className="relative glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.color} font-semibold hover:opacity-80 transition-opacity`}
                            >
                              {exp.company}
                            </a>
                          ) : (
                            <p className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.color} font-semibold`}>
                              {exp.company}
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300 mb-2">
                            {exp.type}
                          </span>
                          <p className="text-sm text-gray-400">{exp.period}</p>
                          <p className="text-xs text-gray-500">{exp.location}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10 hover:border-primary/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Education</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                degree: "M.Sc. Computer Engineering",
                school: "Arab Academy for Science, Technology & Maritime Transport",
                period: "Oct 2024 - In Progress",
                icon: "🎓",
              },
              {
                degree: "B.Eng. Electrical & Communication Engineering",
                school: "Higher Technological Institute, 10th of Ramadan",
                period: "Oct 2018 - Jan 2023",
                grade: "Grade: A+",
                icon: "📜",
              },
            ].map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{edu.icon}</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{edu.degree}</h4>
                    <p className="text-sm text-gray-400 mb-2">{edu.school}</p>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-primary">{edu.period}</span>
                      {edu.grade && (
                        <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">
                          {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
