export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
}

// Demo placeholder content for layout purposes — replace with verified
// owner words before presenting these as genuine customer reviews.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Mornings begin with birdsong and end with lamps lit along the courtyard. It feels less like a property and more like a rhythm we return to.",
    name: "Demo Owner",
    role: "Private Villa Owner · Placeholder",
  },
  {
    quote:
      "The team keeps everything ready — the villa, the garden, the small details. We simply arrive, and the quiet takes care of the rest.",
    name: "Demo Resident",
    role: "Seasonal Resident · Placeholder",
  },
  {
    quote:
      "What drew us was the balance: a private retreat in a place of deep meaning, looked after with genuine hospitality.",
    name: "Demo Family",
    role: "Villa Family · Placeholder",
  },
  {
    quote:
      "Stone, timber, water, trees — every corner feels considered. It is the calmest address we have ever held.",
    name: "Demo Guest",
    role: "Retreat Guest · Placeholder",
  },
];
