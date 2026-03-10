"use client";

import { motion } from "framer-motion";

export default function AboutStats() {
  return (
    <section id="about" className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#050505] flex flex-col items-center">
      
      {/* Top Row: The Manifesto & Giant Number */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center mb-20 md:mb-32">
        
        {/* Left: Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-1"
        >
          <h2 className="text-3xl md:text-4xl font-medium leading-tight text-white mb-6">
            Delivering <span className="text-[var(--accent)] font-bold">precision engineering</span>, effective planning, and safe built spaces.
          </h2>
          <p className="text-slate-400 leading-relaxed text-sm md:text-base">
            We turn civil and structural engineering concepts into physical realities. Adopting a hands-on approach, we build infrastructure that is safe, functional, and deeply cost-effective for tomorrow's cities.
          </p>
        </motion.div>

        {/* Middle: Massive Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-1 flex justify-center items-center"
        >
          <h3 className="text-[12rem] md:text-[16rem] font-black text-[var(--accent)] leading-none tracking-tighter">
            10
          </h3>
        </motion.div>

        {/* Right: Establishment Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-1"
        >
           <h4 className="text-lg md:text-xl font-bold uppercase tracking-widest text-white mb-4">
             Established for 10 Years.
           </h4>
           <p className="text-slate-400 leading-relaxed text-sm md:text-base mb-6">
             We are dedicated to providing outstanding civil, structural, and environmental services that meet the functional and regulatory needs of our clients across South Africa.
           </p>
           {/* Simple sleek link mimicking the template */}
           <a href="/about" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-[var(--accent)] transition-colors group">
             Read Our Story
             <span className="w-8 h-[1px] bg-white group-hover:bg-[var(--accent)] transition-colors"></span>
           </a>
        </motion.div>
      </div>

      {/* Bottom Row: Stats Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-left border-t border-white/10 pt-16">
        {[
          { num: "350+", text: "Satisfied clients across the private and public sectors." },
          { num: "100%", text: "Commitment to SANRAL, SANS, and NEMA standards." },
          { num: "500+", text: "Infrastructure projects engineered and surveyed." }
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="flex flex-col gap-4"
          >
            <h5 className="text-4xl md:text-5xl font-black text-white">{stat.num}</h5>
            <div className="flex gap-4 items-start">
              <span className="text-[var(--accent)] font-black mt-1">0{idx + 1}</span>
              <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-[200px]">
                {stat.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}