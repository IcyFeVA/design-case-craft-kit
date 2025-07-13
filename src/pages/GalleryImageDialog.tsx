import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

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
}

export function GalleryImageDialog({ open, onOpenChange, item }: GalleryImageDialogProps) {
  return (
    <Dialog open={open} onOpenChange={open => onOpenChange(open)}>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 overflow-hidden">
        {item && (
          <div className="flex flex-col h-full">
            <DialogHeader className="p-6 pb-4 border-b">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge variant="outline">{item.category}</Badge>
                    <span className="text-sm text-gray-500">{item.year}</span>
                  </div>
                  <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </DialogTitle>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onOpenChange(false)}
                  className="ml-4"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </DialogHeader>
            <div className="flex-1 p-6 overflow-hidden">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="max-h-[100%] w-auto object-contain"
                />
              </div>
            </div>
            <div className="p-6 pt-4 border-t bg-gray-50">
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
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
  );
}
