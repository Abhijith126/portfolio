"use client";

import { Socials } from "@/components";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-800 text-gray-100"
    >
      <h2 className="text-6xl">Contact Me</h2>
      <p className="text-gray-400 mt-4">
        Feel free to reach out via email or LinkedIn.
      </p>
      <Socials />
    </section>
  );
}
