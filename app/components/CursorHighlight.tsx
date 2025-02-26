"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorHighlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-screen h-screen z-50"
      animate={{
        background: `radial-gradient(500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
      transition={{ duration: 0.1, ease: "linear" }}
    />
  );
};

export default CursorHighlight;
