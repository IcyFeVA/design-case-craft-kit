import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
      title: "vSTAGE 3D Interface",
      category: "Desktop Application",
      description: "Complete redesign of a complex 3D editing interface, focusing on intuitive navigation and powerful tools accessibility.",
      imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop",
      tags: ["UI Design", "3D Interface", "Desktop App"],
      year: "2024"
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      category: "Web Application",
      description: "Modern dashboard design for B2B marketplace with focus on data visualization and user workflow optimization.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Dashboard", "Data Viz", "B2B"],
      year: "2024"
    },
    {
      id: 3,
      title: "Mobile Banking Interface",
      category: "Mobile Design",
      description: "Accessible mobile banking app design prioritizing security and ease of use for elderly users.",
      imageUrl: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&h=800&fit=crop",
      tags: ["Mobile", "FinTech", "Accessibility"],
      year: "2023"
    },
    {
      id: 4,
      title: "Design System Components",
      category: "Design System",
      description: "Comprehensive component library with dark/light themes and extensive documentation.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      tags: ["Design System", "Components", "Documentation"],
      year: "2024"
    },
    {
      id: 5,
      title: "Analytics Platform",
      category: "Web Application",
      description: "Real-time analytics dashboard with advanced filtering and customizable reporting features.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      tags: ["Analytics", "Dashboard", "Real-time"],
      year: "2023"
    },
    {
      id: 6,
      title: "Collaboration Tool",
      category: "Web Application",
      description: "Team collaboration interface with video conferencing integration and project management tools.",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      tags: ["Collaboration", "Video", "Teams"],
      year: "2024"
    },
    {
      id: 7,
      title: "Smart Home App",
      category: "Mobile Design",
      description: "IoT device management app with intuitive controls and energy monitoring features.",
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=800&fit=crop",
      tags: ["IoT", "Smart Home", "Mobile"],
      year: "2023"
    },
    {
      id: 8,
      title: "Creative Portfolio",
      category: "Web Design",
      description: "Artist portfolio website with dynamic galleries and immersive presentation modes.",
      imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
      tags: ["Portfolio", "Creative", "Gallery"],
      year: "2024"
    },
    {
      id: 9,
      title: "Healthcare Portal",
      category: "Web Application",
      description: "Patient management system with appointment scheduling and medical records access.",
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      tags: ["Healthcare", "Portal", "Patient Management"],
      year: "2023"
    },
    {
      id: 10,
      title: "Travel Booking App",
      category: "Mobile Design",
      description: "User-friendly travel booking app with personalized recommendations and itinerary management.",
      imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&h=800&fit=crop",
      tags: ["Travel", "Booking", "Mobile"],
      year: "2024"
    },
    {
      id: 11,
      title: "Educational Platform",
      category: "Web Application",
      description: "E-learning platform with interactive courses and progress tracking features.",
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      tags: ["Education", "E-learning", "Web App"],
      year: "2023"
    },
    {
      id: 12,
      title: "Event Management System",
      category: "Web Application",
      description: "Comprehensive event management tool with ticketing, scheduling, and attendee engagement features.",
      imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&h=800&fit=crop",
      tags: ["Event Management", "Web App", "Ticketing"],
      year: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar highlight="gallery" />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              UI Gallery
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto">
            {galleryItems.map((item, index) => {
              // Create interesting grid patterns
              const isLarge = index % 7 === 0 || index % 7 === 3;
              const isTall = index % 5 === 2;
              
              return (
                <div
                  key={item.id}
                  className={`group cursor-pointer ${
                    isLarge ? 'md:col-span-2' : ''
                  } ${isTall ? 'md:row-span-2' : ''}`}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                    <div
                      className={`relative ${
                        isTall ? 'aspect-[4/6]' : isLarge ? 'aspect-[2/1]' : 'aspect-square'
                      }`}
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <Badge variant="secondary" className="mb-3 bg-white/20 text-white border-white/30">
                            {item.category}
                          </Badge>
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Overlay Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 overflow-hidden">
          {selectedImage && (
            <div className="flex flex-col h-full">
              <DialogHeader className="p-6 pb-4 border-b">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge variant="outline">{selectedImage.category}</Badge>
                      <span className="text-sm text-gray-500">{selectedImage.year}</span>
                    </div>
                    <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedImage.title}
                    </DialogTitle>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedImage(null)}
                    className="ml-4"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </DialogHeader>
              
              <div className="flex-1 p-6 overflow-hidden">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    className="max-h-[100%] w-auto object-contain"
                  />
                </div>
              </div>
              
              <div className="p-6 pt-4 border-t bg-gray-50">
                <div className="flex flex-wrap gap-2">
                  {selectedImage.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UIGallery;
