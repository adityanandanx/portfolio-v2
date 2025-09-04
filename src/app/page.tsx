import AboutSection from "@/components/sections/about-section";
import AwardSection from "@/components/sections/award-section";
import ExpSection from "@/components/sections/exp-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectSection from "@/components/sections/project-section";
import Socials from "@/components/shared/socials";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <ExpSection />
      <ProjectSection />
      <AwardSection />
      <Socials />
    </main>
  );
}
