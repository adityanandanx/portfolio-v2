import { ArrowDown, FileDownIcon, SendIcon } from "lucide-react";
import Image from "next/image";
import Stuff from "../specific/stuff";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import SectionContainer from "./section-container";
import Link from "next/link";
import ResumeLink from "../specific/resume-link";

const HeroSection = () => {
  return (
    <SectionContainer id="hero" className="relative">
      <div className="min-h-screen flex flex-col justify-center z-20">
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
            <Link href={"/#contact"}>
              <button className="cursor-pointer inline-flex gap-2 items-center px-4 py-2 rounded-full border-primary border hover:bg-primary hover:text-primary-foreground transition-colors duration-75">
                <SendIcon /> Contact Me
              </button>
            </Link>
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
            <ResumeLink>
              <Button variant={"outline"} size={"lg"}>
                Resume <FileDownIcon />
              </Button>
            </ResumeLink>
            <Link href={"/#about"}>
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
            </Link>
          </div>
        </div>
      </div>

      <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
        <g width={"100%"} filter="url(#blur)" className="opacity-50">
          <circle r={100} cx={"30%"} cy="50%" fill="#AF1B3F" />
          <circle r={150} cx={"50%"} cy="50%" fill="#bada55" />
          <circle r={100} cx={"70%"} cy="50%" fill="#0D3B66" />
        </g>{" "}
        <defs>
          <filter id="blur" x="-50%" y="-50%" width={"400%"} height={"400%"}>
            <feGaussianBlur stdDeviation={100} in="SourceGraphic" result="1" />
            <feTurbulence
              id="turb"
              type="turbulence"
              stitchTiles="stitch"
              baseFrequency="0.004"
              numOctaves="2"
              in="1"
              result="2"
            />
            <feDisplacementMap
              in="1"
              in2="2"
              result="afterdisp"
              scale="100"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </SectionContainer>
  );
};

export default HeroSection;
