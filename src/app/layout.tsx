import type { Metadata } from "next";
import "./globals.css";
import { fontSans, fontSerif } from "@/lib/fonts";
import NavBar from "@/components/shared/nav-bar";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://adityanandanx.vercel.app";
const siteName = "Aditya Nandan Portfolio";
const titleDefault = "Full-Stack & AI Developer";
const description =
  "Full-stack developer building production-grade web apps, AI-powered tools, and scalable systems with Next.js, TypeScript, FastAPI, and machine learning.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${titleDefault} | ${siteName}`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "Full-stack developer",
    "Next.js",
    "TypeScript",
    "AI",
    "Machine Learning",
    "FastAPI",
    "Open Source",
    "React",
  ],
  authors: [{ name: "Aditya Nandan", url: siteUrl }],
  creator: "Aditya Nandan",
  publisher: "Aditya Nandan",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: titleDefault,
    siteName,
    description,
    images: [
      {
        url: `${siteUrl}/api/og?title=Portfolio`,
        width: 1200,
        height: 630,
        alt: "Aditya Nandan – Full-Stack & AI Developer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@adithatsit",
    title: titleDefault,
    description,
    images: [`${siteUrl}/api/og?title=Portfolio`],
  },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} antialiased font-sans dark`}
      >
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-primary-foreground px-3 py-2 rounded"
        >
          Skip to content
        </a>
        <NavBar />
        {children}
        <script
          // Structured Data
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aditya Nandan",
              url: siteUrl,
              sameAs: [
                "https://github.com/adityanandanx",
                "https://www.linkedin.com/in/aditya-nandan-thats-it/",
                "https://x.com/adithatsit",
                "https://www.instagram.com/adityanandan.zip",
              ],
              jobTitle: "Full-Stack & AI Developer",
              knowsAbout: [
                "Web Development",
                "AI",
                "Machine Learning",
                "TypeScript",
                "Next.js",
                "FastAPI",
              ],
              workLocation: {
                "@type": "Place",
                name: "India",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
