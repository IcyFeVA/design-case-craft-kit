import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface GalleryImageDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: {
    category: string;
    year: string | number;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
  } | null;
  onNext?: () => void;
  onPrevious?: () => void;
  showNavigation?: boolean;
}

export function GalleryImageDialog({ open, onOpenChange, item, onNext, onPrevious, showNavigation }: GalleryImageDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-none w-screen h-screen p-0 flex flex-col bg-black/95 border-0 rounded-none">
        {item && (
          <>
            {/* Header with info overlay */}
            <div className="absolute top-0 left-0 right-0 z-30 bg-gradient-to-b from-black/80 via-black/40 to-transparent p-6 pb-12">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge variant="outline" className="bg-white/10 border-white/20 text-white">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-white/70">{item.year}</span>
                  </div>
                  <DialogTitle className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </DialogTitle>
                  <p className="text-white/80 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onOpenChange(false)}
                  className="ml-4 text-white hover:bg-white/10 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
            </div>

            {/* Main image area */}
            <div className="relative flex-1 flex items-center justify-center overflow-hidden">
              {showNavigation && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onPrevious}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white border-white/20 backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onNext}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white border-white/20 backdrop-blur-sm"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>
                </>
              )}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="max-w-[95vw] max-h-[95vh] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Footer with tags overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-12">
              <div className="flex flex-wrap gap-2 justify-center">
                {item.tags.map((tag, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-sm bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}