import { projects } from "@/lib/content";
import { type Project } from "@/lib/types";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ImageIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SectionContainer from "./section-container";

type Props = {};

const ProjectSection = (props: Props) => {
  return (
    <SectionContainer id="projects">
      <div className="min-h-screen flex flex-col justify-center">
        <div className="flex gap-10 items-center ">
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="w-full gap-5 text-2xl font-mono flex items-center">
              <span>
                <span className="text-primary">03. </span>
                <span>Featured Projects</span>
              </span>
              <hr className="flex-1" />
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
              {projects.map((p, i) => (
                <Project project={p} key={p.title + i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

const Project = ({
  project: { coverImg, href, githubLink, title, desc, tags },
}: {
  project: Project;
}) => {
  return (
    <Card className="w-full pt-0 hover:shadow-2xl shadow-black transition-[box-shadow,scale] scale-100 hover:scale-[101%]">
      {coverImg ? (
        <Image
          src={coverImg}
          alt={title + " cover image"}
          className="w-full h-auto object-cover aspect-video object-top"
          width={578}
          height={325}
        />
      ) : (
        <div className="w-full h-auto aspect-video flex items-center justify-center">
          <ImageIcon className="text-muted-foreground opacity-20" size={64} />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <Badge variant={"outline"} key={t}>
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-end mt-auto">
        <a href={githubLink} target="_blank">
          <Button variant={"link"}>
            <SiGithub /> Github
          </Button>
        </a>
        {href && (
          <a href={href} target="_blank">
            <Button variant={"link"}>
              <LinkIcon /> Visit
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectSection;
