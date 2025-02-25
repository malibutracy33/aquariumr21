import React from "react";
import Nav from "./nav";
import Footer from "./footerHome";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
