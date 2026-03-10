"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Lock scrolling while loading
    document.body.style.overflow = "hidden";

    // Artificial counter for that Awwwards feel
    const countInterval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) {
          return prev + Math.floor(Math.random() * 10) + 1;
        }
        clearInterval(countInterval);
        return 100;
      });
    }, 50);

    // Wait for the window to actually load its heavy assets, plus a small buffer
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "auto";
      }, 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(countInterval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] bg-[#050505] flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="flex flex-col items-center overflow-hidden">
            <span className="text-[var(--accent)] font-bold uppercase tracking-[0.3em] text-xs mb-4">
              Loading Assets
            </span>
            <div className="flex items-end gap-2">
              <span className="text-7xl md:text-9xl font-black text-white leading-none">
                {counter > 100 ? 100 : counter}
              </span>
              <span className="text-3xl md:text-5xl font-black text-[var(--accent)] leading-none pb-2">
                %
              </span>
            </div>
            
            {/* Loading Bar */}
            <div className="w-64 h-[2px] bg-white/10 mt-8 overflow-hidden">
              <motion.div 
                className="h-full bg-[var(--accent)]"
                initial={{ width: "0%" }}
                animate={{ width: `${counter > 100 ? 100 : counter}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}