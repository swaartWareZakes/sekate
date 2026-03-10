"use client";

import Navbar from "@/components/ui/Navbar";
import HeroSlider from "@/components/sections/HeroSlider";
import AboutStats from "@/components/sections/AboutStats";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Projects from "@/components/sections/Projects";
import Clients from "@/components/sections/Clients";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#050505]">
      <Navbar /> {/* SO CLEAN! */}
      <HeroSlider />
      <AboutStats />
      <ServicesGrid />
      <Projects />
      <Clients />
      <Footer />
    </main>
  );
}