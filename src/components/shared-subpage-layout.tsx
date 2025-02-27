"use client";

import {
  getSubsiteData,
  type Subsites,
  colors,
  imageUrls,
} from "@/lib/subsites";
import Image from "next/image";

export function SubsiteContent({ id }: Subsites) {
  const subsite = getSubsiteData(id);
  if (!subsite) return <p>Subsite not found</p>;

  return (
    <div>
      <section className="min-h-full relative flex items-center gap-8">
        <div className="header__text flex flex-col gap-2 z-50 pl-8 max-w-[50%] mt-20 h-[100vh] justify-center">
          <div className="header__title uppercase">
            <h2 className={`font-subsites text-4xl leading-5 ${colors[id]}`}>
              {subsite.id}
            </h2>
            <h1 className="font-subsites text-5xl">{subsite.title}</h1>
          </div>
          <h3 className="font-subsites text-[1.4rem]">{subsite.subtitle}</h3>
          <p className="w-[60%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi qui
            eaque, reprehenderit tenetur consectetur molestias.
          </p>
        </div>
        <Image
          src={imageUrls[id]}
          alt="background-labels"
          width={600}
          height={400}
          className="header__img self-end w-[60vw] h-[100vh] bg-center object-cover top-0 right-0 order-2 absolute z-10"
        />
      </section>

      <section className="my-40 mx-4 grid-cols-1 grid gap-8">
        <div className="text__intro self-begin">
          <p>
            I&apos;m baby esse cupidatat hot chicken, scenester +1 mustache
            brunch JOMO exercitation la croix banh mi 8-bit health goth big
            mood.
          </p>
        </div>
        <div className="text__main self-end">
          <p>
            I&apos;m baby esse cupidatat hot chicken, scenester +1 mustache
            brunch JOMO exercitation la croix banh mi 8-bit health goth big
            mood. Quinoa commodo ascot tacos kale chips. Fugiat ennui celiac do
            put a bird on it everyday carry, VHS vegan vice cred dolore in. Ut
            ullamco keytar, gastropub adipisicing taxidermy ut etsy ad plaid
            truffaut mollit bitters blue bottle. Ut umami microdosing sunt air
            plant. Eu post-ironic VHS microdosing in mixtape bruh lomo pitchfork
            anim snackwave minim. 90&apos;s celiac bushwick shoreditch hot
            chicken neutral milk hotel shabby chic mollit. Viral celiac
            vaporware aliquip vice paleo. Tilde nostrud scenester leggings
            gatekeep, semiotics kickstarter put a bird on it laboris et godard
            tumblr ugh hoodie. Asymmetrical DSA blue bottle locavore deserunt
            hashtag laborum pitchfork polaroid fixie consequat velit trust fund
            selvage ut. Craft beer ugh echo park, lyft excepteur listicle hell
            of cray art party quis sriracha godard trust fund big mood. Non
            culpa heirloom yr ut.
          </p>
        </div>
      </section>

      <section className="text__image flex justify-center">
        <img className="w-[50%]" src={imageUrls[id]} alt="" />
      </section>
    </div>
  );
}
