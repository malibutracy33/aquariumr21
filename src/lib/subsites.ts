export const colors = {
  "01": "text-sub1",
  "02": "text-sub2",
  "03": "text-sub3",
  "04": "text-sub4",
};

export const backgroundImage = {
  "01": "bg-[url('https://placehold.co/600x400')]",
  "02": "bg-[url('https://placehold.co/600x400/orange/white')]",
  "03": "bg-[url('https://placehold.co/600x400/000000/FFFFFF/png')]",
  "04": "bg-[url('https://placehold.co/600x400/000000/FFFFFF/png')]",
};

export const imageUrls = {
  "01": "/images/placeholder.png",
  "02": "https://placehold.co/600x400/orange/white",
  "03": "https://placehold.co/600x400/000000/FFFFFF/png",
  "04": "https://placehold.co/600x400/FFFFFF/000000/png",
};

// Original
export type Subsites = {
  id: "01" | "02" | "03" | "04";
  title: string;
  subtitle: string;
};

export type SubsiteContent =
  | {
      short1: string;
      short2: string;
      long1: string;
      long2: string;
    }
  | {
      short: string;
      long: string;
    };

// Implementing content
export type SubsitesTry = {
  id: "01" | "02" | "03" | "04";
  title: string;
  subtitle: string;
  pitch: string;
  imageUrl: string;
  color: string;
  content: SubsiteContent;
};

export const subsitesTry: SubsitesTry[] = [
  {
    id: "01",
    title: "Aquarium",
    subtitle: "Community",
    pitch: "this is what this is is what this is. bam bam bam",
    imageUrl: "https://placehold.co/600x400/png",
    color: "text-sub1",
    content: {
      short: "This is a brief description for the Aquarium subsite.",
      long: "The Aquarium subsite is dedicated to showcasing various cultural events.",
    },
  },
  {
    id: "02",
    title: "Framework",
    subtitle: "Shell Tapes",
    pitch: "this is what this is is what this is. bam bam bam",
    imageUrl: "https://placehold.co/600x400/orange/white/png",
    color: "text-sub2",
    content: {
      short:
        "I'm baby esse cupidatat hot chicken, scenester +1 mustache brunch JOMO exercitation la croix banh mi 8-bit health goth big mood.",
      long: "Im baby esse cupidatat hot chicken, scenester +1 mustache brunch JOMO exercitation la croix banh mi 8-bit health goth big mood. Quinoa commodo ascot tacos kale chips. Fugiat ennui celiac do put a bird on it everyday carry, VHS vegan vice cred dolore in. Ut ullamco keytar, gastropub adipisicing taxidermy ut etsy ad plaid truffaut mollit bitters blue bottle. Ut umami microdosing sunt air plant. Eu post-ironic VHS microdosing in mixtape bruh lomo pitchfork anim snackwave minim.90s celiac bushwick shoreditch hot chicken neutral milk hotel shabby chic mollit. Viral celiac vaporware aliquip vice paleo. Tilde nostrud scenester leggings gatekeep, semiotics kickstarter put a bird on it laboris et godard tumblr ugh hoodie. Asymmetrical DSA blue bottle locavore deserunt hashtag laborum pitchfork polaroid fixie consequat velit trust fund selvage ut. Craft beer ugh echo park, lyft excepteur listicle hell of cray art party quis sriracha godard trust fund big mood. Non culpa heirloom yr ut.",
    },
  },
  {
    id: "03",
    title: "Tape Labels",
    subtitle: "Golden Doom Rec // Prepaid rec",
    pitch: "this is what this is is what this is. bam bam bam",
    imageUrl: "https://placehold.co/600x400/000000/FFFFFF/png",
    color: "text-sub3",
    content: {
      short1: "This is the first short description for Tape Labels.",
      long1:
        "Im baby esse cupidatat hot chicken, scenester +1 mustache brunch JOMO exercitation la croix banh mi 8-bit health goth big mood. Quinoa commodo ascot tacos kale chips. Fugiat ennui celiac do put a bird on it everyday carry, VHS vegan vice cred dolore in. Ut ullamco keytar, gastropub adipisicing taxidermy ut etsy ad plaid truffaut mollit bitters blue bottle. Ut umami microdosing sunt air plant. Eu post-ironic VHS microdosing in mixtape bruh lomo pitchfork anim snackwave minim.90s celiac bushwick shoreditch hot chicken neutral milk hotel shabby chic mollit. Viral celiac vaporware aliquip vice paleo. Tilde nostrud scenester leggings gatekeep, semiotics kickstarter put a bird on it laboris et godard tumblr ugh hoodie. Asymmetrical DSA blue bottle locavore deserunt hashtag laborum pitchfork polaroid fixie consequat velit trust fund selvage ut. Craft beer ugh echo park, lyft excepteur listicle hell of cray art party quis sriracha godard trust fund big mood. Non culpa heirloom yr ut.",
      short2: "Find information about upcoming releases and events.",
      long2:
        "Im baby esse cupidatat hot chicken, scenester +1 mustache brunch JOMO exercitation la croix banh mi 8-bit health goth big mood. Quinoa commodo ascot tacos kale chips. Fugiat ennui celiac do put a bird on it everyday carry, VHS vegan vice cred dolore in. Ut ullamco keytar, gastropub adipisicing taxidermy ut etsy ad plaid truffaut mollit bitters blue bottle. Ut umami microdosing sunt air plant. Eu post-ironic VHS microdosing in mixtape bruh lomo pitchfork anim snackwave minim.90s celiac bushwick shoreditch hot chicken neutral milk hotel shabby chic mollit. Viral celiac vaporware aliquip vice paleo. Tilde nostrud scenester leggings gatekeep, semiotics kickstarter put a bird on it laboris et godard tumblr ugh hoodie. Asymmetrical DSA blue bottle locavore deserunt hashtag laborum pitchfork polaroid fixie consequat velit trust fund selvage ut. Craft beer ugh echo park, lyft excepteur listicle hell of cray art party quis sriracha godard trust fund big mood. Non culpa heirloom yr ut.",
    },
  },
  {
    id: "04",
    title: "Studio",
    subtitle: "Rent",
    pitch: "this is what this is is what this is. bam bam bam",
    imageUrl: "https://placehold.co/600x400/FFFFFF/000000/png",
    color: "text-sub4",
    content: {
      short: "This is a brief description for the Studio subsite.",
      long: "The Studio subsite offers rental services for creative spaces.",
    },
  },
];

export const subsites: Subsites[] = [
  {
    id: "01",
    title: "Aquarium",
    subtitle: "Community",
    // image: "/placeholder.png",
  },
  {
    id: "02",
    title: "Framework",
    subtitle: "Shell Tapes",
    // image: "/placeholder.png",
  },
  {
    id: "03",
    title: "Tape Labels",
    subtitle: "Golden Doom Rec // Prepaid rec",
    // image: "/placeholder.png",
  },
  {
    id: "04",
    title: "Studio",
    subtitle: "Rent",
    // image: "/placeholder.png",
  },
];

export function getSubsiteData(id: "01" | "02" | "03" | "04") {
  return subsitesTry.find((sub) => sub.id === id) || null;
}
