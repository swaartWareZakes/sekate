"use client";
import Navbar from "@/components/ui/Navbar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Footer from "@/components/sections/Footer";

export default function ServicesPage() {
  return (
    <main className="bg-[#050505] min-h-screen pt-20">
      <Navbar />
      <ServicesGrid />
      <Footer />
    </main>
  );
}