"use client";
import { motion } from "framer-motion";
import { Project } from "./types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold text-white">{project.title}</h3>
      <p className="text-gray-400 mt-2">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        <a
          href={project.link}
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          className="text-gray-400 hover:underline"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
}
