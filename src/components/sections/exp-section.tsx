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
                position="Frontend Intern & Open Source Contributor"
                company="Quivr (YC W24)"
                location="Remote"
                from="May 2023"
                to="Nov 2024"
              >
                <ul className="list-outside ml-5 list-disc">
                  <li>
                    Built the notetaker feature end-to-end from scratch (8
                    PRs, 6 merged) with TipTap/ProseMirror, shipping a
                    formatting toolbar, sticky search bar, and scoped styling
                    as Notetaker 0.1
                  </li>
                  <li>
                    Implemented &quot;@&quot;-mention brain selection, Mod+F
                    search bar, and a shared ChatBar reused across search and
                    notetaker with note-scoped conversations
                  </li>
                  <li>
                    Designed a custom TipTap AIHighlight extension marking AI
                    output as provisional with explicit accept/decline actions
                  </li>
                  <li>
                    Restructured the prototype to the Next.js App Router,
                    built the first reusable primitives (Button, NavBar,
                    Modal, Toast, Tooltip), and shipped multi-conversation
                    chat with Supabase-backed history plus a searchable
                    multi-brain switcher on Radix UI popovers
                  </li>
                  <li>
                    Resynced a release branch diverged 500+ files from main
                    to unblock the 0.1 release; shipped a Whisper-based
                    STT/TTS chatbot example with 11-language translations
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
        rel="noopener noreferrer"
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
              rel="noopener noreferrer"
              className="text-primary"
            >
              @ {company}
            </a>
          </CardTitle>
          <CardDescription className="font-mono text-base">
            <span>
              <time dateTime={from}>{from}</time> -{" "}
              <time dateTime={to}>{to}</time>
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
