"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function BookModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }} 
            exit={{ scale: 0.95, opacity: 0, y: 20 }} 
            className="relative bg-[#111] border border-white/10 w-full max-w-lg p-10 shadow-2xl"
          >
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors"
            >
              Close [X]
            </button>
            
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 text-white">
              Let's Talk.
            </h3>
            <p className="text-slate-400 mb-8 text-sm">
              Book a consulting call with our engineering team.
            </p>
            
            <form className="flex flex-col gap-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-slate-600" 
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-slate-600" 
              />
            <select 
                defaultValue="" 
                className="bg-transparent border-b border-white/20 pb-3 text-slate-400 focus:outline-none focus:border-[var(--accent)] transition-colors cursor-pointer appearance-none"
              >
                <option value="" disabled>Select a Service...</option>
                <option value="civil" className="bg-[#111]">Civil & Structural</option>
                <option value="environmental" className="bg-[#111]">Environmental</option>
                <option value="surveying" className="bg-[#111]">Land Surveying</option>
                <option value="planning" className="bg-[#111]">Town Planning</option>
              </select>
              <button 
                type="button" 
                onClick={onClose} 
                className="mt-4 bg-[var(--accent)] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}