import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: BeforeAfterSliderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleMouseDown = () => {
      isDragging.current = true;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mousemove', handleMouseMove);

      return () => {
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <Button variant='explore'
        onClick={() => setIsOpen(true)}
      >
        View Before/After
      </Button>

      {isOpen && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
        >
          <div className="relative w-full max-w-[1600px]">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Before/After Container */}
            <div
              ref={containerRef}
              className="relative w-full overflow-hidden rounded-lg cursor-col-resize bg-black"
              onMouseMove={(e) => {
                if (!isDragging.current) return;
                const rect = containerRef.current?.getBoundingClientRect();
                if (!rect) return;
                const x = e.clientX - rect.left;
                const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
                setSliderPosition(percentage);
              }}
              onMouseLeave={() => {
                isDragging.current = false;
              }}
            >
              {/* After Image (Background) */}
              <img
                src={afterImage}
                alt={afterLabel}
                className="block w-full h-auto max-h-[80vh]"
              />

              {/* Before Image (Overlay with Clip Path) */}
              <img
                src={beforeImage}
                alt={beforeLabel}
                className="absolute top-0 left-0 block w-full h-auto max-h-[80vh]"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              />

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize group"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  isDragging.current = true;
                }}
              >
                {/* Handle Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform">
                  <div className="flex gap-1">
                    <div className="w-0.5 h-4 bg-black" />
                    <div className="w-0.5 h-4 bg-black" />
                    <div className="w-0.5 h-4 bg-black" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-medium backdrop-blur-sm">
                {beforeLabel}
              </div>
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-medium backdrop-blur-sm">
                {afterLabel}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
