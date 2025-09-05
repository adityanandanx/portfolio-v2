import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SectionContainer from "./section-container";

const ExpSection = () => {
  return (
    <SectionContainer id="exp">
      <div className="min-h-screen flex flex-col justify-center">
        <div className="flex gap-10 items-center ">
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="w-full gap-5 text-2xl font-mono flex items-center">
              <span>
                <span className="text-primary">02. </span>
                <span>Where I&lsquo;ve worked</span>
              </span>
              <hr className="flex-1" />
            </div>
            <div className="space-y-3">
              <Exp
                href="https://www.quivr.com/"
                logo="/images/quivr.jpeg"
                ariaLabel="Link to Quivr's website"
                position="Frontend Intern"
                company="Quivr (YC W24)"
                location="Remote"
                from="Sep 2024"
                to="Nov 2024"
              >
                <ul className="list-outside ml-5 list-disc">
                  <li>
                    Integrated rich text note-taking feature in React codebase
                  </li>
                  <li>Developed using React.js, Next.js, SCSS, TipTap</li>
                  <li>
                    Enabled creation, management, and querying of notes using
                    retrieval-augmented generation (RAG) conversational
                    artificial intelligence
                  </li>
                </ul>
              </Exp>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

const Exp = ({
  href,
  logo,
  ariaLabel,
  position,
  company,
  from,
  to,
  location,
  children,
}: {
  href: string;
  logo: string;
  ariaLabel: string;
  position: string;
  company: string;
  from: string;
  to: string;
  location: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-5 py-5">
      <a
        href={href}
        target="_blank"
        className="group relative"
        aria-label={ariaLabel}
      >
        <Image
          src={logo}
          alt={`${company} Logo`}
          className="w-[160px] h-[160px] rounded-lg group-hover:opacity-25 transition-opacity"
          width={160}
          height={160}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRight size={64} />
        </div>
      </a>
      <Card className="p-0 bg-transparent flex-1 gap-3 border-none">
        <CardHeader className="px-0">
          <CardTitle className="text-xl">
            {position}{" "}
            <a
              href="https://www.quivr.com/"
              target="_blank"
              className="text-primary"
            >
              @ {company}
            </a>
          </CardTitle>
          <CardDescription className="font-mono text-base">
            <span>
              {from} - {to}
            </span>
            <br />
            <span>{location}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0">{children}</CardContent>
      </Card>
    </div>
  );
};

export default ExpSection;
