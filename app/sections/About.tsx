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
  MongodbOriginal,
  MysqlOriginal,
  NextjsOriginal,
  NodejsOriginal,
  ReactOriginal,
  SassOriginal,
} from "devicons-react";
import { RxPerson } from "react-icons/rx";
import { TAbout } from "@/types";

const skillIcons = {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  ReactOriginal,
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
};

export default function About({ about }: { about: TAbout }) {
  const { bio, skills } = about;

  return (
    <section className="min-h-screen flex flex-col gap-16 items-center justify-center bg-gray-800 text-gray-100 ">
      <h3 className="text-6xl py-4">About</h3>
      <div className="flex items-center justify-center relative gap-4">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <RxPerson className="size-44 mx-auto mb-4 text-pink-500" />
            {bio.map((text, idx) => (
              <p key={idx} className="py-2">
                {text}
              </p>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {skills.map((skill, index) => {
              const Icon = skillIcons[skill.icon as keyof typeof skillIcons];
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center p-2 border-2 border-pink-500 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="!size-12" />
                  <p className="mt-2 text-sm uppercase">{skill.name}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
