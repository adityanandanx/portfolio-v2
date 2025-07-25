import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import SectionContainer from "./section-container";
import ReactCurvedText from "react-curved-text";
import Stuff from "../specific/stuff";
import { cn } from "@/lib/utils";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <SectionContainer className="relative">
      <div className="min-h-screen flex flex-col justify-center">
        <div className="flex flex-col items-start gap-4 max-w-2xl">
          <div className="text-2xl font-mono">Hi, my name is</div>
          <h1 className="text-6xl font-bold">Aditya Nandan.</h1>
          <h2 className="text-6xl font-thin">
            I build <Stuff />
          </h2>
          <p className="opacity-50">
            I build practical, user-friendly applications with modern
            technologies. As a pre-final year Computer Science student, I
            transform complex challenges into functional and polished software.
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
