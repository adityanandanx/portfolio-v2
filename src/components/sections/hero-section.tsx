import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import SectionContainer from "./section-container";
import ReactCurvedText from "react-curved-text";
import Stuff from "../specific/stuff";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <SectionContainer>
      <div className="min-h-screen flex flex-col justify-center">
        <div className="flex flex-col items-start gap-4 max-w-4xl">
          <div className="text-2xl font-mono">Hi, my name is</div>
          <h1 className="text-6xl font-bold">Aditya Nandan.</h1>
          <h2 className="text-6xl font-thin">
            I build <Stuff />
          </h2>
          <p className="opacity-50">
            I’m a pre-final year CSE student and passionate builder who loves
            turning complex ideas into simple, user-friendly products. From
            winning hackathons to shipping real-world projects, I thrive in
            fast-paced, collaborative environments. I’m now looking for a
            software engineering internship where I can help create impactful
            products with a driven team.
          </p>
          <Button variant={"outline"} size={"lg"}>
            Let&lsquo;s Go <ArrowDown />
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
