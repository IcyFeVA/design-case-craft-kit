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
  const [currentIndex, setCurrentIndex] = useState(0);

  const openDialog = (item: GalleryItem, index: number) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const closeDialog = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "80's Style UI's",
      category: "",
      description: "UI's I made for the movie 'Bolt from the blue' (2024). The film is about a weird scientist who tries to capture lightning",
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
      title: "Augmented Reality",
      category: "",
      description: "",
      imageUrl: "/img/gallery/holo1.jpg",
      tags: ["AR"],
      year: "2022"
    },
    {
      id: 4,
      title: "Website for Side Effects",
      category: "",
      description: "",
      imageUrl: "/img/gallery/sfx1.jpg",
      tags: [""],
      year: "2022"
    },
    {
      id: 5,
      title: "Fast & Furious UI",
      category: "",
      description: "",
      imageUrl: "/img/gallery/ff1.jpg",
      tags: ["Netflix", "DreamWorks"],
      year: "2019"
    },
    {
      id: 6,
      title: "Server Status Dashboard",
      category: "",
      description: "",
      imageUrl: "/img/gallery/lb1.png",
      tags: [""],
      year: "2016"
    },
    {
      id: 7,
      title: "Film UI for Manhunt",
      category: "",
      description: "",
      imageUrl: "/img/gallery/manhunt1.jpg",
      tags: ["FUI"],
      year: "2023"
    },
    {
      id: 8,
      title: "",
      category: "",
      description: "",
      imageUrl: "/img/gallery/dash1.jpg",
      tags: [""],
      year: "2024"
    },
    {
      id: 9,
      title: "Concept Design",
      category: "",
      description: "",
      imageUrl: "/img/gallery/bolt2.jpg",
      tags: ["concept"],
      year: "2021"
    },
    {
      id: 10,
      title: "Fictional Hacker UI",
      category: "",
      description: "What would a hacker's UI look like?",
      imageUrl: "/img/gallery/hacker1.jpg",
      tags: ["Exercise", "FUI"],
      year: "2024"
    },
    {
      id: 11,
      title: "Fast & Furious UI",
      category: "",
      description: "Drones are scanning the area inside the mountain",
      imageUrl: "/img/gallery/ff2.jpg",
      tags: ["Netlfix", "DreamWorks"],
      year: "2019"
    },
    {
      id: 12,
      title: "Design Exercise",
      category: "",
      description: "I did this exercise with my students in class. 'Create a weather display in the style of neo-pop'",
      imageUrl: "/img/gallery/neo1.png",
      tags: ["exercise", "college"],
      year: "2024"
    },





    {
      id: 13,
      title: "3D Visual for vHUB. A 3D cloud platform for digital twins",
      category: "",
      description: "",
      imageUrl: "/img/gallery/vhub1.jpg",
      tags: [""],
      year: "2021"
    },
    {
      id: 14,
      title: "Fast & Furious Concept UI",
      category: "",
      description: "",
      imageUrl: "/img/gallery/ff3.jpg",
      tags: ["Netflix", "DreamWorks"],
      year: "2019"
    },
    {
      id: 15,
      title: "Supergirl",
      category: "",
      description: "A 3D exercise I did in my free time. Took me two months from start to finish",
      imageUrl: "/img/gallery/personal1.jpg",
      tags: [""],
      year: "2012"
    },
    {
      id: 16,
      title: "Fast & Furious UI",
      category: "",
      description: "",
      imageUrl: "/img/gallery/ff4.jpg",
      tags: ["Netflix", "DreamWorks"],
      year: "2019"
    },
    {
      id: 17,
      title: "",
      category: "",
      description: "",
      imageUrl: "/img/gallery/bolt3.jpg",
      tags: [""],
      year: "2023"
    },
    {
      id: 18,
      title: "",
      category: "",
      description: "",
      imageUrl: "/img/gallery/inba1.jpg",
      tags: [""],
      year: "2024"
    },
    {
      id: 19,
      title: "",
      category: "",
      description: "",
      imageUrl: "/img/gallery/inba2.jpg",
      tags: [""],
      year: "2023"
    },
    {
      id: 20,
      title: "",
      category: "",
      description: "",
      imageUrl: "/img/gallery/vstage2.jpg",
      tags: [""],
      year: "2024"
    },
    {
      id: 21,
      title: "",
      category: "",
      description: "",
      imageUrl: "/img/gallery/manhunt2.jpg",
      tags: [""],
      year: "2023"
    },
    {
      id: 22,
      title: "",
      category: "",
      description: "",
      imageUrl: "/img/gallery/pilot1.jpg",
      tags: [""],
      year: "2024"
    },
    {
      id: 23,
      title: "",
      category: "",
      description: "",
      imageUrl: "/img/gallery/old1.jpg",
      tags: [""],
      year: "2023"
    },
    {
      id: 24,
      title: "",
      category: "",
      description: "",
      imageUrl: "/img/gallery/vstage1.jpg",
      tags: [""],
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
                  onClick={() => openDialog(item, index)}
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
      <GalleryImageDialog 
        open={!!selectedImage} 
        onOpenChange={open => !open && closeDialog()} 
        item={selectedImage} 
        onNext={handleNext}
        onPrevious={handlePrevious}
        showNavigation={true}
      />
    </div>
  );
};

export default UIGallery;
