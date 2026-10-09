export interface OwnershipStep {
  number: string;
  title: string;
  description: string;
}

export const ownershipSteps: OwnershipStep[] = [
  {
    number: "01",
    title: "Choose Your Villa",
    description: "Walk the sanctuary and select the villa that feels like yours.",
  },
  {
    number: "02",
    title: "Confirm Allocation",
    description: "Reserve your villa with a simple, guided allocation.",
  },
  {
    number: "03",
    title: "Ownership Documentation",
    description: "Complete clear paperwork with the team beside you.",
  },
  {
    number: "04",
    title: "Construction / Preparation",
    description: "Watch your villa take shape through regular updates.",
  },
  {
    number: "05",
    title: "Villa Handover",
    description: "Receive your finished villa, ready down to the last detail.",
  },
  {
    number: "06",
    title: "Hospitality Setup",
    description: "Opt into managed hospitality and prepare for guests.",
  },
  {
    number: "07",
    title: "Personal Stay",
    description: "Arrive, unwind and enjoy your own private retreat.",
  },
  {
    number: "08",
    title: "Hold / Enjoy / Rent / Resell",
    description: "Stay often, host well, and hold for the long term.",
  },
];
