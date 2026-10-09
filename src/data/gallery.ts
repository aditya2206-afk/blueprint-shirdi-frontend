export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

// Temporary remote placeholders — replace with local files:
// public/images/gallery/<file> (see mapping in report).
export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1800&auto=format&fit=crop",
    alt: "Private villa exterior glowing at dusk with pool reflections",
    caption: "Villa Exterior · Dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1800&auto=format&fit=crop",
    alt: "Resort-style pool edged with palms and sun loungers",
    caption: "Pool · Midday Calm",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop",
    alt: "Tropical villa courtyard with pavilion, stone and planting",
    caption: "Courtyard · Pavilion",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
    alt: "Warm villa living room with timber screens and garden view",
    caption: "Interior · Living Room",
  },
  {
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1800&auto=format&fit=crop",
    alt: "Serene villa bedroom in neutral tones with soft daylight",
    caption: "Bedroom · Morning Light",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop",
    alt: "Luxury villa facade with large glazing and landscaped garden",
    caption: "Villa Facade · Garden Front",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1800&auto=format&fit=crop",
    alt: "Forest trail with light breaking through dense canopy",
    caption: "Nature Trail · Forest Walk",
  },
];
