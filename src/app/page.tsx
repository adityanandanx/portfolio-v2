import AboutSection from "@/components/sections/about-section";
import AwardSection from "@/components/sections/award-section";
import ContactSection from "@/components/sections/contact-section";
import ExpSection from "@/components/sections/exp-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectSection from "@/components/sections/project-section";
import Socials from "@/components/shared/socials";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <ExpSection />
      <ProjectSection />
      <AwardSection />
      <ContactSection />
      <Footer />
      <Socials />
    </main>
  );
}
