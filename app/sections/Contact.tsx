"use client";

import { motion } from "framer-motion";
import { Socials } from "@/components";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-brass text-sm tracking-[0.3em] uppercase font-body">
            04 &mdash; Contact
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-8 leading-tight"
        >
          Let&apos;s work
          <br />
          together<span className="text-brass">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cream-muted font-body text-lg max-w-lg mx-auto mb-12"
        >
          Have a project in mind or just want to connect? I&apos;m always open
          to discussing new opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <Socials />
        </motion.div>
      </div>
    </section>
  );
}
