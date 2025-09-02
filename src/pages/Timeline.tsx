import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import { TIMELINE, type TimelineItem } from "@/data/timeline";
import TimelineItemComponent from "@/components/TimelineItem";
import TimelineOverlay from "@/components/TimelineOverlay";
import { useTimelineAnimations } from "@/hooks/useTimelineAnimations";

const Timeline = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const yearRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const yearHeadingRefs = useRef<Record<number, HTMLDivElement | null>>({});
  
  // Use timeline animations hook
  useTimelineAnimations({
    timelineRef,
    watermarkRef,
    timelineLineRef,
    yearHeadingRefs
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
      setActiveYear(year);
    }
  };

  // Update active year based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Find the year that is currently in view
      for (const year of years) {
        const element = yearRefs.current[year];
        if (element) {
          const rect = element.getBoundingClientRect();
          const absoluteTop = rect.top + window.scrollY;
          
          if (absoluteTop <= scrollPosition && absoluteTop + rect.height > scrollPosition) {
            setActiveYear(year);
            // Update watermark to show active year
            if (watermarkRef.current) {
              watermarkRef.current.textContent = year.toString();
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [years]);

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
        {activeYear || currentYear}
      </div>
      
      <div className="max-w-6xl mx-auto px-6 pt-40 pb-16 relative z-10">
        <div className="text-center mb-16 space-y-6 md:pl-40">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Career Timeline
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
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
                  className={`text-lg font-semibold cursor-pointer transition-colors ${
                    activeYear === year 
                      ? "text-primary" 
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => scrollToYear(year)}
                >
                  {year}
                </div>
              ))}
            </div>
          </div>
          
          {/* Timeline Content Area */}
          <div className="md:w-full relative">
            {/* Timeline Line - spans full height */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-secondary z-0"></div>
            
            {years.map(year => (
              <div
                key={year}
                ref={(el) => (yearRefs.current[year] = el)}
                className="mb-64 last:mb-0 relative"
              >
                {/* Year Heading */}
                <div className="bg-background p-6 rounded-lg mb-8">
                  <h2
                    ref={(el) => (yearHeadingRefs.current[year] = el)}
                    className="text-4xl md:text-5xl font-bold text-center text-foreground"
                  >
                    {year}
                  </h2>
                </div>

                {/* Three column layout: Left thumbnails | Timeline line | Right thumbnails */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Left Column - Thumbnails */}
                  <div className="md:col-span-5 space-y-6">
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
                  
                  {/* Center Column - Empty space for timeline */}
                  <div className="md:col-span-2 flex justify-center relative">
                    {/* This column provides spacing for the timeline line */}
                  </div>
                  
                  {/* Right Column - Thumbnails */}
                  <div className="md:col-span-5 space-y-6">
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