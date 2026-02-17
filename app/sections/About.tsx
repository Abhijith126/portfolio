"use client";

import { motion } from "framer-motion";
import {
  AngularOriginal,
  Css3Original,
  CypressioOriginal,
  DockerOriginal,
  ExpressOriginal,
  FigmaOriginal,
  GitOriginal,
  Html5Original,
  JavascriptOriginal,
  TypescriptOriginal,
  ReduxOriginal,
  MongodbOriginal,
  MysqlOriginal,
  NextjsOriginal,
  NodejsOriginal,
  ReactOriginal,
  SassOriginal,
  KubernetesOriginal,
  FirebaseOriginal,
  GooglecloudOriginal,
  AmazonwebservicesOriginalWordmark,
} from "devicons-react";
import { TAbout } from "@/types";

const skillIcons = {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  TypescriptOriginal,
  ReactOriginal,
  ReduxOriginal,
  NextjsOriginal,
  NodejsOriginal,
  MongodbOriginal,
  GitOriginal,
  AngularOriginal,
  FigmaOriginal,
  CypressioOriginal,
  ExpressOriginal,
  MysqlOriginal,
  DockerOriginal,
  SassOriginal,
  KubernetesOriginal,
  FirebaseOriginal,
  GooglecloudOriginal,
  AmazonwebservicesOriginalWordmark,
};

export default function About({ about }: { about: TAbout }) {
  const { bio, skills } = about;

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-brass text-sm tracking-[0.3em] uppercase font-body">
            01 &mdash; About
          </span>
        </motion.div>

        {/* Pull quote - first paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-cream mb-16 max-w-5xl"
        >
          {bio[0]}
        </motion.p>

        {/* Remaining bio in two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-24">
          {bio.slice(1).map((text, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-cream-muted font-body leading-relaxed text-[15px]"
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Horizontal rule */}
        <div className="border-t border-ink-border mb-16" />

        {/* Skills — dual marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="group/marquee"
        >
          <h3 className="text-cream-faint text-xs tracking-[0.3em] uppercase font-body mb-10">
            Technologies
          </h3>

          <div className="space-y-6">
            {/* Row 1 — scrolls left */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />
              <div className="marquee-track flex w-max animate-marquee">
                {[...skills.slice(0, 11), ...skills.slice(0, 11)].map(
                  (skill, index) => {
                    const Icon =
                      skillIcons[skill.icon as keyof typeof skillIcons];
                    return (
                      <div
                        key={index}
                        className="group/item flex items-center gap-3 px-6 py-3 shrink-0 cursor-default"
                      >
                        <Icon className="!size-6 opacity-40 group-hover/item:opacity-100 transition-opacity duration-300" />
                        <span className="text-sm text-cream-muted group-hover/item:text-brass whitespace-nowrap tracking-wide uppercase font-body transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {/* Row 2 — scrolls right */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />
              <div className="marquee-track flex w-max animate-marquee-reverse">
                {[...skills.slice(11), ...skills.slice(11)].map(
                  (skill, index) => {
                    const Icon =
                      skillIcons[skill.icon as keyof typeof skillIcons];
                    return (
                      <div
                        key={index}
                        className="group/item flex items-center gap-3 px-6 py-3 shrink-0 cursor-default"
                      >
                        <Icon className="!size-6 opacity-40 group-hover/item:opacity-100 transition-opacity duration-300" />
                        <span className="text-sm text-cream-muted group-hover/item:text-brass whitespace-nowrap tracking-wide uppercase font-body transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
