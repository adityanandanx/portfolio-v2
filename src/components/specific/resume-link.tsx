import React, { PropsWithChildren } from "react";

const ResumeLink = ({ children }: PropsWithChildren) => {
  return (
    <a href="/AdityaNandanResume.pdf" target="_blank">
      {children}
    </a>
  );
};

export default ResumeLink;
