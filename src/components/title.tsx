"use client";

import { cn } from "@/lib/utils";
import { type Subsites, colors, image } from "@/lib/subsites";
import React from "react";

export default function TitleSubsites({ title, subtitle, id }: Subsites) {
  return (
    <div className={cn("flex flex-col", "md:flex-row md:h-screen")}>
      {/* mt- doesnt work,  */}
      <div className="font-subsites md:max-w-[35vw] flex flex-col gap-2 flex-start z-20 justify-center">
        <div className="uppercase leading-none">
          <h3 className={cn(colors[id], "text-clampPart2")}>{id}</h3>
          {/* "text-clampPart2", doesnt work removes color */}
          <h2 className="align-center text-clampPart2 md:text-[80px]">
            {title}
          </h2>
        </div>
        <h4 className="text-clampPart3">{subtitle}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi qui
          eaque, reprehenderit tenetur consectetur molestias.
        </p>
      </div>
      <div
        className={cn(
          image[id],
          "parts-bg w-full aspect-video bg-cover bg-center bg-no-repeat z-10",
          "md:min-w-[60vw]"
          // "md:absolute md:inset-0 md:z-[20]",
          // "md:aspect-auto md:h-full"
        )}
      ></div>
    </div>
  );
}
