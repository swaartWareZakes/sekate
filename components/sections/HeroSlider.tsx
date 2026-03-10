"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    type: "video",
    src: "/video/hero-bridge.mp4",
    subtitle: "10 Years of Precision",
    titleLine1: "Shaping",
    titleLine2: "Infrastructure."
  },
  {
    id: 2,
    type: "image",
    src: "/images/planning.jpg",
    subtitle: "End-to-End Solutions",
    titleLine1: "Mastering",
    titleLine2: "Town Planning."
  },
  {
    id: 3,
    type: "image",
    src: "/images/environmental.jpg",
    subtitle: "Sustainable Development",
    titleLine1: "Protecting",
    titleLine2: "Environments."
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050505]">
      
      {/* Background Media Horizontal Wipe */}
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={current}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-30%", opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 z-0"
        >
          {slides[current].type === "video" ? (
            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-75" src={slides[current].src} />
          ) : (
            <img src={slides[current].src} alt="Slide background" className="w-full h-full object-cover opacity-75" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Massive Hollow Number */}
      <div className="absolute top-1/2 left-[-5%] -translate-y-1/2 z-0 hidden lg:block select-none pointer-events-none">
        <span className="text-outline text-[20rem] font-black leading-none">
          0{current + 1}
        </span>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end px-6 md:px-20 pb-24 md:pb-32">
        <div className="max-w-7xl w-full mx-auto flex justify-between items-end">
          
          {/* Text Reveal Block */}
          <div className="flex-1 relative h-[250px] md:h-[300px]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`text-${current}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="absolute bottom-0 left-0"
              >
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-12 h-[2px] bg-[var(--accent)]"></div>
                  <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
                    {slides[current].subtitle}
                  </p>
                </div>
                
                <h1 className="text-5xl md:text-[7rem] leading-[0.85] font-black uppercase tracking-tighter text-white drop-shadow-lg">
                  {slides[current].titleLine1}
                </h1>
                <h1 className="text-5xl md:text-[7rem] leading-[0.85] font-black uppercase tracking-tighter text-slate-300 drop-shadow-lg">
                  {slides[current].titleLine2}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* "Next Slide" Trigger Box */}
          <button 
            onClick={nextSlide}
            className="hidden md:flex group relative w-32 h-32 bg-[var(--accent)] items-center justify-center overflow-hidden cursor-pointer flex-col gap-2"
          >
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.33,1,0.68,1]" />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <span className="text-white group-hover:text-black transition-colors duration-300 font-black text-3xl">
                0{current === slides.length - 1 ? 1 : current + 2}
              </span>
              <ArrowRight className="text-white group-hover:text-black group-hover:translate-x-2 transition-all duration-300" size={24} />
            </div>
          </button>

        </div>
      </div>
    </section>
  );
}