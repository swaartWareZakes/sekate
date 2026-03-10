"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import BookModal from "@/components/ui/BookModal";

export default function Navbar() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(path);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience", extra: "3D" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 w-full z-[80] flex items-center justify-between px-6 md:px-12 py-6 md:py-8 text-white bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px] md:backdrop-blur-0"
      >
        <div className="font-black text-xl md:text-2xl tracking-tighter uppercase text-white">
          <Link href="/">Sekate.</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-10 text-[10px] font-bold uppercase tracking-[0.25em]">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`transition-colors duration-300 hover:text-[var(--accent)] ${isActive(link.href) ? 'text-[var(--accent)]' : 'text-white'} flex items-center gap-2`}
            >
              <span>{link.name}</span>
              {link.extra && <span className="bg-[var(--accent)] text-black text-[8px] px-1 py-0.5 rounded-sm">{link.extra}</span>}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsBookModalOpen(true)} 
            className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em] text-black bg-white px-6 py-4 hover:bg-[var(--accent)] transition-all duration-300"
          >
            Book a Call
          </button>
          
          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[70] bg-[#0a0a0a] flex flex-col p-8 pt-32 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link 
                    href={link.href}
                    className={`text-4xl font-black uppercase tracking-tighter ${isActive(link.href) ? 'text-[var(--accent)]' : 'text-white'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => { setIsMobileMenuOpen(false); setIsBookModalOpen(true); }}
                className="mt-8 self-start bg-[var(--accent)] text-black font-black uppercase tracking-widest px-8 py-5 text-sm"
              >
                Book a Call
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />
    </>
  );
}