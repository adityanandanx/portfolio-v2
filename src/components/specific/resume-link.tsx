import { cn } from "@/lib/utils";
import React, { HTMLProps, PropsWithChildren } from "react";

const ResumeLink = ({
  children,
  className,
  ...props
}: PropsWithChildren & HTMLProps<HTMLAnchorElement>) => {
  return (
    <a
      href="/AdityaNandanResume.pdf"
      target="_blank"
      className={cn("", className)}
      {...props}
    >
      {children}
    </a>
  );
};

export default ResumeLink;
