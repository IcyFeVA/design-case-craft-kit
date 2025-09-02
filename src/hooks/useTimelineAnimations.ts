import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface UseTimelineAnimationsProps {
  timelineRef: React.RefObject<HTMLDivElement>;
  watermarkRef: React.RefObject<HTMLDivElement>;
  timelineLineRef: React.RefObject<HTMLDivElement>;
  yearHeadingRefs: React.RefObject<Record<number, HTMLDivElement | null>>;
}

export const useTimelineAnimations = ({
  timelineRef,
  watermarkRef,
  timelineLineRef,
  yearHeadingRefs
}: UseTimelineAnimationsProps) => {
  useEffect(() => {
    const animations: gsap.core.Tween[] = [];
    const triggers: ScrollTrigger[] = [];

    // Watermark animation
    if (watermarkRef.current) {
      const watermarkAnim = gsap.fromTo(
        watermarkRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 0.05, 
          y: 0, 
          duration: 1.5, 
          ease: "power2.out" 
        }
      );
      animations.push(watermarkAnim);
    }

    // Timeline line animation
    if (timelineLineRef.current) {
      const lineAnim = gsap.fromTo(
        timelineLineRef.current,
        { height: 0 },
        {
          height: "100%",
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true
          }
        }
      );
      animations.push(lineAnim);
      
      // Store the ScrollTrigger instance for cleanup
      if (lineAnim.scrollTrigger) {
        triggers.push(lineAnim.scrollTrigger);
      }
    }

    // Thumbnail animations
    if (timelineRef.current) {
      const thumbnailElements = timelineRef.current.querySelectorAll(".timeline-item");
      
      // Animate thumbnails with staggered delay based on their position
      const thumbnailAnim = gsap.fromTo(
        thumbnailElements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
      animations.push(thumbnailAnim);
      
      // Store the ScrollTrigger instance for cleanup
      if (thumbnailAnim.scrollTrigger) {
        triggers.push(thumbnailAnim.scrollTrigger);
      }
    }

    // Year heading animations
    if (yearHeadingRefs.current) {
      Object.values(yearHeadingRefs.current).forEach(heading => {
        if (heading) {
          const headingAnim = gsap.fromTo(
            heading,
            { opacity: 0, y: -20 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            }
          );
          animations.push(headingAnim);

          // Store the ScrollTrigger instance for cleanup
          if (headingAnim.scrollTrigger) {
            triggers.push(headingAnim.scrollTrigger);
          }
        }
      });
    }

    // Cleanup function
    return () => {
      // Kill all animations
      animations.forEach(anim => {
        if (anim) {
          anim.kill();
        }
      });
      
      // Kill all ScrollTriggers
      triggers.forEach(trigger => {
        if (trigger) {
          trigger.kill();
        }
      });
      
      // Kill any remaining ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [timelineRef, watermarkRef, timelineLineRef, yearHeadingRefs]);
};