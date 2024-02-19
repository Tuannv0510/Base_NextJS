import { Roboto_Mono as FontMono, Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["vietnamese"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["vietnamese"],
  variable: "--font-mono",
});
