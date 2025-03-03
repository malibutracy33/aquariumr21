"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { type Subsites, colors, backgroundImage } from "@/lib/subsites";

export function Card({ title, subtitle, id }: Subsites) {
  return (
    <Link
      className="parts-card py-8 group border-b border-black m-1 w-full relative flex flex-col overflow-hidden"
      href={`/${id.toLowerCase()}`}
    >
      <div className="leading-none align-middle font-black flex gap-2 items-center z-10 mb-4">
        <div className="self-end text-clampPart2">
          <h3 className={cn(colors[id])}>{id}</h3>
        </div>
        <div className="flex flex-col">
          <h4 className="text-clampPart3">{subtitle}</h4>
          <h2 className="align-center text-clampPart2">{title}</h2>
        </div>
      </div>
      <div
        className={cn(
          backgroundImage[id],
          "parts-bg w-full aspect-video bg-cover bg-center bg-no-repeat",
          "md:absolute md:inset-0 md:z-[20]",
          "md:aspect-auto md:h-full",
          "md:transition-transform md:duration-700",
          "md:[transition-timing-function:cubic-bezier(0.63,0.25,0.4,0.91)]",
          "md:transform md:translate-y-full md:group-hover:translate-y-0"
        )}
      ></div>
    </Link>
  );
}
