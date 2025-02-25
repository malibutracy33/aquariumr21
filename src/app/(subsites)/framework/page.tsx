import TitleSubsites from "../../../components/title";
import { subsites } from "@/lib/subsites";

export default function Framework() {
  const framework = subsites.find((site) => site.id === "02");

  if (!framework) {
    return <div>Framework data not found</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="md:pl-16">
        <TitleSubsites
          id={framework.id}
          title={framework.title}
          subtitle={framework.subtitle}
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
