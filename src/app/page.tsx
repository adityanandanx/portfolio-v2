import AboutSection from "@/components/sections/about-section";
import ExpSection from "@/components/sections/exp-section";
import HeroSection from "@/components/sections/hero-section";
import Socials from "@/components/shared/socials";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <ExpSection />
      <Socials />
    </main>
  );
}
