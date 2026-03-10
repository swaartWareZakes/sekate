"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="w-full min-h-screen pt-24 md:pt-32 flex flex-col lg:flex-row">
        
        {/* Left Side: Dark Map / Image Overlay */}
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen flex flex-col justify-end p-8 md:p-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Using your awesome highway aerial as the dark background */}
            <img 
              src="/images/planning.jpg" 
              alt="Aerial Highway" 
              className="w-full h-full object-cover grayscale-[0.8] opacity-30" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }} // Delayed to wait for preloader
            className="relative z-10"
          >
            <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Let's <br/> <span className="text-[var(--accent)]">Talk.</span>
            </h1>
            
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-2">Our Offices</p>
                <p className="text-xl font-medium text-slate-300">22 Minnaar Street, Newtown<br/>Johannesburg, 2001, SA</p>
              </div>
              <div>
                <p className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-2">Direct Line</p>
                <p className="text-xl font-medium text-slate-300">+27 11 123 4567</p>
              </div>
              <div>
                <p className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:info@sekateconsulting.co.za" className="text-xl font-medium text-white hover:text-[var(--accent)] transition-colors border-b border-white/20 pb-1">
                  info@sekateconsulting.co.za
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Minimalist Form */}
        <div className="w-full lg:w-1/2 bg-[#0a0a0a] flex items-center justify-center p-8 md:p-16 lg:p-24 border-l border-white/5">
          <motion.form 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="w-full max-w-xl flex flex-col gap-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4">
              Send a Message
            </h2>

            <div className="flex flex-col gap-2 group">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-[var(--accent)] transition-colors">Your Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 pb-4 text-xl text-white focus:outline-none focus:border-[var(--accent)] transition-colors" />
            </div>

            <div className="flex flex-col gap-2 group">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-[var(--accent)] transition-colors">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-white/20 pb-4 text-xl text-white focus:outline-none focus:border-[var(--accent)] transition-colors" />
            </div>

            <div className="flex flex-col gap-2 group">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-[var(--accent)] transition-colors">Project Details</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-white/20 pb-4 text-xl text-white focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"></textarea>
            </div>

            <button type="submit" className="self-start mt-4 bg-[var(--accent)] text-black px-10 py-5 text-sm font-black uppercase tracking-[0.2em] hover:bg-white transition-all duration-300">
              Submit Inquiry
            </button>
          </motion.form>
        </div>

      </section>

      <Footer />
    </main>
  );
}