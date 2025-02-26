"use client";

export default function Footer() {
  return (
    <div className="bg-gray-800 flex justify-center items-center py-4 text-white">
      <p className="uppercase text-xs font-medium">
        Abhijith Prabhakar &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
}
