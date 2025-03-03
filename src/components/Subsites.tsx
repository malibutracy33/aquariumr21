import Image from "next/image";
import { SubsiteContent, SubsitesTry } from "@/lib/subsites";

interface SubsiteProps {
  subsite: SubsitesTry;
}

export default function Subsite({ subsite }: SubsiteProps) {
  if (!subsite) return <p>Subsite not found</p>;

  // Type guard functions to determine which content structure we have
  const hasDetailedContent = (
    content: SubsiteContent
  ): content is {
    short1: string;
    short2: string;
    long1: string;
    long2: string;
  } => {
    return "short1" in content;
  };

  const hasSimpleContent = (
    content: SubsiteContent
  ): content is { short: string; long: string } => {
    return content && typeof content === "object" && "short" in content;
  };

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

          {/* Render content based on which structure we have */}
          {hasDetailedContent(subsite.content) ? (
            <>
              <p className="w-[60%]">{subsite.content.short1}</p>
              <p className="w-[60%]">{subsite.content.short2}</p>
              <p className="w-[60%]">{subsite.content.long1}</p>
              <p className="w-[60%]">{subsite.content.long2}</p>
            </>
          ) : (
            <>
              <p className="w-[60%]">{subsite.content.short}</p>
              <p className="w-[60%]">{subsite.content.long}</p>
            </>
          )}
        </div>
        <div className="relative w-[60vw] h-[100vh]">
          <Image
            src={subsite.imageUrl}
            alt="background-labels"
            fill
            className="object-cover top-0 right-0 z-10"
          />
        </div>
      </section>
    </div>
  );
}
