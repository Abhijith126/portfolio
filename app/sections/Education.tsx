"use client";
import { useState, useEffect } from "react";

interface EducationData {
  degree: string;
  university: string;
  certifications: string[];
}

export default function Education() {
  const [education, setEducation] = useState<EducationData | null>(null);

  useEffect(() => {
    fetch("/data/education.json")
      .then((res) => res.json())
      .then((data) => setEducation(data));
  }, []);

  if (!education) return <p>Loading...</p>;

  return (
    <section
      id="education"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-800 text-white"
    >
      <h2 className="text-4xl font-bold">Education & Certifications</h2>
      <p className="mt-4">
        {education.degree}, {education.university}
      </p>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Certifications</h3>
        <ul className="list-disc mt-2 text-gray-400">
          {education.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
