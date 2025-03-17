"use client";

import { CursorHighlight } from "./components";
import Footer from "./components/Footer";
import { useAPI } from "./hooks";
import { About, Contact, Experience, Hero } from "./sections";
import { getAbout, getExperience, getProfile } from "./services";

export default function Home() {
  const { data: profile } = useAPI(() => getProfile());
  const { data: experiences } = useAPI(() => getExperience());
  const { data: about } = useAPI(() => getAbout());

  if (!profile || !experiences || !about) return null;

  return (
    <div className="scroll-smooth">
      <CursorHighlight />
      <Hero profile={profile} />
      <About about={about} />
      <Experience experiences={experiences} />
      {/* <Education />*/}
      <Contact />
      <Footer />
    </div>
  );
}
