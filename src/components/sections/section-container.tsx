import { cn } from "@/lib/utils";
import React, { HTMLProps, ReactNode } from "react";

type Props = {
  children?: ReactNode;
} & HTMLProps<HTMLDivElement>;

const SectionContainer = ({ children, className, ...props }: Props) => {
  return (
    <section className={cn("min-h-screen px-10", className)} {...props}>
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  );
};

export default SectionContainer;
