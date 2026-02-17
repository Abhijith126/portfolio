"use client";

import { motion } from "framer-motion";
import { TProject } from "@/types";
import { AiFillGithub } from "react-icons/ai";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Projects({ projects }: { projects: TProject[] }) {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-brass text-sm tracking-[0.3em] uppercase font-body">
            03 &mdash; Projects
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl border border-ink-border p-8 hover:border-brass/25 hover:bg-brass/[0.02] transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-10 h-10 rounded-lg bg-brass/10 flex items-center justify-center">
                  <span className="text-brass font-display font-bold text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream-faint hover:text-brass transition-colors duration-300"
                    >
                      <AiFillGithub className="text-lg" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream-faint hover:text-brass transition-colors duration-300"
                    >
                      <HiArrowUpRight className="text-lg" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display text-lg font-semibold text-cream group-hover:text-brass transition-colors duration-300 mb-3">
                {project.title}
              </h3>
              <p className="text-cream-muted font-body text-sm leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] text-cream-faint font-body tracking-wider uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
