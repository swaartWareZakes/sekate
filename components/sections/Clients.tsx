"use client";

import { motion } from "framer-motion";
import { Building2, Landmark, Factory, ShieldHalf, Map, Diamond } from "lucide-react";

// Placeholder data for companies/municipalities worked with
const clients = [
  { name: "Apex Infrastructure", icon: <Building2 size={32} /> },
  { name: "Gauteng Municipal", icon: <Landmark size={32} /> },
  { name: "TerraFirma Dev", icon: <Map size={32} /> },
  { name: "Nexus Engineering", icon: <Factory size={32} /> },
  { name: "Aura Environmental", icon: <ShieldHalf size={32} /> },
  { name: "Pinnacle Group", icon: <Diamond size={32} /> },
];

export default function Clients() {
  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
            Trusted Partners
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
            Collaborating with industry leaders.
          </h3>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center gap-4 group cursor-pointer"
            >
              <div className="text-slate-600 group-hover:text-[var(--accent)] transition-colors duration-500">
                {client.icon}
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-slate-500 group-hover:text-white transition-colors duration-500 text-center">
                {client.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}