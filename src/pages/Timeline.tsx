import { useState, useRef } from "react";
import Navbar from "@/components/ui/navbar";
import { TIMELINE, type TimelineItem } from "@/data/timeline";
import TimelineItemComponent from "@/components/TimelineItem";
import TimelineOverlay from "@/components/TimelineOverlay";
import { useTimelineAnimations } from "@/hooks/useTimelineAnimations";

const Timeline = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const yearRefs = useRef<Record<number, HTMLDivElement | null>>({});
  
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

  const scrollToYear = (year: number) => {
    const element = yearRefs.current[year];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
                  className="text-lg font-semibold text-foreground cursor-pointer hover:text-primary transition-colors"
                  onClick={() => scrollToYear(year)}
                >
                  {year}
                </div>
              ))}
            </div>
          </div>
          
          {/* Timeline Line and Items */}
          <div className="md:w-5/6 relative">
            {/* Timeline Line in the center */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary z-0 top-0 bottom-0"></div>
            
            {years.map(year => (
              <div 
                key={year} 
                ref={(el) => (yearRefs.current[year] = el)}
                className="mb-16 last:mb-0 relative"
              >
                {/* Year Marker on Timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary z-10"></div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left Column - Single column of thumbnails */}
                  <div className="md:w-2/5 md:pr-16">
                    <div className="space-y-6">
                      {itemsByYear[year]
                        .filter((_, index) => index % 2 === 0)
                        .map(item => (
                          <div key={item.id} className="timeline-item">
                            <TimelineItemComponent 
                              item={item} 
                              onClick={() => handleItemClick(item)} 
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                  
                  {/* Center - Year Display */}
                  <div className="md:w-1/5 flex items-center justify-center">
                    <div className="text-2xl font-bold text-foreground bg-background px-4 py-2 rounded-full border border-primary z-10">
                      {year}
                    </div>
                  </div>
                  
                  {/* Right Column - Single column of thumbnails */}
                  <div className="md:w-2/5 md:pl-16">
                    <div className="space-y-6">
                      {itemsByYear[year]
                        .filter((_, index) => index % 2 === 1)
                        .map(item => (
                          <div key={item.id} className="timeline-item">
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