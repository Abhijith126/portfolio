"use client";
import { motion } from "framer-motion";
import { Socials } from "@/components";
import { TProfile } from "@/types";

export default function Hero({ profile }: { profile: TProfile }) {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Subtle warm gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brass/[0.03] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-brass/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-cream-muted text-sm tracking-[0.3em] uppercase font-body">
            {profile.location}
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[clamp(3rem,9vw,7.5rem)] font-extrabold leading-[0.9] tracking-tight text-cream"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          >
            {profile.fullName || profile.name}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-col gap-6"
        >
          <p className="font-body text-xl md:text-2xl text-cream-muted capitalize">
            {profile.role}
          </p>
          <Socials />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-cream-faint text-[10px] tracking-[0.4em] uppercase font-body">
          Scroll
        </span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-brass to-transparent origin-top"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
