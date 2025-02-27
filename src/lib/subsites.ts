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

export type Subsites = {
  id: "01" | "02" | "03" | "04";
  title: string;
  subtitle: string;
};

export type SubsitesTry = {
  id: "01" | "02" | "03" | "04";
  title: string;
  subtitle: string;
};

export const subsitesTry = [
  {
    id: "01",
    title: "Aquarium",
    subtitle: "Community",
    imageUrl: "https://placehold.co/600x400",
    color: "text-sub1",
    content: {
      short: "This is a brief description for the Aquarium subsite.",
      long: `The Aquarium subsite is dedicated to showcasing various aquatic life. 
              Here, you can learn about different species, their habitats, and conservation efforts. 
              Join us in exploring the wonders of the underwater world!`,
    },
  },
  {
    id: "02",
    title: "Framework",
    subtitle: "Shell Tapes",
    imageUrl: "https://placehold.co/600x400/orange/white",
    color: "text-sub2",
    content: {
      short: "This is a brief description for the Framework subsite.",
      long: `The Framework subsite focuses on the latest trends in technology and design. 
              Discover innovative frameworks that are shaping the future of web development. 
              Stay updated with tutorials, resources, and community discussions.`,
    },
  },
  {
    id: "03",
    title: "Tape Labels",
    subtitle: "Golden Doom Rec // Prepaid rec",
    imageUrl: "https://placehold.co/600x400/000000/FFFFFF/png",
    color: "text-sub3",
    content: {
      short: "This is a brief description for the Tape Labels subsite.",
      long: `Tape Labels is a creative hub for artists and musicians. 
              Here, you can find information about upcoming releases, events, and collaborations. 
              Join our community and be part of the artistic journey!`,
    },
  },
  {
    id: "04",
    title: "Studio",
    subtitle: "Rent",
    imageUrl: "https://placehold.co/600x400/FFFFFF/000000/png",
    color: "text-sub4",
    content: {
      short: "This is a brief description for the Studio subsite.",
      long: `The Studio subsite offers rental services for creative spaces. 
              Whether you need a studio for photography, music production, or art, 
              we have the perfect space for you. Explore our facilities and book your session today!`,
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
  return subsites.find((sub) => sub.id === id) || null;
}
