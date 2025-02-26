"use client";
import { Socials } from "@/components";
import { useAPI } from "@/hooks";
import { getProfile } from "@/services";

export default function Hero() {
  const { data: profile, isLoading } = useAPI(() => getProfile());

  if (isLoading || !profile) return <p>Loading...</p>;

  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white"
    >
      <h1 className="text-6xl text-gray-100">
        Hello, I&apos;m <span className="text-blue-500">{profile.name}</span>
      </h1>
      <h3 className="text-4xl mt-2 text-gray-300">I&apos;m a {profile.role}</h3>
      <Socials />
    </section>
  );
}
