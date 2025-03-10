import type { Metadata } from "next";
import { climate, grotesque, anton } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "R21 // Aquarium e.V.",
  description: "Verein für Kulturgestaltung im Osten Leipzigs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${climate.variable} ${anton.variable} ${grotesque.variable}`}
    >
      <body className="bg-background w-full">{children}</body>
    </html>
  );
}
