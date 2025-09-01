import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import { TIMELINE, type TimelineItem } from "@/data/timeline";
import TimelineItemComponent from "@/components/TimelineItem";
import TimelineOverlay from "@/components/TimelineOverlay";
import { useTimelineAnimations } from "@/hooks/useTimelineAnimations";
import { useRef } from "react";

const Timeline = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  
  // Use timeline animations hook
  useTimelineAnimations({
    timelineRef,
    watermarkRef,
    timelineLineRef
  });
  
  // Get unique years sorted in descending order
  const years = [...new Set(TIMELINE.map(item => item.year))].sort((a, b) => b - a);
  
  // Group items by year
  const itemsByYear: Record<number, TimelineItem[]> = {};
  TIMELINE.forEach(item => {
    if (!itemsByYear[item.year]) {
      itemsByYear[item.year] = [];
    }
    itemsByYear[item.year].push(item);
  });

  // Get current year for watermark
  const currentYear = new Date().getFullYear();

  const handleItemClick = (item: TimelineItem) => {
    setSelectedItem(item);
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <div className="min-h-screen bg-background relative" ref={timelineRef}>
      {/* Navbar */}
      <Navbar highlight="timeline" />
      
      {/* Watermark Year */}
      <div 
        ref={watermarkRef}
        className="fixed bottom-8 right-8 text-[120px] md:text-[200px] font-bold pointer-events-none z-0"
        style={{ opacity: 0.05 }}
      >
        {currentYear}
      </div>
      
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Design Timeline</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A visual journey through my design work and projects over the years
          </p>
        </div>
        
        {/* Timeline Container */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Years Column */}
          <div className="md:w-1/6 md:sticky md:top-24 h-fit">
            <div className="space-y-4">
              {years.map(year => (
                <div 
                  key={year} 
                  className="text-lg font-semibold text-foreground"
                >
                  {year}
                </div>
              ))}
            </div>
          </div>
          
          {/* Timeline Line */}
          <div className="md:w-px w-full h-1 md:h-auto relative flex items-center justify-center">
            <div 
              ref={timelineLineRef}
              className="w-1 h-0 bg-primary relative"
            >
              <div className="absolute -top-2 -left-1.5 w-4 h-4 rounded-full bg-primary"></div>
            </div>
          </div>
          
          {/* Items Flow */}
          <div className="md:w-5/6">
            {years.map(year => (
              <div key={year} className="mb-16 last:mb-0">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left Column with CSS Columns for fluid layout */}
                  <div className="md:w-1/2">
                    <div className="columns-1 md:columns-2 gap-6 space-y-6">
                      {itemsByYear[year]
                        .filter(item => item.side === "left" || (!item.side && itemsByYear[year].indexOf(item) % 2 === 0))
                        .map(item => (
                          <div key={item.id} className="break-inside-avoid timeline-item">
                            <TimelineItemComponent 
                              item={item} 
                              onClick={() => handleItemClick(item)} 
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                  
                  {/* Right Column with CSS Columns for fluid layout */}
                  <div className="md:w-1/2">
                    <div className="columns-1 md:columns-2 gap-6 space-y-6">
                      {itemsByYear[year]
                        .filter(item => item.side === "right" || (!item.side && itemsByYear[year].indexOf(item) % 2 === 1))
                        .map(item => (
                          <div key={item.id} className="break-inside-avoid timeline-item">
                            <TimelineItemComponent 
                              item={item} 
                              onClick={() => handleItemClick(item)} 
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {isOverlayOpen && selectedItem && (
        <TimelineOverlay 
          item={selectedItem} 
          onClose={closeOverlay} 
        />
      )}
    </div>
  );
};

export default Timeline;