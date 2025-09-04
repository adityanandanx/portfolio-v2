import { ArrowDown, FileDownIcon, SendIcon } from "lucide-react";
import Image from "next/image";
import Stuff from "../specific/stuff";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import SectionContainer from "./section-container";

const HeroSection = () => {
  return (
    <SectionContainer id="hero" className="relative">
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
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl flex flex-col uppercase font-sans font-bold leading-none">
              FULLSTACK
            </span>
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl flex flex-col uppercase font-sans font-bold leading-none">
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
          <div className="space-x-5">
            <Button variant={"outline"} size={"lg"}>
              Resume <FileDownIcon />
            </Button>
            <Button variant={"default"} size={"lg"} className="group">
              Let&lsquo;s Go
              <div className="h-full flex flex-col gap-0 items-center justify-center w-3 group-hover:translate-y-4 transition-transform duration-300">
                <ArrowDown
                  className="absolute -translate-y-full opacity-0 transition-opacity group-hover:opacity-100 h-3 duration-300"
                  aria-hidden
                />
                <ArrowDown className="absolute opacity-100 transition-opacity group-hover:opacity-0 h-3 duration-300" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
