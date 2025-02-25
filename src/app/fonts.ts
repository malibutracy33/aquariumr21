import { Climate_Crisis, Darker_Grotesque, Anton } from "next/font/google";

export const climate = Climate_Crisis({
  subsets: ["latin"],
  variable: "--font-climate",
});

export const grotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-grotesque",
});

export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});
