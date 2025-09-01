/**
 * Timeline Data Structure
 *
 * Fields:
 * - id: Unique identifier for the item
 * - year: The year of the work
 * - title: Title of the project/work
 * - description: Brief description of the work
 * - media: Object containing media information
 *   - type: "image" | "video"
 *   - src: Path to the media file (relative to public directory)
 *   - poster: Optional poster image for videos (for accessibility)
 *   - aspectRatio: Aspect ratio of the media (e.g., "16:9", "4:3", "1:1", "2:3")
 * - side: Optional. Force item to appear on "left" or "right" side. If omitted, layout will determine automatically.
 *
 * Accessibility Notes:
 * - All images should have descriptive filenames for alt text
 * - For videos, include a poster image for preview and accessibility
 * - Descriptions should be meaningful and concise
 *
 * Adding new items:
 * 1. Add a new object to the TIMELINE array
 * 2. Use existing images from public/img/ or add new ones to public/img/
 * 3. For videos, include a poster image
 * 4. Specify aspectRatio for proper layout (e.g., "16:9", "2:3")
 * 5. Ensure id is unique
 * 6. Write descriptive titles and descriptions for accessibility
 */

export interface TimelineItem {
  id: string;
  year: number;
  title: string;
  description: string;
  media: {
    type: "image" | "video";
    src: string;
    poster?: string;
    aspectRatio?: string;
  };
  side?: "left" | "right";
}

export const TIMELINE: TimelineItem[] = [
  {
    id: "tesla-app",
    year: 2024,
    title: "Tesla Watch App Redesign",
    description: "Complete UI/UX overhaul for Tesla's smartwatch application with focus on driver safety and minimal interaction.",
    media: {
      type: "image",
      src: "/img/tesla/final1.png",
      aspectRatio: "16:9"
    }
  },
  {
    id: "ai-design-system",
    year: 2024,
    title: "AI-Driven Design System",
    description: "Created a design system that leverages AI for component generation and consistency checking.",
    media: {
      type: "image",
      src: "/img/ai-design/final1.png",
      aspectRatio: "16:9"
    },
    side: "right"
  },
  {
    id: "vstage-platform",
    year: 2023,
    title: "VStage Virtual Production Platform",
    description: "Designed and developed a real-time virtual production platform for film and television.",
    media: {
      type: "image",
      src: "/img/vstage/final1.png",
      aspectRatio: "16:9"
    }
  },
  {
    id: "gallery-exhibition",
    year: 2023,
    title: "Interactive Gallery Exhibition",
    description: "Curated and designed an interactive digital art exhibition with mixed media installations.",
    media: {
      type: "image",
      src: "/img/gallery/bolt1.jpg",
      aspectRatio: "2:3"
    },
    side: "left"
  },
  {
    id: "tx-cms",
    year: 2022,
    title: "TX Content Management System",
    description: "Enterprise-level CMS with drag-and-drop interface and real-time collaboration features.",
    media: {
      type: "image",
      src: "/img/tx/final1.png",
      aspectRatio: "16:9"
    }
  },
  {
    id: "ecommerce-platform",
    year: 2022,
    title: "Crushy E-commerce Platform",
    description: "Complete redesign of e-commerce platform focusing on mobile-first experience and accessibility.",
    media: {
      type: "image",
      src: "/img/gallery/neo1.png",
      aspectRatio: "16:9"
    },
    side: "right"
  },
  {
    id: "mindspace-app",
    year: 2021,
    title: "MindSpace Wellness App",
    description: "Meditation and mindfulness application with personalized journeys and progress tracking.",
    media: {
      type: "image",
      src: "/img/gallery/personal1.jpg",
      aspectRatio: "2:3"
    }
  },
  {
    id: "3d-motion-reel",
    year: 2021,
    title: "3D Motion Design Reel",
    description: "Compilation of 3D motion design projects showcasing animation and visual effects skills.",
    media: {
      type: "image",
      src: "/img/gallery/holo1.jpg",
      aspectRatio: "16:9"
    },
    side: "left"
  }
];