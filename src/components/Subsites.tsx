// components/Subsite.tsx
import Image from "next/image";
import { subsitesTry, SubsitesTry } from "@/lib/subsites"; // Adjust the import path as necessary

// Define the props type
interface SubsiteProps {
  subsite: SubsitesTry; // Expecting a single subsite object
}

export default function Subsite({ subsite }: SubsiteProps) {
  // Check if the subsite is valid
  if (!subsite) return <p>Subsite not found</p>;
  else {
    console.log(subsite.content);
  }
  return (
    <div className="relative">
      <section className="min-h-screen flex items-center gap-8">
        <div className="header__text flex flex-col gap-2 z-50 pl-8 max-w-[50%] mt-20 h-[100vh] justify-center">
          <div className="header__title uppercase">
            <h2 className={`font-subsites text-4xl leading-5 ${subsite.color}`}>
              {subsite.id}
            </h2>
            <h1 className="font-subsites text-5xl">{subsite.title}</h1>
          </div>
          <h3 className="font-subsites text-[1.4rem]">{subsite.subtitle}</h3>

          {/* Render content based on the structure */}
          {typeof subsite.content === "string" ? (
            <p className="w-[60%]">{subsite.content}</p>
          ) : (
            <>
              <p className="w-[60%]">{subsite.content.short1}</p>
              <p className="w-[60%]">{subsite.content.short2}</p>
              <p className="w-[60%]">{subsite.content.long1}</p>
              <p className="w-[60%]">{subsite.content.long2}</p>
            </>
          )}
        </div>
        <div className="relative w-[60vw] h-[100vh]">
          <Image
            src={subsite.imageUrl}
            alt="background-labels"
            fill // Use fill for responsive images
            className="object-cover top-0 right-0 z-10"
          />
        </div>
      </section>
    </div>
  );
}
