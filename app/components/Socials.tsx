"use client";
import { ReactElement } from "react";
import { useAPI } from "@/hooks/useAPI";
import { getSocials } from "@/services";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const iconMap: { [key: string]: ReactElement } = {
  AiFillLinkedin: <AiFillLinkedin />,
  AiFillGithub: <AiFillGithub />,
  AiFillMail: <AiFillMail />,
};

const Socials = () => {
  const { data: socials, isLoading } = useAPI(() => getSocials());

  if (isLoading || !socials) return null;

  return (
    <div className="flex items-center gap-5">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cream-muted text-xl hover:text-brass transition-colors duration-300"
          aria-label={social.name}
        >
          {iconMap[social.icon] || null}
        </a>
      ))}
    </div>
  );
};

export default Socials;
