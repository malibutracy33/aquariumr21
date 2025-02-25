import TitleSubsites from "../../../components/title";
import { subsites } from "@/lib/subsites";

export default function Framework() {
  const studio = subsites.find((site) => site.id === "04");

  if (!studio) {
    return <div>Framework data not found</div>;
  }

  return (
    <div>
      <div>
        <TitleSubsites
          id={studio.id}
          title={studio.title}
          subtitle={studio.subtitle}
        />
      </div>
      <section className="flex flex-col gap-4 md:my-8 md:mx-0 md:flex-row justify-center">
        <div className="md:max-w-[35vw] border-b-1">
          <p>
            Im baby esse cupidatat hot chicken, scenester +1 mustache brunch
            JOMO exercitation la croix banh mi 8-bit health goth big mood.
          </p>
        </div>
        <div className="md:min-w-[60vw] md:pl-8 md:ml-8 self-end">
          <p>
            Im baby esse cupidatat hot chicken, scenester +1 mustache brunch
            JOMO exercitation la croix banh mi 8-bit health goth big mood.
            Quinoa commodo ascot tacos kale chips. Fugiat ennui celiac do put a
            bird on it everyday carry, VHS vegan vice cred dolore in. Ut ullamco
            keytar, gastropub adipisicing taxidermy ut etsy ad plaid truffaut
            mollit bitters blue bottle. Ut umami microdosing sunt air plant. Eu
            post-ironic VHS microdosing in mixtape bruh lomo pitchfork anim
            snackwave minim. 90s celiac bushwick shoreditch hot chicken neutral
            milk hotel shabby chic mollit. Viral celiac vaporware aliquip vice
            paleo. Tilde nostrud scenester leggings gatekeep, semiotics
            kickstarter put a bird on it laboris et godard tumblr ugh hoodie.
            Asymmetrical DSA blue bottle locavore deserunt hashtag laborum
            pitchfork polaroid fixie consequat velit trust fund selvage ut.
            Craft beer ugh echo park, lyft excepteur listicle hell of cray art
            party quis sriracha godard trust fund big mood. Non culpa heirloom
            yr ut.
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
