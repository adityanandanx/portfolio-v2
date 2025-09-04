import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SectionContainer from "./section-container";
import { ArrowBigRightIcon, ArrowUpRight } from "lucide-react";

type Props = {};

const ExpSection = (props: Props) => {
  return (
    <SectionContainer>
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
              <div className="flex items-start py-5">
                <a
                  href="https://www.quivr.com/"
                  target="_blank"
                  className="group relative"
                  aria-label="Link to quivr.com"
                >
                  <Image
                    src={"/images/quivr.jpeg"}
                    alt="Quivr Logo"
                    className="w-[160px] h-[160px] rounded-lg group-hover:opacity-25 transition-opacity"
                    width={160}
                    height={160}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight size={64} />
                  </div>
                </a>
                <Card className="p-0 bg-transparent gap-3 border-none">
                  <CardHeader className="">
                    <CardTitle className="text-xl">
                      Frontend Intern{" "}
                      <a
                        href="https://www.quivr.com/"
                        target="_blank"
                        className="text-primary"
                      >
                        @ Quivr (YC W24)
                      </a>
                    </CardTitle>
                    <CardDescription className="font-mono text-base">
                      <span>Sep 2024 - Nov 2024</span>
                      <br />
                      <span>Remote</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="">
                    <ul className="list-outside ml-5 list-disc">
                      <li>
                        Integrated rich text note-taking feature in React
                        codebase
                      </li>
                      <li>Developed using React.js, Next.js, SCSS, TipTap</li>
                      <li>
                        Enabled creation, management, and querying of notes
                        using retrieval-augmented generation (RAG)
                        conversational artificial intelligence
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExpSection;
