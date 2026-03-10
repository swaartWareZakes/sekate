import { notFound } from "next/navigation";
import { projectsData } from "@/lib/data";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.id.toString() === resolvedParams.id);

  if (!project) notFound();

  return (
    <main className="relative w-full min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Cinematic Project Hero */}
      <section className="relative w-full h-[90vh] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <div className="inline-block border border-[var(--accent)] text-[var(--accent)] font-bold uppercase tracking-widest text-xs px-6 py-3 mb-8">
            {project.category}
          </div>
          <h1 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] text-white drop-shadow-2xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Project Specs Data Bar */}
      <section className="w-full border-y border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="flex-1 p-8 md:p-12">
            <p className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-3">Client</p>
            <p className="text-white font-medium text-lg">Confidential Partner</p>
          </div>
          <div className="flex-1 p-8 md:p-12">
            <p className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-3">Timeline</p>
            <p className="text-white font-medium text-lg">2024 - 2026</p>
          </div>
          <div className="flex-1 p-8 md:p-12">
            <p className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-3">Location</p>
            <p className="text-white font-medium text-lg">Gauteng, SA</p>
          </div>
        </div>
      </section>

      {/* Editorial Overview & Gallery */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-4xl mb-24">
            <h3 className="text-4xl font-medium mb-10 text-white">Project Overview</h3>
            <p className="text-slate-400 leading-relaxed text-xl mb-6 font-light">
              This landmark project required extensive planning, rigorous environmental compliance, and state-of-the-art engineering execution. Working closely with municipal stakeholders and leading contractors, Sekate Consulting delivered end-to-end oversight to ensure all infrastructure met the highest SANS and SANRAL specifications.
            </p>
          </div>

          {/* Full Width Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {project.gallery?.map((img, idx) => (
              <div key={idx} className={`w-full overflow-hidden ${idx === 0 ? 'md:col-span-2 h-[50vh] md:h-[80vh]' : 'h-[400px]'}`}>
                <img 
                  src={img} 
                  alt={`${project.title} Gallery Image`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out" 
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}