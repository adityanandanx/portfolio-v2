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
import { awards } from "../../lib/content";
import { AwardItem } from "../../lib/types";

const AwardSection = () => {
  return (
    <SectionContainer id="award">
      <div className="min-h-screen flex flex-col justify-center">
        <div className="flex gap-10 items-center ">
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="w-full gap-5 text-2xl font-mono flex items-center">
              <span>
                <span className="text-primary">04. </span>
                <span>Honors, Awards & Achievements</span>
              </span>
              <hr className="flex-1" />
            </div>
            <div className="w-full mt-5">
              <ol className="space-y-5">
                {awards.map((a: AwardItem, i: number) => (
                  <li key={a.title} className="flex w-full">
                    {/* Timeline column */}
                    <div className="relative flex flex-col items-center mr-6 mt-2 ml-5">
                      <div className="w-4 h-4 rounded-full border-2 border-primary bg-background z-10" />
                      {i !== awards.length - 1 && (
                        <div className="flex-1 w-px bg-border" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="flex-1 pb-8 last:pb-0">
                      <Award
                        position={a.title}
                        company={a.organization}
                        from={a.from}
                        to={a.to}
                        location={a.location}
                      >
                        <ul className="list-outside ml-5 list-disc">
                          {a.details.map((d: string) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      </Award>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

const Award = ({
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
  href?: string;
  logo?: string;
  ariaLabel?: string;
  position: string;
  company?: string;
  from?: string;
  to?: string;
  location?: string;
  children: ReactNode;
}) => {
  const showRange = () => {
    if (from && to && from !== to) return `${from} - ${to}`;
    if (from) return from;
    return null;
  };

  return (
    <div className="flex items-start">
      {logo && href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mr-6"
          aria-label={ariaLabel || `${company} link`}
        >
          <Image
            src={logo}
            alt={`${company || position} Logo`}
            className="w-[160px] h-[160px] rounded-lg object-cover group-hover:opacity-25 transition-opacity"
            width={160}
            height={160}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
            <ArrowUpRight size={64} />
          </div>
        </a>
      )}
      <Card className="p-0 bg-transparent gap-0 border-none w-full">
        <CardHeader className="p-0">
          <CardTitle className="text-xl">
            {position}
            {company && <span className="text-primary"> @ {company}</span>}
          </CardTitle>
          {(showRange() || location) && (
            <CardDescription className="font-mono text-base">
              {showRange() && (
                <time dateTime={(from || "").toString()}>{showRange()}</time>
              )}
              {showRange() && location && <br />}
              {location && <span>{location}</span>}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="p-0">{children}</CardContent>
      </Card>
    </div>
  );
};

export default AwardSection;
