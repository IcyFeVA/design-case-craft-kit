import { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import { type TimelineItem } from "@/data/timeline";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineOverlayProps {
  item: TimelineItem;
  onClose: () => void;
}

const TimelineOverlay: FC<TimelineOverlayProps> = ({ item, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Handle escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (overlayRef.current && e.target === overlayRef.current) {
        onClose();
      }
    };
    
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("click", handleClickOutside);
    
    // Animation in
    if (overlayRef.current && contentRef.current) {
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(contentRef.current, { scale: 0.8, opacity: 0 });
      
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(contentRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    }
    
    // Focus management
    const previousFocus = document.activeElement as HTMLElement;
    if (contentRef.current) {
      contentRef.current.focus();
    }
    
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("click", handleClickOutside);
      
      // Animation out
      if (overlayRef.current && contentRef.current) {
        const tl = gsap.timeline({
          onComplete: () => {
            onClose();
            previousFocus?.focus();
          }
        });
        
        tl.to(contentRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.2,
          ease: "power2.in"
        });
        
        tl.to(overlayRef.current, {
          opacity: 0,
          duration: 0.2,
          ease: "power2.in"
        }, "<");
      }
    };
  }, [onClose]);
  
  // Convert aspect ratio string to number
  const getAspectRatio = (ratioString?: string): number => {
    if (!ratioString) return 16 / 9;
    
    const [width, height] = ratioString.split(":").map(Number);
    if (isNaN(width) || isNaN(height) || height === 0) return 16 / 9;
    
    return width / height;
  };
  
  const aspectRatio = getAspectRatio(item.media.aspectRatio);
  
  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="overlay-title"
    >
      <div 
        ref={contentRef}
        className="relative max-w-6xl w-full max-h-[90vh] overflow-auto bg-background rounded-xl shadow-2xl focus:outline-none"
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
          aria-label="Close overlay"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-6">
          <div className="mb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 id="overlay-title" className="text-2xl font-bold text-foreground">
                  {item.title}
                </h2>
                <p className="text-muted-foreground mt-1">
                  {item.year}
                </p>
              </div>
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {item.media.type === "image" ? "Image" : "Video"}
              </span>
            </div>
            <p className="text-muted-foreground mt-4">
              {item.description}
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden border bg-muted">
            {item.media.type === "image" ? (
              <img
                src={item.media.src}
                alt={item.title}
                className="w-full h-auto object-contain max-h-[70vh]"
              />
            ) : (
              <div className="relative w-full" style={{ paddingBottom: `${100 / aspectRatio}%` }}>
                <video
                  src={item.media.src}
                  poster={item.media.poster}
                  controls
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineOverlay;