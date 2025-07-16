import { Bodoni_Moda_SC, Space_Grotesk, Space_Mono } from "next/font/google";

export const fontSans = Space_Grotesk({
  variable: "--font-sans",
});

export const fontSerif = Bodoni_Moda_SC({
  variable: "--font-serif",
});
export const fontMono = Space_Mono({
  variable: "--font-mono",
  weight: ["400"],
});
