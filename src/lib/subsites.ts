export const colors = {
  "01": "text-sub1",
  "02": "text-sub2",
  "03": "text-sub3",
  "04": "text-sub4",
};

export const image = {
  "01": "bg-[url('https://placehold.co/600x400')]",
  "02": "bg-[url('https://placehold.co/600x400/orange/white')]",
  "03": "bg-[url('https://placehold.co/600x400/000000/FFFFFF/png')]",
  "04": "bg-[url('https://placehold.co/600x400/000000/FFFFFF/png')]",
};

export type Subsites = {
  id: "01" | "02" | "03" | "04";
  title: string;
  subtitle: string;
};

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
