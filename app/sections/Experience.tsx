"use client";
import { useAPI } from "@/hooks";
import { getExperience } from "@/services";

export default function Experience() {
  const { data: experiences, isLoading } = useAPI(() => getExperience());

  if (isLoading || !experiences) return <p>Loading...</p>;

  return (
    <section
      id="experience"
      className="h-screen bg-gray-900 text-gray-100 p-6 flex flex-col justify-center"
    >
      <h2 className="text-6xl text-center">Experience</h2>
      <div className="">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-4 hover:bg-teal-300/10 mt-8 space-y-6 hover:rounded-md"
          >
            <a href={exp.link} target="_blank">
              <h3 className="text-xl">
                {exp.role} · {exp.company}
              </h3>
              <p className="text-gray-300 text-sm">{exp.period}</p>
              <p className="text-gray-400 text-sm py-2">{exp.description}</p>
              <div className="flex flex-row gap-2">
                {exp.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="text-xs bg-teal-400/15 text-teal-300 px-3 font-medium py-1 border rounded-md border-gray-600"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
