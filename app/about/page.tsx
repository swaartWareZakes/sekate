"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#050505] text-white overflow-hidden">
      <Navbar />

      {/* Cinematic Hero Section */}
      <section className="relative w-full h-screen flex items-end px-6 md:px-12 pb-24">
        <div className="absolute inset-0 z-0">
          {/* Using the second video for variety */}
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50" src="/video/civil-bridge.mp4" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[var(--accent)] font-bold uppercase tracking-[0.3em] text-sm mb-4">
              Our Story
            </p>
            <h1 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] drop-shadow-2xl">
              Building<br/>The Future.
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xs pb-4"
          >
            <p className="text-slate-300 font-medium leading-relaxed">
              For over a decade, we have engineered infrastructure that connects communities, protects the environment, and stands the test of time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Manifesto / Split Layout */}
      <section className="w-full py-24 md:py-40 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">
              We create spaces <br/> that <span className="text-outline-accent">endure.</span>
            </h2>
            <div className="flex flex-col gap-6 text-slate-400 text-lg leading-relaxed font-light">
              <p>
                Founded on the principles of precision and integrity, Sekate Consulting began as a dedicated structural engineering firm. Over the past 10 years, we have evolved into a multidisciplinary powerhouse, integrating civil engineering, town planning, and environmental stewardship.
              </p>
              <p>
                Our approach is hands-on. We don't just design; we supervise, we audit, and we ensure that every square meter of infrastructure meets stringent SANRAL, COLTO, and NEMA standards.
              </p>
            </div>
            
            <div className="mt-12 flex gap-12">
              <div>
                <h4 className="text-5xl font-black text-[var(--accent)] mb-2">350+</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Projects Delivered</p>
              </div>
              <div>
                <h4 className="text-5xl font-black text-[var(--accent)] mb-2">10</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Years Active</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Blueprint/Drawing Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-[var(--accent)] translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8" />
            <img 
              src="/images/drawing.jpg" 
              alt="Engineering Blueprint" 
              className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

        </div>
      </section>

      {/* Media Mosaic / "How We Work" */}
      <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">
              A Multidisciplinary Approach
            </h3>
            <p className="text-slate-400 text-lg">
              From the first topographic drone survey to the final environmental compliance audit, our teams work in perfect synchronization.
            </p>
          </motion.div>

          {/* Staggered Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="md:col-span-2 md:row-span-2 relative overflow-hidden group"
            >
              <img src="/images/bridge.jpg" className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Civil Construction" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <h4 className="absolute bottom-8 left-8 text-3xl font-black uppercase text-white tracking-tighter">Civil Execution</h4>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="md:col-span-1 md:row-span-1 relative overflow-hidden group"
            >
              <img src="/images/surverying2.jpg" className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Surveying" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <h4 className="absolute bottom-6 left-6 text-xl font-black uppercase text-white tracking-tighter">Precision Surveying</h4>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="md:col-span-1 md:row-span-1 relative overflow-hidden group"
            >
              <img src="/images/water2.jpg" className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Environmental" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <h4 className="absolute bottom-6 left-6 text-xl font-black uppercase text-white tracking-tighter">Environmental Integrity</h4>
            </motion.div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}