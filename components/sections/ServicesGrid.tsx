"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/lib/data";

export default function ServicesGrid() {
  const getGridSpan = (index: number) => {
    switch (index) {
      case 0: return "md:col-span-2 md:row-span-2"; // Civil: Massive block
      case 1: return "md:col-span-1 md:row-span-1"; // Env: Top Right square
      case 2: return "md:col-span-1 md:row-span-1"; // Survey: Bottom Right square
      case 3: return "md:col-span-3 md:row-span-1"; // Planning: Bottom wide panorama
      default: return "col-span-1";
    }
  };

  return (
    <section id="services" className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
              Core Disciplines
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[1.1]">
              Engineered for the <br/> Modern World.
            </h3>
          </motion.div>
        </div>

        {/* 2026 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.33, 1, 0.68, 1] }}
              className={`group relative block w-full h-full overflow-hidden bg-[#111] ${getGridSpan(idx)}`}
            >
              <Link href={`/services/${service.id}`} className="absolute inset-0 w-full h-full cursor-pointer">
                
                {/* Media Background - Grayscale to Color Reveal */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={service.media} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[0.33,1,0.68,1]" 
                  />
                </div>
                
                {/* Dynamic Gradient Overlays */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  
                  {/* Top Bar: Number and Arrow */}
                  <div className="flex justify-between items-start w-full">
                    <span className="text-outline text-5xl font-black block transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      {service.num}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[var(--accent)] group-hover:border-black transition-colors duration-500 overflow-hidden">
                      <ArrowUpRight className="text-white group-hover:text-black transform translate-y-4 -translate-x-4 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                  </div>
                  
                  {/* Bottom Text */}
                  <div className="relative z-10">
                    <h4 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {service.title}
                    </h4>
                    <div className="overflow-hidden">
                      <p className="text-slate-300 text-sm md:text-base max-w-sm transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {service.short}
                      </p>
                    </div>
                  </div>

                  {/* Structural Accent Line */}
                  <div className="absolute bottom-0 left-0 h-[3px] bg-[var(--accent)] w-0 group-hover:w-full transition-all duration-700 ease-[0.33,1,0.68,1]" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}