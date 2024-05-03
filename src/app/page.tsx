import Image from "next/image";
import Hero from "@/components/Hero";
import AboutCards from "@/components/AboutCards";
import SelectedWork from "@/components/SelectedWork";
import Values from "@/components/Values";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main className="px-4 sm:px-8 md:px-16 overflow-hidden lg:px-28">
      <Hero />
      <AboutCards />
      <SelectedWork />
      <Values />
      <Team />
      <CTA />
      <Blog />
    </main>
  );
}
