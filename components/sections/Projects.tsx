"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
              Featured Work
            </h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9]">
              Recent<br/>Projects.
            </h3>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 md:mt-0 pb-2"
          >
             <Link 
                href="/projects" 
                className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)] hover:text-white transition-colors"
              >
                View All Projects
                <span className="w-8 h-[2px] bg-[var(--accent)] group-hover:bg-white group-hover:w-12 transition-all duration-300"></span>
             </Link>
          </motion.div>
        </div>

        {/* The Staggered Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {projectsData.map((proj, idx) => (
            <motion.div 
              key={proj.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.33, 1, 0.68, 1] }}
              className={`relative h-[400px] md:h-[500px] overflow-hidden group cursor-pointer ${proj.span}`}
            >
              <Link href={`/projects/${proj.id}`} className="absolute inset-0 w-full h-full block">
                {/* Image scaling on hover */}
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-[0.33,1,0.68,1]" 
                />
                
                {/* Hover Dark Glass Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end p-8 md:p-10" />

                {/* Text Content - Slides up on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 overflow-hidden pointer-events-none">
                  <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.33,1,0.68,1]">
                    <p className="text-[var(--accent)] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                      {proj.category}
                    </p>
                    <h4 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                      {proj.title}
                    </h4>
                    
                    {/* Circle Arrow Button */}
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-colors duration-300">
                       <ArrowRight className="text-white group-hover:text-black transition-colors" size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}