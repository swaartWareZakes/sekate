"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Map, Pipette, TreePine, Building2, Radio } from "lucide-react";
import dynamic from "next/dynamic";

const SandboxScene = dynamic(() => import("@/components/canvas/SandboxScene"), { ssr: false });

export default function ExperiencePage() {
  const [phase, setPhase] = useState(0);

  return (
    <main className="fixed inset-0 bg-[#050505] text-white flex flex-col md:flex-row overflow-hidden">
      
      {/* LEFT: Engineering Interface */}
      <aside className="w-full md:w-[450px] h-full bg-[#0a0a0a] border-r border-white/5 flex flex-col z-20 shadow-2xl">
        
        {/* Terminal Header */}
        <div className="p-8 bg-black/20 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Radio size={14} className="text-[var(--accent)] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">System Active</span>
            </div>
            <h1 className="text-2xl font-black uppercase tracking-tighter leading-none">SEKATE.OS v2.0</h1>
          </div>
          <Link href="/" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[var(--accent)] hover:text-black transition-all">
            <ArrowLeft size={16} />
          </Link>
        </div>

        {/* Gamified Stepper - Locked (No Scroll) */}
        <div className="flex-1 p-8 flex flex-col justify-center gap-4">
          {[
            { id: 1, t: "Aerial Scanning", d: "Deploy UAV Drone for initial site mapping." },
            { id: 2, t: "Land Survey", d: "Geodetic verification & tripod setup." },
            { id: 3, t: "Civil Works", d: "Installation of structural foundations & drainage." },
            { id: 4, t: "Environment", d: "Eco-compliance & green-zone establishment." },
            { id: 5, t: "Town Planning", d: "Superstructure assembly & grid connection." }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => setPhase(item.id)}
              className={`group text-left p-5 border-l-2 transition-all duration-500 ${
                phase === item.id 
                  ? 'bg-[var(--accent)]/10 border-[var(--accent)]' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-black uppercase tracking-widest ${phase === item.id ? 'text-[var(--accent)]' : 'text-slate-500'}`}>
                  Phase 0{item.id}
                </span>
                {phase >= item.id && <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_#FF4D00]" />}
              </div>
              <h3 className="text-lg font-black uppercase tracking-tighter mb-1">{item.t}</h3>
              <p className={`text-xs leading-relaxed ${phase === item.id ? 'text-slate-300' : 'text-slate-500'}`}>
                {item.d}
              </p>
            </button>
          ))}

          <button 
            onClick={() => setPhase(0)}
            className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-center text-slate-700 hover:text-[var(--accent)] transition-colors"
          >
            // Terminate Simulation
          </button>
        </div>

        {/* Footer Stats */}
        <div className="p-8 border-t border-white/5 text-[10px] font-mono text-slate-600 flex justify-between uppercase">
          <span>LAT: -26.2041</span>
          <span>LNG: 28.0473</span>
          <span>ALT: 1753M</span>
        </div>
      </aside>

      {/* RIGHT: High-Fidelity Render Viewport */}
      <section className="flex-1 relative">
        <SandboxScene phase={phase} />
        
        {/* Viewport UI Decor */}
        <div className="absolute top-8 right-8 text-right pointer-events-none">
          <div className="text-[var(--accent)] font-black text-4xl leading-none">0{phase}</div>
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Active Module</div>
        </div>

        <div className="absolute bottom-8 right-8 pointer-events-none border-l border-[var(--accent)] pl-4 py-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Visual Inspection Mode</p>
          <p className="text-[9px] text-slate-500 uppercase mt-1">L-Click + Drag to Rotate Camera</p>
        </div>
      </section>

    </main>
  );
}