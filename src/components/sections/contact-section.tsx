"use client";
import { useState, useEffect } from "react";
import { SendIcon, CopyIcon, CheckIcon, MailIcon } from "lucide-react";
import SectionContainer from "./section-container";
import { Button } from "../ui/button";
import Link from "next/link";
import { EMAIL, socialLinks } from "@/lib/content";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => setCopied(true));
  };

  return (
    <SectionContainer id="contact">
      <div className="min-h-screen flex flex-col justify-center">
        <div className="flex flex-col gap-6 text-left max-w-2xl mx-auto">
          <div className="w-full gap-5 text-2xl font-mono flex items-center">
            <span>
              <span className="text-primary">05. </span>
              <span>Get In Touch</span>
            </span>
            <hr className="flex-1" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight">
            Let&apos;s Build Something
          </h2>
          <p className="opacity-60 leading-relaxed">
            I&apos;m looking for a software engineering internship and always
            open to collaborating on impactful projects. Whether you have an
            idea, opportunity, or just want to say hi—my inbox is open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button
              size="lg"
              variant="default"
              className="group relative overflow-hidden"
              asChild
            >
              <Link href={`mailto:${EMAIL}`}>
                <span className="flex items-center gap-2">
                  <SendIcon className="group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:opacity-0 transition-[translate,opacity]" />
                  <SendIcon
                    aria-hidden
                    className="-translate-x-5 translate-y-5 opacity-0 group-hover:translate-x-0 group-hover:-translate-y-0 group-hover:opacity-100 absolute transition-[translate,opacity,scale]"
                  />
                  Email Me
                </span>
                <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/20 to-transparent animate-pulse" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant={copied ? "secondary" : "outline"}
              onClick={copyEmail}
              className="group relative"
            >
              {copied ? (
                <>
                  <CheckIcon className="text-primary" /> Copied!
                </>
              ) : (
                <>
                  <CopyIcon className="" />
                  Copy Email
                </>
              )}
            </Button>
          </div>
          <div className="mt-6 flex flex-row items-baseline-last gap-2 text-sm font-mono">
            <div
              className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              onClick={copyEmail}
            >
              <MailIcon size={16} />
              <span>{EMAIL}</span>
            </div>
            <span className="text-xs opacity-40">
              {copied ? "Email address copied to clipboard" : "Click to copy"}
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-wider opacity-50 uppercase">
              Or find me on
            </span>
            <div className="flex flex-wrap gap-4 items-center">
              {socialLinks.map((s, i) => (
                <Link
                  key={s.href + i}
                  href={s.href}
                  target="_blank"
                  aria-label={`Visit my profile: ${s.href}`}
                  className="group relative inline-flex size-11 items-center justify-center rounded-md border border-border/60 hover:border-primary/60 transition-colors"
                >
                  <span className="absolute inset-0 rounded-md bg-primary/10 scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-[opacity,transform]" />
                  <span className="text-xl group-hover:text-primary transition-colors">
                    {s.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
