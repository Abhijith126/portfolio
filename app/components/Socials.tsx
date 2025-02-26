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

  if (isLoading || !socials) return <>Loading..</>;

  return (
    <div className="flex space-x-4 mt-4 ">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 text-2xl hover:text-gray-100 transition"
        >
          {iconMap[social.icon] || null}
        </a>
      ))}
    </div>
  );
};

export default Socials;
