import { FC, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { type TimelineItem } from "@/data/timeline";

interface TimelineItemProps {
  item: TimelineItem;
  onClick: () => void;
}

const TimelineItem: FC<TimelineItemProps> = ({ item, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
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
      className={cn(
        "relative cursor-pointer group overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300",
        "hover:shadow-md hover:border-primary/30",
        isHovered ? "transform scale-105" : ""
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      aria-label={`View ${item.title} from ${item.year}`}
    >
      <div className="overflow-hidden rounded-lg">
        <AspectRatio ratio={aspectRatio} className="bg-muted">
          {item.media.type === "image" ? (
            <img
              src={item.media.src}
              alt={item.title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="relative w-full h-full">
              {item.media.poster && (
                <img
                  src={item.media.poster}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="bg-white/80 rounded-full p-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-8 h-8 text-gray-800"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </AspectRatio>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {item.description}
            </p>
          </div>
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">
            {item.year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;