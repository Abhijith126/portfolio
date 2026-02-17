"use client";

import { motion } from "framer-motion";
import { TExperience } from "@/types";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Experience({
  experiences,
}: {
  experiences: TExperience[];
}) {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-brass text-sm tracking-[0.3em] uppercase font-body">
            02 &mdash; Experience
          </span>
        </motion.div>

        <div>
          {experiences.map((exp, index) => (
            <motion.a
              key={index}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block border-t border-ink-border py-10 md:py-12 hover:bg-brass/[0.02] transition-all duration-500 -mx-4 px-4 md:-mx-8 md:px-8 rounded-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                <div className="md:w-44 shrink-0">
                  <p className="text-cream-faint text-xs tracking-wider uppercase font-body">
                    {exp.period}
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-cream group-hover:text-brass transition-colors duration-300 flex items-start gap-2">
                    <span>
                      {exp.role}
                      <span className="text-cream-muted font-normal">
                        {" "}
                        &middot; {exp.company}
                      </span>
                    </span>
                    <HiArrowUpRight className="text-sm mt-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0 text-brass -translate-x-1 group-hover:translate-x-0 -translate-y-1 group-hover:translate-y-0" />
                  </h3>
                  <p className="text-cream-muted font-body leading-relaxed mt-3 max-w-2xl text-[15px]">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-3 py-1 rounded-full border border-ink-border text-cream-muted font-body tracking-wider uppercase group-hover:border-brass/20 group-hover:text-cream/70 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
          {/* Bottom border */}
          <div className="border-t border-ink-border" />
        </div>
      </div>
    </section>
  );
}
