"use client";

export default function Footer() {
  return (
    <footer className="border-t border-ink-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-cream-faint text-xs tracking-[0.2em] uppercase font-body">
          &copy; {new Date().getFullYear()} Abhijith Prabhakar
        </p>
        <p className="text-cream-faint text-xs tracking-wide font-body">
          Designed &amp; built with intention
        </p>
      </div>
    </footer>
  );
}
