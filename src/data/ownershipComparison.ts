export interface OwnershipComparisonRow {
  factor: string;
  hotel: string;
  villa: string;
}

export const ownershipComparison: OwnershipComparisonRow[] = [
  {
    factor: "Ownership",
    hotel: "Limited unit ownership",
    villa: "Independent villa ownership",
  },
  {
    factor: "Land",
    hotel: "Usually shared / project-linked",
    villa: "Villa-linked land component, where applicable",
  },
  {
    factor: "Privacy",
    hotel: "Shared hospitality environment",
    villa: "Independent private setting",
  },
  {
    factor: "Personal Use",
    hotel: "Often availability based",
    villa: "Greater owner-use flexibility",
  },
  {
    factor: "Hospitality",
    hotel: "Hotel operated",
    villa: "Managed hospitality available",
  },
  {
    factor: "Flexibility",
    hotel: "More structured",
    villa: "Greater personal-use flexibility",
  },
  {
    factor: "Resale",
    hotel: "Product dependent",
    villa: "Ownership-based resale potential, project-dependent",
  },
  {
    factor: "Experience",
    hotel: "Standard hospitality stay",
    villa: "Private residential retreat",
  },
];
