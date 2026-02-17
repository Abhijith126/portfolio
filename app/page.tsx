"use client";

import { CursorHighlight, Navbar } from "./components";
import Footer from "./components/Footer";
import { useAPI } from "./hooks";
import { About, Contact, Experience, Hero, Projects } from "./sections";
import {
  getAbout,
  getExperience,
  getProfile,
  getProjects,
} from "./services";

export default function Home() {
  const { data: profile } = useAPI(() => getProfile());
  const { data: experiences } = useAPI(() => getExperience());
  const { data: about } = useAPI(() => getAbout());
  const { data: projects } = useAPI(() => getProjects());

  if (!profile || !experiences || !about || !projects) return null;

  return (
    <div className="scroll-smooth">
      <CursorHighlight />
      <Navbar />
      <Hero profile={profile} />
      <About about={about} />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}
