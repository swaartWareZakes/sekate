"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#050505] py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      
      {/* Massive background text watermark */}
      <span className="absolute -bottom-10 md:-bottom-20 left-0 text-outline text-[12rem] md:text-[20rem] font-black leading-none whitespace-nowrap pointer-events-none select-none opacity-20">
        SEKATE CONSULTING
      </span>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
        
        {/* Left Side: Massive CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-white leading-[0.9]">
            Let's<br/>
            <span className="text-[var(--accent)]">Build.</span>
          </h2>
          <a 
            href="mailto:info@sekateconsulting.co.za" 
            className="text-lg md:text-2xl font-bold uppercase tracking-widest text-slate-300 hover:text-[var(--accent)] transition-colors inline-block pb-2 border-b-2 border-white/20 hover:border-[var(--accent)]"
          >
            info@sekateconsulting.co.za
          </a>
        </motion.div>

        {/* Right Side: Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-end gap-12 md:items-end md:text-right"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-3">Location</p>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-medium">
              22 Minnaar Street, Newtown<br/>Johannesburg, 2001, SA
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-3">Contact</p>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-medium">
              +27 11 123 4567
            </p>
          </div>
          
          <div className="flex gap-6 pt-4">
            <a href="#" className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors">Instagram</a>
          </div>
        </motion.div>
        
      </div>
    </footer>
  );
}