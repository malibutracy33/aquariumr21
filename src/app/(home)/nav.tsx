import { MenuButton } from "@/components/menu-button";
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav>
      <div className=" text-white font-mono text-clampTitles fixed left-8 mix-blend-difference z-50">
        AQUARIUM
      </div>
      <MenuButton>
        <Link href="/menu">Menu</Link>
      </MenuButton>
    </nav>
  );
}
