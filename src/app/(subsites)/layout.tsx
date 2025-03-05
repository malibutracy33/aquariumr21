import type { Metadata } from "next";
import Header from "@/app/(subsites)/header";
import Footer from "@/app/(subsites)/footer";
import React from "react";

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
    <div className="md:mb-8 mx-2 h-full md:w-full">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
