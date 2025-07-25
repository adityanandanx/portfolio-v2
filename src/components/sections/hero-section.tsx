import { ArrowDown, IndianRupeeIcon, SendIcon } from "lucide-react";
import { Button } from "../ui/button";
import SectionContainer from "./section-container";
import ReactCurvedText from "react-curved-text";
import Stuff from "../specific/stuff";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <SectionContainer className="relative">
      <div className="min-h-screen flex flex-col justify-center">
        <div className="flex flex-col items-center mx-auto text-center gap-4">
          <div className="flex gap-4 items-center">
            <Avatar className="size-20 border-2 border-white">
              <AvatarImage src={"/images/adi.jpeg"} />
            </Avatar>
            <div className="flex flex-col text-left">
              <span className="font-medium text-lg">Aditya Nandan</span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Image
                  src={"/icons/ind.svg"}
                  alt="Indian flag"
                  width={24}
                  height={24}
                />{" "}
                Based in India
              </span>
            </div>
          </div>
          <h1 className="flex flex-wrap items-center justify-center gap-x-4">
            <span className="text-[12vh] flex flex-col uppercase font-sans font-bold leading-none">
              FULLSTACK
            </span>
            <span className="text-[12vh] flex flex-col uppercase font-sans font-bold leading-none">
              DEVELOPER
            </span>
            <button className="cursor-pointer inline-flex gap-2 items-center px-4 py-2 rounded-full border-primary border hover:bg-primary hover:text-primary-foreground transition-colors duration-75">
              <SendIcon /> Contact Me
            </button>
          </h1>
          <h2 className="text-4xl font-thin">
            I build <Stuff />
          </h2>
          {/* <p className="opacity-50">
            I build practical, user-friendly applications with modern
            technologies. As a pre-final year Computer Science student, I
            transform complex challenges into functional and polished software.
          </p> */}
          <Button variant={"outline"} size={"lg"}>
            Let&lsquo;s Go <ArrowDown />
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
