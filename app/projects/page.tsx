"use client";
import Navbar from "@/components/ui/Navbar";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";

export default function ProjectsPage() {
  return (
    <main className="bg-[#050505] min-h-screen pt-20">
      <Navbar  />
      <Projects />
      <Footer />
    </main>
  );
}