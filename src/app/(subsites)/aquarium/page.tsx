import React from "react";

export default function AquariumPage() {
  return (
    <div>
      <section className="min-h-full relative flex items-center gap-8">
        <div className="header__text flex-start z-50 pl-8 max-w-[50%] flex flex-col gap-2">
          <div className="header__title uppercase">
            {/* <div className="container__wavy">
              <div className="wavy"></div>
            </div> */}
            <h2 className="no1 font-subsites text-4xl leading-5">01</h2>
            <h1 className="font-subsites text-5xl ">Aquarium</h1>
          </div>
          <h3 className="font-subsites text-[1.4rem]">(Community)</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi qui
            eaque, reprehenderit tenetur consectetur molestias.
          </p>
        </div>
        <img
          src="https://placehold.co/600x400/lightblue/white"
          alt="background-labels"
          className=" header__img self-end w-[60vw] h-[100vh] bg-center object-cover top-0 right-0 order-2 absolute z-10"
        />
      </section>
      <section className="my-40 mx-4 grid-cols-1  grid gap-8">
        <div className="text__intro self-begin">
          <p>
            I'm baby esse cupidatat hot chicken, scenester +1 mustache brunch
            JOMO exercitation la croix banh mi 8-bit health goth big mood.
          </p>
        </div>
        <div className="text__main self-end">
          <p>
            I'm baby esse cupidatat hot chicken, scenester +1 mustache brunch
            JOMO exercitation la croix banh mi 8-bit health goth big mood.
            Quinoa commodo ascot tacos kale chips. Fugiat ennui celiac do put a
            bird on it everyday carry, VHS vegan vice cred dolore in. Ut ullamco
            keytar, gastropub adipisicing taxidermy ut etsy ad plaid truffaut
            mollit bitters blue bottle. Ut umami microdosing sunt air plant. Eu
            post-ironic VHS microdosing in mixtape bruh lomo pitchfork anim
            snackwave minim. 90's celiac bushwick shoreditch hot chicken neutral
            milk hotel shabby chic mollit. Viral celiac vaporware aliquip vice
            paleo. Tilde nostrud scenester leggings gatekeep, semiotics
            kickstarter put a bird on it laboris et godard tumblr ugh hoodie.
            Asymmetrical DSA blue bottle locavore deserunt hashtag laborum
            pitchfork polaroid fixie consequat velit trust fund selvage ut.
            Craft beer ugh echo park, lyft excepteur listicle hell of cray art
            party quis sriracha godard trust fund big mood. Non culpa heirloom
            yr ut.
          </p>
          I'm baby esse cupidatat hot chicken, scenester +1 mustache brunch JOMO
          exercitation la croix banh mi 8-bit health goth big mood. Quinoa
          commodo ascot tacos kale chips. Fugiat ennui celiac do put a bird on
          it everyday carry, VHS vegan vice cred dolore in. Ut ullamco keytar,
          gastropub adipisicing taxidermy ut etsy ad plaid truffaut mollit
          bitters blue bottle. Ut umami microdosing sunt air plant. Eu
          post-ironic VHS microdosing in mixtape bruh lomo pitchfork anim
          snackwave minim. 90's celiac bushwick shoreditch hot chicken neutral
          milk hotel shabby chic mollit. Viral celiac vaporware aliquip vice
          paleo. Tilde nostrud scenester leggings gatekeep, semiotics
          kickstarter put a bird on it laboris et godard tumblr ugh hoodie.
          Asymmetrical DSA blue bottle locavore deserunt hashtag laborum
          pitchfork polaroid fixie consequat velit trust fund selvage ut. Craft
          beer ugh echo park, lyft excepteur listicle hell of cray art party
          quis sriracha godard trust fund big mood. Non culpa heirloom yr ut.
        </div>
      </section>
      <section className="text__image flex justify-center">
        <img src="https://placehold.co/600x400/lightblue/white" alt="" />
      </section>
    </div>
  );
}
