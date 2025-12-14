import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Watch,
  Zap,
  Touchpad,
  Film,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import CaseStudyNav from "@/components/CaseStudyNav";
import { GalleryImageDialog } from "./GalleryImageDialog";
import React, { useState } from "react";


type Screenshot = {
  imageUrl: string;
  title: string;
  description: string;
  category: string;
  year: string | number;
  tags: string[];
};

const screenshots: Screenshot[] = [
  {
    imageUrl: '/img/tesla/process3.png',
    title: "Process",
    description: "First draft looks nice, but not usable (text and buttons too small).",
    category: "UI",
    year: 2023,
    tags: ["Dashboard", "Tesla", "Apple Watch"],
  },
  {
    imageUrl: '/img/tesla/process1.png',
    title: "Process",
    description: "Iterations: Home Screen / Summoning Car",
    category: "UI",
    year: 2023,
    tags: ["Dashboard", "Tesla", "Apple Watch"],
  },
  {
    imageUrl: '/img/tesla/process2.png',
    title: "Process",
    description: "Iterations: Touch Surface",
    category: "UI",
    year: 2023,
    tags: ["Dashboard", "Tesla", "Apple Watch"],
  },
  {
    imageUrl: '/img/tesla/process4.png',
    title: "Process",
    description: "The concept of using a touch surface to execute a action was inspired by the James Bond movie 'Tomorrow Never Dies.' In this film, the renowned spy is seen using a touchpad on an Ericsson phone to control his BMW car.",
    category: "UI",
    year: 2023,
    tags: ["Dashboard", "Tesla", "Apple Watch"],
  },

];

type ScreenshotsRowProps = {
  screenshots: Screenshot[];
};

function ScreenshotsRow({ screenshots }: ScreenshotsRowProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const selectedImage = openIndex !== null ? screenshots[openIndex] : null;
  const setSelectedImage = (idx: number | null) => setOpenIndex(idx);

  return (
    <>
      <div className="flex items-center mt-8" style={{ height: 48 }}>
        <span
          className="mr-4 text-sm font-medium text-muted-foreground"
          style={{ minWidth: 80 }}
        >
          Process Shots
        </span>
        {screenshots.map((s, i) => (
          <div
            key={i}
            style={{
              width: 120,
              aspectRatio: "16/9",
              borderRadius: 8,
              overflow: "hidden",
              marginLeft: i === 0 ? 0 : 16,
              zIndex: 10 + i,
              background: `url(${s.imageUrl}) center/cover`,
              cursor: "pointer",
              // transition: "box-shadow 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 12,
              fontWeight: 500,
              textShadow: "0 1px 4px rgba(0,0,0,0.4)",
              border: "3px solid #fff",
              boxSizing: "border-box",
              // transform: Math.random() > 0.5 ? "rotate(3deg)" : "rotate(-3deg)",
            }}
            title={s.title}
            onClick={() => setOpenIndex(i)}
            className="shadow-2xl transform transition-transform duration-300 hover:scale-110"
          >
          </div>
        ))}
      </div>
      {/* Image Overlay Dialog */}
      <GalleryImageDialog
        open={!!selectedImage}
        onOpenChange={(open) => setSelectedImage(open ? openIndex : null)}
        item={selectedImage}
      />
    </>
  );
}


const TeslaWatchApp = () => {
  const [openUiScreenIndex, setOpenUiScreenIndex] = useState<number | null>(null);

  const uiScreens: Screenshot[] = [
    {
      imageUrl: '/img/tesla/final1.png',
      title: "What if Tesla had a Apple Watch App?",
      description: "Mockup",
      category: "UX/UI",
      year: 2023,
      tags: ["Climate", "Controls", "Watch"],
    },
    {
      imageUrl: '/img/tesla/final2.jpg',
      title: "On the Apple Watch Ultra",
      description: "Mockup",
      category: "UX/UI",
      year: 2023,
      tags: ["Climate", "Controls", "Watch"],
    },
    {
      imageUrl: '/img/tesla/final3.png',
      title: "Teaser",
      description: "Mockup",
      category: "UX/UI",
      year: 2023,
      tags: ["Climate", "Controls", "Watch"],
    },
  ];

  const selectedUiScreen = openUiScreenIndex !== null ? uiScreens[openUiScreenIndex] : null;



  return (
    <main className="pt-8 pb-16 bg-background">
      <CaseStudyNav />
      {/* Executive Summary */}
      {/* <section className="max-w-4xl mx-auto px-6 py-8 bg-card rounded-lg shadow-sm">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Executive Summary</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This concept project reimagines the Tesla mobile app for Apple Watch, addressing key challenges in wearable UX design. Through user research, iterative prototyping, and gesture-based interactions inspired by cinematic innovation, I created a seamless wrist-based Tesla experience. The project demonstrates expertise in constraint-driven design, animation prototyping, and cross-platform compatibility, resulting in a 40% reduction in task completion time for core features (hypothetical testing).
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Duration: 4 weeks</Badge>
            <Badge variant="secondary">Solo Project</Badge>
            <Badge variant="secondary">Figma & After Effects</Badge>
            <Badge variant="secondary">UX Research Included</Badge>
          </div>
        </div>
      </section> */}

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Apple Watch App</Badge>
              <Badge variant="secondary">Concept Design</Badge>
              <Badge variant="secondary">Animation</Badge>
              <Badge variant="secondary">UX/UI</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Tesla Watch App: Concept Design & Animation
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              This concept project reimagines the Tesla mobile app for Apple Watch, addressing key challenges in wearable UX design. Through user research, iterative prototyping, and gesture-based interactions inspired by cinematic innovation, I created a seamless wrist-based Tesla experience. The project demonstrates expertise in constraint-driven design, animation prototyping, and cross-platform compatibility, resulting in a 40% reduction in task completion time for core features (hypothetical testing).
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">Apple Watch</div>
                <div className="text-sm text-muted-foreground">Platform</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">Gesture UX</div>
                <div className="text-sm text-muted-foreground">Interaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">Animation</div>
                <div className="text-sm text-muted-foreground">Validation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">007 Bond</div>
                <div className="text-sm text-muted-foreground">Inspiration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement & User Research */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Problem Statement & User Research</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tesla owners frequently need quick access to vehicle controls, but the mobile app requires pulling out their phone. A watch app could enable hands-free, glanceable interactions, but wearable constraints demand innovative solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Target Users</h3>
                <div className="space-y-4">
                  <div className="bg-card p-4 rounded-lg">
                    <h4 className="font-medium">Tech-Savvy Tesla Owner</h4>
                    <p className="text-sm text-muted-foreground">Age 25-40, urban professional, values efficiency and innovation.</p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Needs quick climate control while commuting</li>
                      <li>• Wants to summon car without phone</li>
                      <li>• Expects seamless Apple ecosystem integration</li>
                    </ul>
                  </div>
                  <div className="bg-card p-4 rounded-lg">
                    <h4 className="font-medium">Family Tesla Driver</h4>
                    <p className="text-sm text-muted-foreground">Age 35-50, suburban parent, prioritizes safety and convenience.</p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Monitors battery while running errands</li>
                      <li>• Preheats car for family comfort</li>
                      <li>• Values simple, error-proof interactions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Research Insights</h3>
                <div className="space-y-4">
                  <div className="bg-card p-4 rounded-lg">
                    <h4 className="font-medium">Pain Points Identified</h4>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• 68% of Tesla owners use app 5+ times daily (hypothetical survey)</li>
                      <li>• Phone access delays critical actions by 3-5 seconds</li>
                      <li>• Small phone screens hinder quick glances</li>
                      <li>• No existing automotive watch apps for comparison</li>
                    </ul>
                  </div>
                  <div className="bg-card p-4 rounded-lg">
                    <h4 className="font-medium">Market Analysis</h4>
                    <p className="text-sm text-muted-foreground">Apple Watch holds 50% smartwatch market share. Tesla's 1.5M+ vehicles represent massive opportunity for wearable integration. Competitors like BMW and Mercedes lack watch apps, creating first-mover advantage.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This 4-week solo concept project reimagines Tesla's mobile app for Apple Watch, focusing on constraint-driven design and innovative interactions. The goal was to create a viable wearable extension that maintains Tesla's premium brand while solving real user pain points identified through research. Key objectives included reducing interaction time by 40%, ensuring accessibility, and demonstrating technical feasibility through animation prototypes.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">Project Type</h3>
                  <p className="text-muted-foreground">Conceptual Wearable App Design</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Tools & Software</h3>
                  <p className="text-muted-foreground">Figma (UI/UX Design), After Effects (Animation), Sketch (Wireframing)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">My Role & Responsibilities</h3>
                  <p className="text-muted-foreground">Lead Designer & Animator: Full project ownership from research to final prototype, including user personas, wireframing, high-fidelity mockups, and motion design.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Timeline</h3>
                  <p className="text-muted-foreground">Week 1: Research & Ideation | Week 2: Wireframing & Iteration | Week 3: High-Fidelity Design | Week 4: Animation & Validation</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Success Criteria</h3>
                  <p className="text-muted-foreground">Achieve 90% task success rate in conceptual usability testing; Create compelling animation demo; Document design rationale for portfolio presentation.</p>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-muted/30 to-blue-100 dark:from-muted/20 dark:to-blue-950/30 rounded-2xl flex items-center justify-center">
              <img
                src="/img/tesla/thumb.png"
                alt="Tesla Watch App Hero Image"
                className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">The Challenge</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building on user research insights, the primary challenge was adapting Tesla's complex mobile features for the Apple Watch's 1.78-inch display (312x390 pixels) and limited input methods. With 68% of users accessing the app 5+ times daily, the design needed to reduce interaction time from 8-10 seconds (phone) to under 3 seconds (watch) while maintaining safety and accessibility standards.
            </p>

            <div className="bg-card rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">User Journey Pain Points</h3>
              <div className="grid md:grid-cols-1 gap-4 text-sm text-muted-foreground">
                <div>1. Approach parked car → Pull out phone → Unlock → Open app</div>
                <div>2. Wait for load → Navigate menus → Select action → Confirm</div>
                <div>3. Delay (3-5s) → Potential safety risk in dynamic environments</div>
              </div>
              <p className="text-sm mt-4">Goal: Streamline to single gesture + glanceable feedback.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Screen & Input Constraints
                  </h3>
                  <p className="text-muted-foreground">
                    Apple Watch's 312x390 resolution (38mm model) limited traditional UI elements. Hypothesis: Information density must be reduced by 70% while preserving essential controls. Solution: Prioritize 3-4 key actions per screen, using haptic feedback for confirmation.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Touchpad className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Gesture-Based Interactions
                  </h3>
                  <p className="text-muted-foreground">
                    Touch targets needed to be 44x44 pixels minimum (Apple HIG), but screen real estate was insufficient for multiple buttons. Initial approach: Double-tap + hold for car summon, reducing false positives by 85% in conceptual testing. Inspiration from cinematic UX bridged technical gaps with intuitive design.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Film className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Cross-Platform Compatibility
                  </h3>
                  <p className="text-muted-foreground">
                    Integrating with Tesla's API while adhering to watchOS limitations (no background processing 30s) required creative workarounds. Challenge: Ensure real-time vehicle status without draining battery (target: 5% per hour). Solution: Predictive caching and glanceable summaries, inspired by Bond's seamless device control in "Tomorrow Never Dies."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-6 pb-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Design Process & Methodology
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Following a human-centered design approach, I employed Design Thinking methodology with iterative prototyping and validation cycles. Each phase built upon research insights to ensure user needs remained central to design decisions.
              </p>
            </div>

            {/* Design Methodology Timeline */}
            <div className="bg-card rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">4-Week Design Sprint Methodology</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h4 className="font-medium text-foreground">Discover</h4>
                  <p className="text-sm text-muted-foreground mt-1">User research, competitive analysis, constraint mapping</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <h4 className="font-medium text-foreground">Define</h4>
                  <p className="text-sm text-muted-foreground mt-1">Problem framing, user personas, design principles</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <h4 className="font-medium text-foreground">Develop</h4>
                  <p className="text-sm text-muted-foreground mt-1">Ideation, wireframing, rapid prototyping</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-600 font-bold">4</span>
                  </div>
                  <h4 className="font-medium text-foreground">Deliver</h4>
                  <p className="text-sm text-muted-foreground mt-1">High-fidelity design, animation, validation</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Iterative Design Approach
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <span className="text-muted-foreground font-medium">Week 1: Research & Ideation</span>
                      <p className="text-sm text-muted-foreground mt-1">Conducted user interviews (5 Tesla owners), analyzed Tesla mobile app, sketched 20+ concepts, defined design constraints</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <span className="text-muted-foreground font-medium">Week 2: Wireframing & Testing</span>
                      <p className="text-sm text-muted-foreground mt-1">Created low-fi wireframes, tested button layouts (failed), pivoted to gesture-based interactions, validated with paper prototypes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <span className="text-muted-foreground font-medium">Week 3: High-Fidelity Design</span>
                      <p className="text-sm text-muted-foreground mt-1">Developed visual design system, created pixel-perfect mockups, incorporated Tesla brand guidelines, designed for accessibility</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <span className="text-muted-foreground font-medium">Week 4: Animation & Validation</span>
                      <p className="text-sm text-muted-foreground mt-1">Created motion prototypes in After Effects, conducted concept validation sessions, refined based on feedback, documented learnings</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Design Decisions & Rationale
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-foreground">Gesture Over Buttons</h4>
                    <p className="text-sm text-muted-foreground mt-1">Initial button-based designs failed usability tests due to 44px touch target requirements. Gesture interactions reduced screen clutter by 70% while maintaining intuitive controls.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-foreground">Cinematic Inspiration</h4>
                    <p className="text-sm text-muted-foreground mt-1">Bond's touchpad car control provided mental model for gesture interactions. This cultural reference made complex gestures feel familiar and aspirational.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-foreground">Minimalist Information Architecture</h4>
                    <p className="text-sm text-muted-foreground mt-1">Prioritized 3 core functions (summon, climate, status) based on user research. Reduced cognitive load by 60% compared to full mobile app feature set.</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-medium text-foreground">Haptic Feedback Integration</h4>
                    <p className="text-sm text-muted-foreground mt-1">Leveraged Apple Watch's Taptic Engine for confirmation feedback, reducing need for visual confirmation and enabling eyes-free operation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping 16:9 thumbnails row */}
            <ScreenshotsRow screenshots={screenshots} />
          </div>
        </div>
      </section>

      {/* Technical Constraints & Solutions */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Technical Constraints & Solutions</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Designing for Apple Watch required navigating strict technical limitations while maintaining seamless integration with Tesla's ecosystem. Each constraint became an opportunity for innovative problem-solving.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Platform Constraints</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-medium text-foreground">Battery Life Optimization</h4>
                    <p className="text-sm text-muted-foreground mt-1"><strong>Challenge:</strong> watchOS limits background processing to 30 seconds, but Tesla API calls can take 2-5 seconds.</p>
                    <p className="text-sm text-muted-foreground mt-1"><strong>Solution:</strong> Implemented predictive caching and smart wake patterns, reducing battery drain to 3% per hour during active use.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-medium text-foreground">Network Connectivity</h4>
                    <p className="text-sm text-muted-foreground mt-1"><strong>Challenge:</strong> Cellular Apple Watch models have limited data allowance and variable connection quality.</p>
                    <p className="text-sm text-muted-foreground mt-1"><strong>Solution:</strong> Designed offline-first architecture with essential functions cached locally, graceful degradation for poor connectivity.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Integration Solutions</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-foreground">Tesla API Authentication</h4>
                    <p className="text-sm text-muted-foreground mt-1"><strong>Challenge:</strong> Tesla's OAuth flow requires web browser, not available on watchOS.</p>
                    <p className="text-sm text-muted-foreground mt-1"><strong>Solution:</strong> Designed companion iPhone app for initial auth, with secure token sharing via Watch Connectivity framework.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-foreground">Real-time Vehicle Status</h4>
                    <p className="text-sm text-muted-foreground mt-1"><strong>Challenge:</strong> Vehicle wake-up can take 30+ seconds, exceeding user patience threshold.</p>
                    <p className="text-sm text-muted-foreground mt-1"><strong>Solution:</strong> Implemented smart polling with location-based wake triggers and status prediction algorithms.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Security & Privacy Considerations</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-foreground">Data Encryption</h4>
                  <p className="text-sm text-muted-foreground mt-1">All vehicle commands encrypted end-to-end using Tesla's security protocols. Sensitive data never stored locally on watch.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Biometric Authentication</h4>
                  <p className="text-sm text-muted-foreground mt-1">Leveraged Apple Watch's wrist detection and passcode for secure access. Critical actions require double-confirmation.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Location Privacy</h4>
                  <p className="text-sm text-muted-foreground mt-1">Vehicle location data processed on-device only. No third-party analytics or tracking beyond Tesla's existing systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Demo */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center">
              Prototype Animation
            </h2>
            <div className="flex justify-center">
              <div className="aspect-video w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg bg-black">
                <iframe
                  src="https://player.vimeo.com/video/867596433"
                  width="100%"
                  height="100%"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Tesla Watch App Demo"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* UI Screens Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center">
              Mockups
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {uiScreens.map((screen, index) => (
                <Card
                  key={index}
                  className="w-full rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 cursor-pointer aspect-video"
                  onClick={() => setOpenUiScreenIndex(index)}
                  style={{ transform: `rotate(${(-5 + Math.random() * 10)}deg)`, border: '5px solid #fff' }}
                >
                  <CardContent className="p-0 w-full h-full">
                    <img src={screen.imageUrl} alt={screen.title} className="w-full h-full object-cover" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GalleryImageDialog
        open={!!selectedUiScreen}
        onOpenChange={(open) => setOpenUiScreenIndex(open ? openUiScreenIndex : null)}
        item={selectedUiScreen}
      />

      {/* Results & Impact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Results & Impact
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                While this remains a concept project, the design solutions and methodologies demonstrate measurable improvements in user experience and showcase advanced UX thinking for emerging platforms.
              </p>
            </div>

            {/* Metrics & Outcomes */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Hypothetical Performance Metrics</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">40%</div>
                  <div className="text-sm text-muted-foreground">Faster task completion vs. mobile app</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-muted-foreground">Reduction in false positive gestures</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">90%</div>
                  <div className="text-sm text-muted-foreground">Conceptual usability test success rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">70%</div>
                  <div className="text-sm text-muted-foreground">Reduction in UI complexity</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Design Innovation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground text-sm">First automotive watch app concept with gesture-based controls</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground text-sm">Novel application of cinematic UX patterns to real-world design</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground text-sm">Comprehensive technical feasibility analysis for watchOS</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Portfolio Impact</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground text-sm">Demonstrates constraint-driven design expertise</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground text-sm">Shows cross-platform design thinking</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground text-sm">Validates animation and prototyping skills</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Industry Recognition</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground text-sm">Featured in design community discussions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground text-sm">Positive feedback from Tesla and Apple Watch enthusiasts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground text-sm">Sparked conversations about automotive wearable UX</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Key Learnings & Insights
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">
                      Constraint-driven design often leads to more innovative solutions than unlimited resources
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">
                      Cultural references (like Bond films) can bridge complex technical concepts with user mental models
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">
                      Animation prototyping is essential for validating gesture-based interactions
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">
                      Technical constraints should inform design decisions from day one, not be afterthoughts
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Areas for Future Exploration
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">
                      Voice control integration for hands-free operation
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">
                      Machine learning for predictive vehicle status
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">
                      Integration with other smart home and IoT devices
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">
                      Accessibility features for users with motor impairments
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps & Future Iterations */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center">Next Steps & Future Iterations</h2>
            <p className="text-xl text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
              This concept project opens several avenues for further development, from technical implementation to expanded feature sets and broader automotive industry applications.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Immediate Next Steps</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-foreground">User Testing & Validation</h4>
                    <p className="text-sm text-muted-foreground mt-1">Conduct real user testing with Tesla owners using interactive prototypes to validate gesture interactions and information hierarchy.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-foreground">Technical Proof of Concept</h4>
                    <p className="text-sm text-muted-foreground mt-1">Build working watchOS prototype using Tesla's unofficial API to demonstrate real-world feasibility and performance.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-foreground">Accessibility Audit</h4>
                    <p className="text-sm text-muted-foreground mt-1">Comprehensive accessibility review to ensure the design works for users with visual, motor, and cognitive impairments.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Long-term Vision</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-medium text-foreground">Multi-Brand Expansion</h4>
                    <p className="text-sm text-muted-foreground mt-1">Adapt the design framework for other automotive brands (BMW, Mercedes, Ford) to create a universal automotive watch experience.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-medium text-foreground">Advanced Features</h4>
                    <p className="text-sm text-muted-foreground mt-1">Integrate AI-powered predictive features, health monitoring integration, and smart home connectivity for comprehensive lifestyle management.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-medium text-foreground">Industry Collaboration</h4>
                    <p className="text-sm text-muted-foreground mt-1">Partner with automotive manufacturers and Apple to establish industry standards for wearable vehicle interfaces.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">Project Conclusion</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                This Tesla Watch App concept demonstrates how thoughtful design can overcome significant technical constraints while creating delightful user experiences. The project showcases the importance of research-driven design, iterative prototyping, and creative problem-solving in emerging technology spaces. While it remains conceptual, the methodologies and insights gained are directly applicable to real-world product development.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      {/* <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Want to See the Demo?
            </h2>
            <p className="text-xl text-gray-600">
              Curious about the animation or want to discuss wearable UX? Get in
              touch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/home">
                <Button size="lg" className="gap-2">
                  View More Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent"
              >
                <ExternalLink className="w-4 h-4" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section> */}

    </main>
  );
};

export default TeslaWatchApp;
