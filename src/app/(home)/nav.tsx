import { MenuButton } from "@/components/menu-button";
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav>
      <div className=" text-white font-mono text-clampTitles fixed top-2 left-6 mix-blend-difference z-50">
        R21
      </div>
      <MenuButton>
        <Link className="" href="/menu">
          Menu
        </Link>
      </MenuButton>
    </nav>
  );
}
