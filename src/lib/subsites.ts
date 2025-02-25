export const colors = {
  "01": "text-sub1",
  "02": "text-sub2",
  "03": "text-sub3",
  "04": "text-sub4",
};

export const image = {
  "01": "bg-[url('/placeholder.png')]",
  "02": "bg-[url('/placeholder.png')]",
  "03": "bg-[url('/placeholder.png')]",
  "04": "bg-[url('/placeholder.png')]",
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
