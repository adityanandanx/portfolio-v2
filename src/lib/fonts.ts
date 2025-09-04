import { Bodoni_Moda_SC, Space_Grotesk, Space_Mono } from "next/font/google";

export const fontSans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const fontSerif = Bodoni_Moda_SC({
  variable: "--font-serif",
  subsets: ["latin"],
});
export const fontMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});
