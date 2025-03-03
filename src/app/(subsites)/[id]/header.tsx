import React from "react";
import { MenuButton } from "@/components/menu-button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative pb-10 md:p-0">
      <div className="absolute font-mono text-clampTitles top-2 md:left-6 z-50">
        R21
      </div>
      <MenuButton>
        <Link href="/">Home</Link>
      </MenuButton>
    </header>
  );
}
