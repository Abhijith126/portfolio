"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-80 backdrop-blur-md p-4 flex justify-center">
      <div className="flex space-x-6">
        <Link
          href="#hero"
          className="text-white hover:text-blue-400 transition"
        >
          Home
        </Link>
        <Link
          href="#projects"
          className="text-white hover:text-blue-400 transition"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="text-white hover:text-blue-400 transition"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
