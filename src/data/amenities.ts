export interface Amenity {
  number: string;
  title: string;
  image: string;
  alt: string;
  description?: string;
}

// Temporary remote placeholders — replace with local files:
// public/images/amenities/<file> (see mapping in report).
export const amenities: Amenity[] = [
  {
    number: "01",
    title: "Tropical Landscape",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop",
    alt: "Layered tropical planting with palms and flowering shrubs along a garden path",
    description: "Gardens layered for shade, scent and quiet.",
  },
  {
    number: "02",
    title: "Infinity Pool",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
    alt: "Still infinity-edge pool meeting the tree line at golden hour",
    description: "A still edge of water against the trees.",
  },
  {
    number: "03",
    title: "Private Forest",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    alt: "Sunlight filtering through a dense private forest canopy",
    description: "Old trees kept standing, paths kept soft.",
  },
  {
    number: "04",
    title: "Nature Trail",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop",
    alt: "Shaded nature trail winding through tall green trees",
    description: "Slow morning walks under full canopy.",
  },
  {
    number: "05",
    title: "Yoga & Pilates",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop",
    alt: "Open-air yoga deck prepared with mats in calm daylight",
    description: "Open decks for practice and breath.",
  },
  {
    number: "06",
    title: "Meditation Spaces",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    alt: "Quiet stone meditation corner surrounded by greenery",
    description: "Sheltered corners for stillness.",
  },
  {
    number: "07",
    title: "Fitness Zones",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    alt: "Calm fitness space with equipment in warm natural light",
    description: "Considered rooms for daily training.",
  },
  {
    number: "08",
    title: "Spiritual Library",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    alt: "Warm timber library lined with books and soft reading light",
    description: "Books, silence and slow afternoons.",
  },
  {
    number: "09",
    title: "Orchards",
    image:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1200&auto=format&fit=crop",
    alt: "Green orchard rows with fruit trees in soft daylight",
    description: "Fruit trees tended through the seasons.",
  },
  {
    number: "10",
    title: "Amphitheatre",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop",
    alt: "Open-air stone amphitheatre steps facing a small stage at dusk",
    description: "Evenings of music under the sky.",
  },
];
