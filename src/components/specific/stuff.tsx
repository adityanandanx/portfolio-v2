"use client";
import { stuff } from "@/lib/content";
import React, { useMemo } from "react";
import ReactCurvedText from "react-curved-text";

type Props = {};

const Stuff = ({}: Props) => {
  const stuffText = useMemo(
    () => stuff.reduce((p, c) => p + " • " + c),
    [stuff]
  );
  return (
    <div className="inline-block relative group">
      <span className="text-primary group-hover:font-bold transform group-hover:-rotate-6 inline-block transition-all duration-100 cursor-pointer active:scale-95 select-none">
        stuff.
      </span>
      <ReactCurvedText
        width={256}
        height={256}
        cx={128}
        cy={128}
        rx={128}
        ry={128}
        text={stuffText}
        svgProps={{
          className:
            "absolute fill-primary font-semibold z-20 rounded-full text-xl overflow-visible top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-[opacity] animate-[spin_10s_linear_infinite]",
        }}
      />
    </div>
  );
};

export default Stuff;
