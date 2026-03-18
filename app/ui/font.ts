import { Lusitana, Inter } from "next/font/google";
import localFont from "next/font/local";

export const bitcount = localFont({
  src: "../../fonts/BitcountPropDoubleInk.ttf",
});

export const inter = Inter({
  subsets: ["latin"],
  style: ["italic"],
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});