import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GalleryImageDialog } from "./GalleryImageDialog";
import { ArrowLeft, Download, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  year: string;
}

const UIGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "80's Style Weather App",
      category: "",
      description: "This UI can be seen in the film 'Bolt from the blue' (2024) and is designed to evoke nostalgia with its retro aesthetic.",
      imageUrl: "/img/gallery/bolt1.jpg",
      tags: ["Film"],
      year: "2024"
    },
    {
      id: 2,
      title: "Netflix Profile Selector",
      category: "",
      description: "Design exercise I did with my students",
      imageUrl: "/img/gallery/netflix1.jpg",
      tags: ["TV UI", "Design Exercise"],
      year: "2024"
    },
    {
      id: 3,
      title: "Mobile Banking Interface",
      category: "",
      description: "Accessible mobile banking app design prioritizing security and ease of use for elderly users.",
      imageUrl: "/img/gallery/holo1.jpg",
      tags: ["Mobile", "FinTech", "Accessibility"],
      year: "2023"
    },
    {
      id: 4,
      title: "Design System Components",
      category: "",
      description: "Comprehensive component library with dark/light themes and extensive documentation.",
      imageUrl: "/img/gallery/sfx1.jpg",
      tags: ["Design System", "Components", "Documentation"],
      year: "2024"
    },
    {
      id: 5,
      title: "Analytics Platform",
      category: "",
      description: "Real-time analytics dashboard with advanced filtering and customizable reporting features.",
      imageUrl: "/img/gallery/ff1.jpg",
      tags: ["Analytics", "Dashboard", "Real-time"],
      year: "2023"
    },
    {
      id: 6,
      title: "Collaboration Tool",
      category: "",
      description: "Team collaboration interface with video conferencing integration and project management tools.",
      imageUrl: "/img/gallery/lb1.png",
      tags: ["Collaboration", "Video", "Teams"],
      year: "2024"
    },
    {
      id: 7,
      title: "Smart Home App",
      category: "",
      description: "IoT device management app with intuitive controls and energy monitoring features.",
      imageUrl: "/img/gallery/manhunt1.jpg",
      tags: ["IoT", "Smart Home", "Mobile"],
      year: "2023"
    },
    {
      id: 8,
      title: "Creative Portfolio",
      category: "",
      description: "Artist portfolio website with dynamic galleries and immersive presentation modes.",
      imageUrl: "/img/gallery/dash1.jpg",
      tags: ["Portfolio", "Creative", "Gallery"],
      year: "2024"
    },
    {
      id: 9,
      title: "Healthcare Portal",
      category: "",
      description: "Patient management system with appointment scheduling and medical records access.",
      imageUrl: "/img/gallery/bolt2.jpg",
      tags: ["Healthcare", "Portal", "Patient Management"],
      year: "2023"
    },
    {
      id: 10,
      title: "Travel Booking App",
      category: "",
      description: "User-friendly travel booking app with personalized recommendations and itinerary management.",
      imageUrl: "/img/gallery/hacker1.jpg",
      tags: ["Travel", "Booking", "Mobile"],
      year: "2024"
    },
    {
      id: 11,
      title: "Educational Platform",
      category: "",
      description: "E-learning platform with interactive courses and progress tracking features.",
      imageUrl: "/img/gallery/ff2.jpg",
      tags: ["Education", "E-learning", "Web App"],
      year: "2023"
    },
    {
      id: 12,
      title: "Event Management System",
      category: "",
      description: "Comprehensive event management tool with ticketing, scheduling, and attendee engagement features.",
      imageUrl: "/img/gallery/neo1.png",
      tags: ["Event Management", "Web App", "Ticketing"],
      year: "2024"
    },





    {
      id: 13,
      title: "vSTAGE 3D Interface",
      category: "",
      description: "Complete redesign of a complex 3D editing interface, focusing on intuitive navigation and powerful tools accessibility.",
      imageUrl: "/img/gallery/vhub1.jpg",
      tags: ["UI Design", "3D Interface", "Desktop App"],
      year: "2024"
    },
    {
      id: 14,
      title: "E-commerce Dashboard",
      category: "",
      description: "Modern dashboard design for B2B marketplace with focus on data visualization and user workflow optimization.",
      imageUrl: "/img/gallery/ff3.jpg",
      tags: ["Dashboard", "Data Viz", "B2B"],
      year: "2024"
    },
    {
      id: 15,
      title: "Mobile Banking Interface",
      category: "",
      description: "Accessible mobile banking app design prioritizing security and ease of use for elderly users.",
      imageUrl: "/img/gallery/personal1.jpg",
      tags: ["Mobile", "FinTech", "Accessibility"],
      year: "2023"
    },
    {
      id: 16,
      title: "Design System Components",
      category: "",
      description: "Comprehensive component library with dark/light themes and extensive documentation.",
      imageUrl: "/img/gallery/ff4.jpg",
      tags: ["Design System", "Components", "Documentation"],
      year: "2024"
    },
    {
      id: 17,
      title: "Analytics Platform",
      category: "",
      description: "Real-time analytics dashboard with advanced filtering and customizable reporting features.",
      imageUrl: "/img/gallery/bolt3.jpg",
      tags: ["Analytics", "Dashboard", "Real-time"],
      year: "2023"
    },
    {
      id: 18,
      title: "Collaboration Tool",
      category: "",
      description: "Team collaboration interface with video conferencing integration and project management tools.",
      imageUrl: "/img/gallery/inba1.jpg",
      tags: ["Collaboration", "Video", "Teams"],
      year: "2024"
    },
    {
      id: 19,
      title: "Smart Home App",
      category: "",
      description: "IoT device management app with intuitive controls and energy monitoring features.",
      imageUrl: "/img/gallery/inba2.jpg",
      tags: ["IoT", "Smart Home", "Mobile"],
      year: "2023"
    },
    {
      id: 20,
      title: "Creative Portfolio",
      category: "",
      description: "Artist portfolio website with dynamic galleries and immersive presentation modes.",
      imageUrl: "/img/gallery/vstage2.jpg",
      tags: ["Portfolio", "Creative", "Gallery"],
      year: "2024"
    },
    {
      id: 21,
      title: "Healthcare Portal",
      category: "",
      description: "Patient management system with appointment scheduling and medical records access.",
      imageUrl: "/img/gallery/manhunt2.jpg",
      tags: ["Healthcare", "Portal", "Patient Management"],
      year: "2023"
    },
    {
      id: 22,
      title: "Travel Booking App",
      category: "",
      description: "User-friendly travel booking app with personalized recommendations and itinerary management.",
      imageUrl: "/img/gallery/pilot1.jpg",
      tags: ["Travel", "Booking", "Mobile"],
      year: "2024"
    },
    {
      id: 23,
      title: "Educational Platform",
      category: "",
      description: "E-learning platform with interactive courses and progress tracking features.",
      imageUrl: "/img/gallery/old1.jpg",
      tags: ["Education", "E-learning", "Web App"],
      year: "2023"
    },
    {
      id: 24,
      title: "Event Management System",
      category: "",
      description: "Comprehensive event management tool with ticketing, scheduling, and attendee engagement features.",
      imageUrl: "/img/gallery/vstage1.jpg",
      tags: ["Event Management", "Web App", "Ticketing"],
      year: "2024"
    }    
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar highlight="gallery" />

      <div className="max-w-6xl mx-auto py-8"></div>

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div className="space-y-6 align-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A curated collection of my design work spanning web applications, mobile interfaces, 
              and FUI for Film and TV. Each piece represents a unique challenge and creative solution.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
            {galleryItems.map((item, index) => {
              const pattern = index % 11;
              let colSpan = 'lg:col-span-1';
              let rowSpan = 'lg:row-span-1';

              if (pattern === 1) { // Wide
                colSpan = 'lg:col-span-3';
                rowSpan = 'lg:row-span-2';
              } else if (pattern === 3) { // Tall
                colSpan = 'lg:col-span-2';
                rowSpan = 'lg:row-span-4';
              } else if (pattern === 7) { // Large
                colSpan = 'lg:col-span-2';
                rowSpan = 'lg:row-span-2';
              } else if (pattern === 9) { // Wide 16:9
                colSpan = 'lg:col-span-2';
                rowSpan = 'lg:row-span-1';
              }

              return (
                <div
                  key={item.id}
                  className={`group cursor-pointer ${colSpan} ${rowSpan}`}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-2xl bg-slate-100 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        {/* <Badge variant="secondary" className="mb-3 bg-white/20 text-white border-white/30">
                          {item.category}
                        </Badge> */}
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {item.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs px-2 py-1 bg-white/20 text-white rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Overlay Dialog */}
      <GalleryImageDialog open={!!selectedImage} onOpenChange={open => setSelectedImage(open ? selectedImage : null)} item={selectedImage} />
    </div>
  );
};

export default UIGallery;
