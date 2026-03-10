"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <-- 1. Import usePathname
import { motion } from "framer-motion";
import BookModal from "@/components/ui/BookModal";

export default function Navbar() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const pathname = usePathname(); // <-- 2. Get the current route

  // 3. Helper function to check if the link is active
  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-8 text-white bg-gradient-to-b from-black/60 to-transparent"
      >
        <div className="font-black text-2xl tracking-tighter uppercase text-white drop-shadow-md">
          <Link href="/">Sekate.</Link>
        </div>

        <nav className="hidden md:flex gap-12 text-xs font-bold uppercase tracking-[0.2em] drop-shadow-md">
          {/* 4. Conditionally apply the accent color if active */}
          <Link href="/about" className={`transition-colors duration-300 hover:text-[var(--accent)] ${isActive('/about') ? 'text-[var(--accent)]' : 'text-white'}`}>
            About
          </Link>
          <Link href="/services" className={`transition-colors duration-300 hover:text-[var(--accent)] ${isActive('/services') ? 'text-[var(--accent)]' : 'text-white'}`}>
            Services
          </Link>
          <Link href="/projects" className={`transition-colors duration-300 hover:text-[var(--accent)] ${isActive('/projects') ? 'text-[var(--accent)]' : 'text-white'}`}>
            Projects
          </Link>
          <Link href="/experience" className={`transition-colors duration-300 hover:text-[var(--accent)] ${isActive('/experience') ? 'text-[var(--accent)]' : 'text-white'} flex items-center gap-2`}>
            <span>Experience</span>
            <span className="bg-[var(--accent)] text-black text-[9px] px-1.5 py-0.5 rounded-sm">3D</span>
          </Link>
          <Link href="/contact" className={`transition-colors duration-300 hover:text-[var(--accent)] ${isActive('/contact') ? 'text-[var(--accent)]' : 'text-white'}`}>
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <button 
            onClick={() => setIsBookModalOpen(true)} 
            className="text-xs font-black uppercase tracking-[0.2em] text-black bg-white px-6 py-4 hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
          >
            Book a Call
          </button>
        </div>
      </motion.header>

      {/* The modal is now globally attached to the Navbar! */}
      <BookModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />
    </>
  );
}