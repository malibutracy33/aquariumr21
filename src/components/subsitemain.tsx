import SubsitesHero from "@/components/subsitehero";
import { SubsiteContent, SubsitesTry } from "@/lib/subsites";
import Image from "next/image";

interface SubsiteProps {
  subsite: SubsitesTry;
}

export default function SubsiteGenerate({ subsite }: SubsiteProps) {
  if (!subsite) return <p>Subsite not found</p>;
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

  return (
    <div className="md:mb-8 mx-2 h-full md:w-full flex flex-col gap-4">
      <div className="md:pl-16">
        <SubsitesHero
          id={subsite.id}
          title={subsite.title}
          subtitle={subsite.subtitle}
          pitch={subsite.pitch}
          imageUrl={subsite.imageUrl}
          color={subsite.color}
          content={subsite.content}
        />
      </div>
      <section className=" md:pl-16 md:pr-16 flex flex-col gap-4 text-xl md:my-10 md:mx-0 md:flex-row justify-center py-8 md:flex-grow">
        {/* Render content based on which structure we have */}
        {hasDetailedContent(subsite.content) ? (
          <>
            {/* TO DO: work on layout for tapelabels */}
            <div className="md:flex-grow">
              <p className="w-[60%]">{subsite.content.short1}</p>
              <p className="w-[60%]">{subsite.content.short2}</p>
            </div>
            <div className="md:max-w-[66vw] md:pl-8 md:ml-8 self-end">
              <p>{subsite.content.long1}</p>
              <p>{subsite.content.long2}</p>
            </div>
          </>
        ) : (
          <>
            <div className="md:flex-grow">
              <p className="w-[60%]">{subsite.content.short}</p>
            </div>
            <div className="md:max-w-[66vw] md:pl-8 md:ml-8 self-end">
              <p className="">{subsite.content.long}</p>
            </div>
          </>
        )}
      </section>
      <section className="my-8 mr-subTitleImgMR flex justify-center">
        <div className="relative w-[60vw] aspect-[3/2]">
          <Image
            src={subsite.imageUrl}
            alt="background-labels"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}
