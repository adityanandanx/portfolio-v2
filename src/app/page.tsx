import AboutSection from "@/components/sections/about-section";
import HeroSection from "@/components/sections/hero-section";
import Socials from "@/components/shared/socials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Socials />
    </main>
  );
}
