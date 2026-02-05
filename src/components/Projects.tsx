"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Enterprise POS System",
    subtitle: "Global Point of Sale Platform",
    description:
      "Spearheaded frontend modernization for a global Point of Sale system serving 800+ clients. Led complete migration from Vanilla JavaScript to React, implementing scalable architecture for complex retail workflows.",
    image: "/projects/pos.png",
    tags: ["React", "TypeScript", "Redux", "TailwindCSS", "Cordova"],
    highlights: [
      "800+ clients worldwide",
      "Vanilla JS to React migration",
      "Real-time reporting",
      "Bluetooth payment integration",
    ],
    color: "from-blue-500 to-purple-600",
    featured: true,
  },
  {
    title: "Gamification Platform",
    subtitle: "Educational Excellence System",
    description:
      "Built an interactive frontend for a game-based learning platform serving multinational schools. Implemented engaging UI components for achievements, leaderboards, and progress tracking.",
    image: "/projects/gamification.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    highlights: [
      "Multinational deployment",
      "Real-time leaderboards",
      "Achievement system",
      "Legacy code refactoring",
    ],
    color: "from-purple-500 to-pink-600",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    subtitle: "Real-Time Data Visualization",
    description:
      "Developed a high-performance dashboard visualizing complex educational and engagement data. Implemented responsive design with interactive charts using Recharts, optimized for real-time updates.",
    image: "/projects/dashboard.png",
    tags: ["React", "TypeScript", "Recharts", "TailwindCSS"],
    highlights: [
      "Real-time data updates",
      "Interactive visualizations",
      "Performance optimized",
      "Responsive design",
    ],
    color: "from-cyan-500 to-blue-600",
    featured: true,
  },
  {
    title: "Multi-Tenant Platform",
    subtitle: "Educational Management System",
    description:
      "Built a responsive, scalable frontend for a platform supporting multiple schools and user types. Implemented component system and state management for complex workflows.",
    image: "/projects/multitenant.png",
    tags: ["React", "TypeScript", "Context API", "Responsive"],
    highlights: [
      "Multi-tenant architecture",
      "Complex user roles",
      "Accessibility focused",
      "Cross-device support",
    ],
    color: "from-green-500 to-cyan-600",
    featured: false,
  },
  {
    title: "E-Commerce Platform",
    subtitle: "Premium Shoes Store (UAE)",
    description:
      "Led frontend development for a premium e-commerce shoes store platform serving the UAE market. Built responsive shopping cart and checkout flows optimized for conversion.",
    image: "/projects/ecommerce.png",
    tags: ["React", "Next.js", "Payment Integration", "REST APIs"],
    highlights: [
      "UAE market focus",
      "Payment gateway integration",
      "Inventory management",
      "Mobile-first design",
    ],
    color: "from-orange-500 to-red-600",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-[120px]" />
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
            Featured Work
          </motion.span>
          <h2 className="section-title">
            <span className="text-white">Key</span>{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mt-4">
            Showcasing impactful solutions across diverse industries
          </p>
        </motion.div>

        {/* Featured projects - Large cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .slice(0, 2)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Glow effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500`}
                />

                <div className="relative glass rounded-3xl overflow-hidden">
                  {/* Project image placeholder */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={hoveredIndex === index ? { scale: 1.1, rotate: 5 } : {}}
                        transition={{ duration: 0.3 }}
                        className="text-6xl opacity-50"
                      >
                        {project.title.includes("POS")
                          ? "🛒"
                          : project.title.includes("Gamification")
                          ? "🎮"
                          : "📊"}
                      </motion.div>
                    </div>
                    {/* Floating elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium"
                    >
                      Featured
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-400">{project.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-2 text-xs text-gray-400"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-md text-xs bg-white/5 text-gray-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Third featured project - Full width */}
        {projects
          .filter((p) => p.featured)
          .slice(2, 3)
          .map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group relative mb-12"
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500`}
              />

              <div className="relative glass rounded-3xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                  {/* Image side */}
                  <div className={`h-64 md:h-auto bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl opacity-50">📊</span>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-primary mb-3 inline-block">
                        Featured
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400">{project.subtitle}</p>
                    </div>

                    <p className="text-gray-400 mb-6">{project.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-sm bg-white/5 text-gray-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-white text-center mb-8">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="group glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-2xl">
                        {project.title.includes("Multi") ? "🏢" : "🛍️"}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-xs bg-white/5 text-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in seeing more or discussing a project?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Let&apos;s Work Together
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
