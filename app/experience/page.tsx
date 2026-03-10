"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Radio, ChevronUp, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const SandboxScene = dynamic(() => import("@/components/canvas/SandboxScene"), { ssr: false });

export default function ExperiencePage() {
  const [phase, setPhase] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <main className="fixed inset-0 bg-[#050505] text-white flex flex-col md:flex-row overflow-hidden">
      
      {/* Sidebar / Bottom Sheet */}
      <motion.aside 
        initial={false}
        animate={{ 
          // Use height for mobile, width for desktop
          height: typeof window !== 'undefined' && window.innerWidth < 768 
            ? (isSidebarOpen ? "60%" : "80px") 
            : "100%",
          width: typeof window !== 'undefined' && window.innerWidth >= 768 
            ? (isSidebarOpen ? "450px" : "80px") 
            : "100%"
        }}
        className="fixed bottom-0 md:relative md:h-full bg-[#0a0a0a] border-t md:border-t-0 md:border-r border-white/5 flex flex-col z-20 shadow-2xl transition-all duration-500 ease-in-out"
      >
        {/* Toggle Button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -top-12 right-6 md:top-1/2 md:-right-4 md:-translate-y-1/2 w-10 h-10 bg-[var(--accent)] text-black rounded-full flex items-center justify-center z-30 shadow-lg"
        >
          {isSidebarOpen ? <ChevronDown className="md:rotate-90" /> : <ChevronUp className="md:-rotate-90" />}
        </button>

        {/* Header content wrapper for better layout control */}
        <div className={`flex flex-col h-full overflow-hidden ${!isSidebarOpen && 'md:hidden'}`}>
          <div className="p-6 md:p-8 flex items-center justify-between bg-black/20">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Radio size={14} className="text-[var(--accent)] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">System Active</span>
              </div>
              <h1 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none">SEKATE.OS</h1>
            </div>
            <Link href="/" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--accent)] hover:text-black flex items-center justify-center transition-colors">
              <ArrowLeft size={16} />
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-4">
            {[
              { id: 1, t: "Aerial Scanning", d: "UAV Drone mapping." },
              { id: 2, t: "Land Survey", d: "Geodetic verification." },
              { id: 3, t: "Civil Works", d: "Structural foundations." },
              { id: 4, t: "Environment", d: "Eco-compliance." },
              { id: 5, t: "Town Planning", d: "Grid connection." }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => setPhase(item.id)}
                className={`text-left p-4 md:p-5 border-l-2 transition-all duration-500 ${
                  phase === item.id ? 'bg-[var(--accent)]/10 border-[var(--accent)]' : 'bg-white/5 border-white/10'
                }`}
              >
                <span className={`text-[9px] font-black uppercase tracking-widest ${phase === item.id ? 'text-[var(--accent)]' : 'text-slate-500'}`}>
                  Phase 0{item.id}
                </span>
                <h3 className="text-base md:text-lg font-black uppercase tracking-tighter">{item.t}</h3>
              </button>
            ))}
            <button onClick={() => setPhase(0)} className="mt-2 text-[9px] font-black uppercase tracking-[0.4em] text-slate-700 hover:text-[var(--accent)]">
              // Reset System
            </button>
          </div>
        </div>

        {/* Vertical Text for collapsed state */}
        {!isSidebarOpen && (
          <div className="hidden md:flex flex-col items-center py-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent)] [writing-mode:vertical-lr] rotate-180">Protocol Active</span>
          </div>
        )}
      </motion.aside>

      {/* Render Viewport */}
      <section className="flex-1 relative h-full">
        <SandboxScene phase={phase} />
        <div className="absolute top-24 md:top-8 right-6 md:right-8 text-right pointer-events-none">
          <div className="text-[var(--accent)] font-black text-3xl md:text-5xl leading-none">0{phase}</div>
          <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Module</div>
        </div>
      </section>

    </main>
  );
}