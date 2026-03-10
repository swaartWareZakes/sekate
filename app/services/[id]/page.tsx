import { notFound } from "next/navigation";
import { servicesData } from "@/lib/data";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";

export default async function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.id === resolvedParams.id);

  if (!service) notFound();

  return (
    <main className="relative w-full min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Hero Image Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.media} alt={service.title} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full h-full flex flex-col justify-end px-6 md:px-12 pb-24 max-w-7xl mx-auto">
          <p className="text-[var(--accent)] font-bold uppercase tracking-[0.3em] text-sm mb-6 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[var(--accent)]"></span>
            Service 0{service.num}
          </p>
          <h1 className="text-5xl md:text-[7rem] font-black uppercase tracking-tighter leading-[0.9]">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Editorial Content & Gallery */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          
          {/* Left: Text Content */}
          <div className="sticky top-32">
            <h3 className="text-3xl md:text-5xl font-medium mb-10 text-white leading-tight">
              {service.short}
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg mb-12">
              {service.description}
            </p>
            
            <div className="bg-[#111] p-10 border-l-4 border-[var(--accent)]">
              <h4 className="text-lg font-black uppercase tracking-widest text-white mb-6">
                Core Capabilities
              </h4>
              <ul className="flex flex-col gap-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-300 text-sm md:text-base">
                    <span className="text-[var(--accent)] font-bold">///</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Staggered Image Gallery */}
          <div className="flex flex-col gap-8 md:gap-16 pt-10">
            {service.gallery?.map((img, idx) => (
              <div 
                key={idx} 
                className={`w-full h-[400px] md:h-[600px] overflow-hidden ${idx % 2 !== 0 ? 'md:ml-12' : 'md:mr-12'}`}
              >
                <img 
                  src={img} 
                  alt="Service Detail" 
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700" 
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