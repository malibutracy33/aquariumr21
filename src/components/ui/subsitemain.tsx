import SubsitesHero from "@/components/ui/subsitehero";
import { SubsiteContent, SubsitesTry } from "@/lib/subsites";

interface SubsiteProps {
  subsite: SubsitesTry;
}

export default function SubsiteGenerate({ subsite }: SubsiteProps) {
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

  return (
    <div className="flex flex-col gap-4">
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
      <section className=" md:pl-16 md:pr-16 flex flex-col gap-4 text-xl md:my-8 md:mx-0 md:flex-row justify-center py-8 md:flex-grow border-t border-b border-black">
        <div className="md:flex-grow border-b-1">
          <p>
            I&apos;m baby esse cupidatat hot chicken, scenester +1 mustache
            brunch JOMO exercitation la croix banh mi 8-bit health goth big
            mood.
          </p>
        </div>
        <div className="md:max-w-[66vw] md:pl-8 md:ml-8 self-end">
          <p className="">
            I&apos;m baby esse cupidatat hot chicken, scenester +1 mustache
            brunch JOMO exercitation la croix banh mi 8-bit health goth big
            mood. Quinoa commodo ascot tacos kale chips. Fugiat ennui celiac do
            put a bird on it everyday carry, VHS vegan vice cred dolore in. Ut
            ullamco keytar, gastropub adipisicing taxidermy ut etsy ad plaid
            truffaut mollit bitters blue bottle. Ut umami microdosing sunt air
            plant. Eu post-ironic VHS microdosing in mixtape bruh lomo pitchfork
            anim snackwave minim. 90s celiac bushwick shoreditch hot chicken
            neutral milk hotel shabby chic mollit. Viral celiac vaporware
            aliquip vice paleo. Tilde nostrud scenester leggings gatekeep,
            semiotics kickstarter put a bird on it laboris et godard tumblr ugh
            hoodie. Asymmetrical DSA blue bottle locavore deserunt hashtag
            laborum pitchfork polaroid fixie consequat velit trust fund selvage
            ut. Craft beer ugh echo park, lyft excepteur listicle hell of cray
            art party quis sriracha godard trust fund big mood. Non culpa
            heirloom yr ut.
          </p>
        </div>
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
      </section>
      <section className="my-8 mr-subTitleImgMR flex justify-center">
        <img
          src="https://placehold.co/600x400/lightblue/white"
          alt="framework-image"
        />
      </section>
    </div>
  );
}
