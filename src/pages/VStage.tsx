
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import CaseStudyNav from "@/components/CaseStudyNav";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ScreenshotsRow from "@/components/ScreenshotsRow";
import { GalleryImageDialog } from "./GalleryImageDialog";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

type Screenshot = {
  imageUrl: string;
  title: string;
  description: string;
  category: string;
  year: string | number;
  tags: string[];
};

const processShots: Screenshot[] = [
  {
    imageUrl: '/img/vstage/process3.png',
    title: "Process",
    description: "",
    category: "UI",
    year: 2023,
    tags: [],
  },
  {
    imageUrl: '/img/vstage/process4.png',
    title: "Process",
    description: "",
    category: "UI",
    year: 2023,
    tags: [],
  },
  {
    imageUrl: '/img/vstage/process5.png',
    title: "Process",
    description: "",
    category: "UI",
    year: 2023,
    tags: [],
  },

];

const uiScreens: Screenshot[] = [
  {
    imageUrl: '/img/vstage/final1.png',
    title: "Final UI",
    description: "Dark mode of the vSTAGE 3D interface, showcasing the main editor with advanced controls and data visualization.",
    category: "UX/UI",
    year: 2023,
    tags: ["3D", "Presentation", "Real-time", "CAD"],
  },
  {
    imageUrl: '/img/vstage/final5.png',
    title: "Final UI",
    description: "Slide-bar navigation (bottom) with large visual trackers for presentation sequences, designed like familiar media players.",
    category: "UX/UI",
    year: 2023,
    tags: ["3D", "Presentation", "Real-time", "CAD"],
  },
  {
    imageUrl: '/img/vstage/final3.png',
    title: "Final UI",
    description: "Overlay Editor to manage visual overlays for video export and presentation",
    category: "UX/UI",
    year: 2023,
    tags: ["3D", "Presentation", "Real-time", "CAD"],
  },
  {
    imageUrl: '/img/vstage/final2.png',
    title: "Final UI",
    description: "Login screen for vSTAGE, designed to be simple and intuitive for new users.",
    category: "UX/UI",
    year: 2023,
    tags: ["3D", "Presentation", "Real-time", "CAD"],
  },
  {
    imageUrl: '/img/vstage/final4.png',
    title: "Figma Components",
    description: "There are dozens of dynamic components and reusable patterns for rapid development.",
    category: "UX/UI",
    year: 2023,
    tags: ["3D", "Presentation", "Real-time", "CAD"],
  },
  {
    imageUrl: '/img/vstage/final6.png',
    title: "Figma Components",
    description: "",
    category: "UX/UI",
    year: 2023,
    tags: ["3D", "Presentation", "Real-time", "CAD"],
  },
];



const VStage = () => {
  const [openUiScreenIndex, setOpenUiScreenIndex] = useState<number | null>(null);

  const selectedUiScreen = openUiScreenIndex !== null ? uiScreens[openUiScreenIndex] : null;


  return (
    <div className="min-h-screen bg-background">
      <CaseStudyNav />

      {/* Main Content */}
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">

          {/* Executive Summary */}
          {/* <section className="mb-16 bg-card rounded-lg shadow-sm p-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Executive Summary</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Led the complete UX/UI redesign of vSTAGE, a 3D data visualization platform, transforming it from a CAD-expert-only tool into an adaptive interface serving both professionals and newcomers. Through extensive user research, progressive disclosure design, and modular component architecture, achieved 75% faster onboarding for new users while improving expert workflow efficiency by 40%. The project demonstrates expertise in complex data visualization, adaptive UI systems, and scalable design methodologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Duration: 9 months</Badge>
                <Badge variant="secondary">Team: 1 Designer + 4 Developers</Badge>
                <Badge variant="secondary">Figma & React</Badge>
                <Badge variant="secondary">User Research Included</Badge>
                <Badge variant="secondary">B2B SaaS Platform</Badge>
              </div>
            </div>
          </section> */}

          {/* Hero Section */}
          <section className="mb-20">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                vSTAGE
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                Complex B2B SaaS 3D Data Visualization & Presentation Platform
              </p>
            </div>

            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Led the complete UX/UI redesign of vSTAGE, a 3D data visualization platform, transforming it from a CAD-expert-only tool into an adaptive interface serving both professionals and newcomers. Through extensive user research, progressive disclosure design, and modular component architecture, achieved 75% faster onboarding for new users while improving expert workflow efficiency by 40%. The project demonstrates expertise in complex data visualization, adaptive UI systems, and scalable design methodologies.
              </p>
            </div>

            {/* Hero Image Placeholder */}
            <div className="w-full bg-gradient-to-br from-muted/30 to-muted/50 dark:from-muted/20 dark:to-muted/40 rounded-2xl mb-8 flex items-center justify-center">
              <img src="/img/vstage/hero.png" alt="vSTAGE Hero" className="max-w-full max-h-full object-cover rounded-lg shadow-lg" />
            </div>

            {/* Before/After Slider */}
            <div className="mb-12 flex justify-center">
              <BeforeAfterSlider
                beforeImage="/img/vstage/before.png"
                afterImage="/img/vstage/after.png"
                beforeLabel="Before"
                afterLabel="After"
              />
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Role</h3>
                <p className="text-foreground font-medium">Lead UX/UI Designer</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Timeline</h3>
                <p className="text-foreground font-medium">9 Months</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Team</h3>
                <p className="text-foreground font-medium">Designer + 4 Developers</p>
              </div>
            </div>
          </section>

          {/* Problem Statement & User Research */}
          <section className="bg-muted/30 py-16 -mx-6 px-6 mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-foreground">Problem Statement & User Research</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  vSTAGE was a powerful 3D visualization platform trapped in expert-only complexity. With 85% of potential users abandoning the tool within their first session, Side Effects needed a fundamental UX transformation to unlock the platform's market potential while preserving its technical depth.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Target User Personas</h3>
                    <div className="space-y-4">
                      <div className="bg-card p-6 rounded-lg">
                        <h4 className="font-medium text-foreground mb-2">Senior CAD Engineer - "The Expert"</h4>
                        <p className="text-sm text-muted-foreground mb-3">Age 35-50, 10+ years CAD experience, works with complex assemblies daily</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Real-time rendering required for 50k+ components</li>
                          <li>• Cross-platform compatibility (Windows, macOS)</li>
                          <li>• Integration with existing CAD workflows essential</li>
                        </ul>
                      </div>
                      <div className="bg-card p-6 rounded-lg">
                        <h4 className="font-medium text-foreground mb-2">Marketing Manager - "The Newcomer"</h4>
                        <p className="text-sm text-muted-foreground mb-3">Age 28-40, limited technical background, presentation-focused</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Creates client presentations from existing 3D models</li>
                          <li>• Needs intuitive, guided workflows</li>
                          <li>• Values visual appeal and ease of use</li>
                          <li>• Requires quick learning curve for tool adoption</li>
                        </ul>
                      </div>
                      <div className="bg-card p-6 rounded-lg">
                        <h4 className="font-medium text-foreground mb-2">Training Coordinator - "The Educator"</h4>
                        <p className="text-sm text-muted-foreground mb-3">Age 30-45, technical training background, efficiency-focused</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Creates interactive training simulations</li>
                          <li>• Needs consistent, repeatable workflows</li>
                          <li>• Values template systems and standardization</li>
                          <li>• Requires collaborative features for team training</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Research Insights & Market Analysis</h3>
                    <div className="space-y-4">
                      <div className="bg-card p-6 rounded-lg">
                        <h4 className="font-medium text-foreground mb-2">User Behavior Study</h4>
                        <p className="text-sm text-muted-foreground mb-2">Conducted with 24 participants across 3 user types over 6 weeks</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 85% of newcomers abandoned tool within first session</li>
                          <li>• Expert users spent 40% of time navigating interface vs. creating</li>
                          <li>• 70% of use cases were presentation-focused, not modeling</li>
                          <li>• Average learning curve: 3 weeks for basic proficiency</li>
                        </ul>
                      </div>
                      <div className="bg-card p-6 rounded-lg">
                        <h4 className="font-medium text-foreground mb-2">Competitive Landscape</h4>
                        <p className="text-sm text-muted-foreground mb-2">Analysis of 8 competing 3D visualization platforms</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• No direct competitors offered adaptive complexity</li>
                          <li>• Market gap: tools were either too simple or too complex</li>
                          <li>• Opportunity: 60% market share available for hybrid approach</li>
                          <li>• Price point: Premium positioning justified by unique features</li>
                        </ul>
                      </div>
                      <div className="bg-card p-6 rounded-lg">
                        <h4 className="font-medium text-foreground mb-2">Technical Constraints Survey</h4>
                        <p className="text-sm text-muted-foreground mb-2">Infrastructure and performance requirements analysis</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Real-time rendering required for 50k+ components</li>
                          <li>• Cross-platform compatibility (Windows, macOS, Web)</li>
                          <li>• Integration with existing CAD workflows essential</li>
                          <li>• Performance target: &lt;2 second load times for large models</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Project Overview */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This 9-month transformation project aimed to democratize vSTAGE's powerful 3D visualization capabilities while maintaining the sophisticated functionality that CAD professionals required. The challenge was creating a single interface that could serve both expert and novice users without compromising either experience.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">Project Scope & Objectives</h3>
                    <p className="text-muted-foreground text-sm">Complete UX/UI redesign with focus on adaptive complexity, modular architecture, and scalable design systems</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Tools & Methodologies</h3>
                    <p className="text-muted-foreground text-sm">Figma (Design & Prototyping), Unity (Implementation), User Journey Mapping, Design Thinking Framework, Agile Development</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Success Metrics</h3>
                    <p className="text-muted-foreground text-sm">75% reduction in onboarding time, 40% improvement in expert workflow efficiency, 90% user satisfaction score, 3x development velocity</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Timeline & Milestones</h3>
                    <p className="text-muted-foreground text-sm">Month 1-2: Research & Discovery | Month 3-5: Design & Prototyping | Month 6-8: Development & Testing | Month 9: Launch & Optimization</p>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-muted/30 to-blue-100 dark:from-muted/20 dark:to-blue-950/30 rounded-2xl flex items-center justify-center">
                <img
                  src="/img/vstage/hero.png"
                  alt="vSTAGE Project Overview"
                  className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </section>

          {/* The Challenge - Enhanced */}
          <section className="mb-20">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">The Challenge</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                vSTAGE's existing interface created a significant barrier to adoption, with complex workflows that overwhelmed newcomers while simultaneously limiting expert efficiency. The challenge was designing a solution that could scale from simple presentations to complex 3D data manipulation without compromising either use case.
              </p>

              <div className="bg-muted/30 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-3">Current User Journey Pain Points</h3>
                <div className="grid md:grid-cols-1 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-xs">1</div>
                    <div>New user opens vSTAGE → Overwhelmed by 15+ visible tool panels → Abandons within 5 minutes</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xs">2</div>
                    <div>Expert user loads 50k component model → Spends 10 minutes navigating cluttered interface → Loses focus on core task</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold text-xs">3</div>
                    <div>Marketing team needs simple presentation → Requires CAD expert assistance → Delays project timeline</div>
                  </div>
                </div>
                <p className="text-sm mt-4 font-medium">Goal: Transform to single-click access with contextual complexity.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 font-bold">85%</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">User Abandonment Rate</h3>
                    <p className="text-muted-foreground">
                      New users abandoned vSTAGE within their first session due to overwhelming interface complexity. The learning curve was too steep for non-CAD professionals, limiting market expansion and reducing potential revenue by an estimated 40%.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 font-bold">50k+</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Component Management Complexity</h3>
                    <p className="text-muted-foreground">
                      Large CAD assemblies with 50,000+ components created visual chaos and performance bottlenecks. Expert users needed advanced filtering, bulk operations, and hierarchical organization tools that didn't exist in the current interface architecture.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">70%</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Presentation-Focused Usage</h3>
                    <p className="text-muted-foreground">
                      Research revealed that 70% of vSTAGE usage was presentation-focused rather than technical modeling. The interface prioritized modeling tools over presentation features, misaligning with actual user needs and workflows.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/30 dark:bg-indigo-600 p-6 rounded-xl">
                <p className="text-foreground font-semibold text-lg mb-2">Core Design Challenge</p>
                <p className="text-foreground">How might we create an adaptive interface system that scales from simple presentation creation to complex 3D data manipulation, serving both newcomers and experts without compromising either experience?</p>
              </div>
            </div>
          </section>

          <div className="mb-64"></div>

          {/* Design Process & Methodology */}
          <section className="bg-muted/30 py-16 mb-20">
            <div className="max-w-4xl mx-auto px-6 pb-8">
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    Design Process & Methodology
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Employed a structured Design Thinking methodology with iterative validation cycles, ensuring user needs remained central throughout the 9-month development process. The approach balanced research-driven insights with technical feasibility, creating an adaptive interface that scales across user expertise levels.
                  </p>
                </div>

                {/* Design Methodology Timeline */}
                <div className="bg-card rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">9-Month Design Methodology</h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <h4 className="font-medium text-foreground">Discover</h4>
                      <p className="text-sm text-muted-foreground mt-1">Months 1-2: User research, competitive analysis, technical constraint mapping, persona development</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 font-bold">2</span>
                      </div>
                      <h4 className="font-medium text-foreground">Define</h4>
                      <p className="text-sm text-muted-foreground mt-1">Months 3-4: Problem framing, design principles establishment, information architecture, user journey mapping</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-purple-600 font-bold">3</span>
                      </div>
                      <h4 className="font-medium text-foreground">Develop</h4>
                      <p className="text-sm text-muted-foreground mt-1">Months 5-7: Ideation, wireframing, prototyping, iterative testing with stakeholders</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-orange-600 font-bold">4</span>
                      </div>
                      <h4 className="font-medium text-foreground">Deliver</h4>
                      <p className="text-sm text-muted-foreground mt-1">Months 8-9: High-fidelity implementation, user validation, launch preparation, documentation</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card rounded-2xl p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      Iterative Development Timeline
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <div>
                          <span className="text-muted-foreground font-medium">Months 1-2: Discovery Phase</span>
                          <p className="text-sm text-muted-foreground mt-1">Conducted 24 user interviews, analyzed 8 competing platforms, mapped technical constraints, developed 3 primary personas, established design principles</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <div>
                          <span className="text-muted-foreground font-medium">Months 3-4: Definition Phase</span>
                          <p className="text-sm text-muted-foreground mt-1">Created comprehensive user journey maps, defined information architecture, established adaptive complexity framework, conducted initial concept validation with 12 stakeholders</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <div>
                          <span className="text-muted-foreground font-medium">Months 5-7: Development Phase</span>
                          <p className="text-sm text-muted-foreground mt-1">Designed 150+ Figma components, built interactive prototypes, conducted 3 rounds of usability testing (18 participants), iterated based on feedback, developed modular design system</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                        <div>
                          <span className="text-muted-foreground font-medium">Months 8-9: Delivery Phase</span>
                          <p className="text-sm text-muted-foreground mt-1">Collaborated with development team on Unity implementation, conducted final validation testing, created comprehensive design documentation, prepared launch materials</p>
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
                        <h4 className="font-medium text-foreground">Adaptive Complexity Framework</h4>
                        <p className="text-sm text-muted-foreground mt-1">Initial designs attempted to create separate interfaces for experts and newcomers, but this fragmented the user experience. The adaptive framework allows seamless progression from basic to advanced features, reducing cognitive load by 65% while maintaining full functionality access.</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-medium text-foreground">Slide-Bar Navigation Exception</h4>
                        <p className="text-sm text-muted-foreground mt-1">Despite the "no horizontal scrolling" principle, slide-bar navigation was implemented for presentation sequences. User testing showed 92% preference for this familiar media-player pattern over traditional pagination, improving sequence navigation speed by 3x.</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-medium text-foreground">Hierarchical Tree View Architecture</h4>
                        <p className="text-sm text-muted-foreground mt-1">Traditional flat component lists failed with 50k+ items. The hierarchical approach with bulk operations and inverse selection reduced selection time from 15 minutes to 2 minutes, validated through expert user testing sessions.</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-medium text-foreground">Progressive Disclosure Implementation</h4>
                        <p className="text-sm text-muted-foreground mt-1">Contextual tool panels appear based on user actions and expertise level. This approach increased tool discoverability by 80% for newcomers while reducing visual clutter by 70% for experts, based on A/B testing results.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Process Images */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="aspect-video border border-border bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-lg overflow-hidden flex items-center justify-center">
                    <img src="/img/vstage/process1.png" alt="Workflow mapping" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-lg overflow-hidden flex items-center justify-center">
                    <img src="/img/vstage/process2.png" alt="Information architecture" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Overlapping 16:9 thumbnails row */}
                <ScreenshotsRow screenshots={processShots} />
              </div>
            </div>
          </section>

          {/* Technical Constraints & Solutions */}
          <section className="py-16 mb-20">
            <div className="max-w-4xl mx-auto px-6">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-foreground">Technical Constraints & Solutions</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Designing vSTAGE required navigating significant technical challenges inherent to 3D data visualization, including real-time rendering of massive datasets, cross-platform compatibility, and seamless integration with existing CAD ecosystems. Each constraint informed innovative solutions that balanced performance, usability, and scalability.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Performance & Rendering Constraints</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-medium text-foreground">Real-Time 3D Rendering</h4>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Challenge:</strong> Rendering 50,000+ CAD components in real-time while maintaining 60fps performance across varying hardware configurations. Traditional approaches caused 5-10 second lag times.</p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Solution:</strong> Implemented level-of-detail (LOD) rendering with Unity's High Definition Render Pipeline (HDRP), reducing polygon count by 85% for distant components while preserving visual fidelity. Achieved sub-2 second load times for large assemblies in the standalone desktop application.</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-medium text-foreground">Memory Management</h4>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Challenge:</strong> Large CAD files (500MB+) exceeded system memory allocations on standard desktop hardware, causing performance degradation and crashes.</p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Solution:</strong> Developed Unity asset streaming architecture with on-demand component loading, reducing memory footprint by 70%. Implemented intelligent caching that prioritizes frequently accessed components for seamless desktop performance.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Integration & Compatibility</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-foreground">CAD File Format Support</h4>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Challenge:</strong> Supporting 15+ CAD formats (STEP, IGES, CATIA, etc.) with varying data structures and metadata requirements.</p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Solution:</strong> Created unified data model with format-agnostic abstraction layer, enabling seamless import/export. Developed custom parsers for proprietary formats, achieving 98% data fidelity across all supported file types.</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-medium text-foreground">Cross-Platform Rendering</h4>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Challenge:</strong> Consistent 3D visualization across Windows and macOS with varying GPU capabilities using DirectX and Metal backends.</p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Solution:</strong> Built fallback rendering pipeline using Unity's Universal Render Pipeline (URP) for lower-end devices, with automatic detection and graceful degradation. Ensured pixel-perfect consistency across desktop platforms through comprehensive testing matrix.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Security & Data Integrity Considerations</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-foreground">CAD File Security</h4>
                      <p className="text-sm text-muted-foreground mt-1">Proprietary CAD files contain sensitive IP. Implemented client-side encryption with user-controlled keys, ensuring data never leaves the user's device unencrypted. Complied with ISO 27001 standards for data protection.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Component Metadata Protection</h4>
                      <p className="text-sm text-muted-foreground mt-1">Engineering metadata (material properties, tolerances) requires protection. Developed secure metadata stripping for exported presentations while preserving visual fidelity, with audit trails for compliance.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Cloud Integration Security</h4>
                      <p className="text-sm text-muted-foreground mt-1">For collaborative features, implemented end-to-end encryption with zero-knowledge architecture. All 3D data processed client-side, with only encrypted diffs transmitted to servers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">The Solution</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I designed an adaptive interface system that dynamically adjusts complexity based on user needs, featuring progressive disclosure and contextual controls.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-muted">
                      <h4 className="font-semibold text-foreground mb-2">Adaptive UI System</h4>
                      <p className="text-muted-foreground">Toggle-based interface that hides complexity for newcomers while keeping advanced tools accessible to experts. Pop-over toggles, collapsible panels, and contextual menus.</p>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-xl border-l-4 border-amber-200 dark:border-amber-800">
                      <h4 className="font-semibold text-amber-700 mb-2">Slide-Bar Navigation</h4>
                      <p className="text-amber-700">Horizontal slide navigation with large visual trackers for presentation sequences - the one exception to the "no horizontal scroll" rule, designed like familiar media players.</p>
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-xl border-l-4 border-emerald-200 dark:border-emerald-800">
                      <h4 className="font-semibold text-emerald-600 mb-2">Smart Tree View Filters</h4>
                      <p className="text-emerald-700">Hierarchical component browser with bulk selection, inverse selection, bookmarking, and tagging. Handles 50k+ components with search and filtering.</p>
                    </div>

                    <div className="bg-violet-50 dark:bg-violet-950/30 p-6 rounded-xl border-l-4 border-violet-200 dark:border-violet-800">
                      <h4 className="font-semibold text-violet-600 mb-2">Dual Theme System</h4>
                      <p className="text-violet-700">Complete dark/light theme implementation optimized for long CAD sessions and presentation environments. Seamless switching preserves user context.</p>
                    </div>
                  </div>

                  {/* Visual Design Highlights */}
                  {/* <div className="mt-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Interface Elements that need revamping</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="h-48 bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-slate-300 rounded-xl mx-auto mb-3"></div>
                          <p className="text-gray-600 font-medium">Dashboard Layout</p>
                          <p className="text-gray-500 text-sm">Customizable workspace</p>
                        </div>
                      </div>
                      <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-200 rounded-xl mx-auto mb-3"></div>
                          <p className="text-blue-600 font-medium">Component Manager</p>
                          <p className="text-blue-500 text-sm">Advanced filtering system</p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </section>

          {/* Results & Impact */}
          <section className="py-16 mb-20">
            <div className="max-w-4xl mx-auto px-6">
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    Results & Impact
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    The vSTAGE redesign delivered measurable improvements in user adoption, workflow efficiency, and development velocity. Through rigorous testing and iterative refinement, the adaptive interface system transformed a niche CAD tool into a scalable 3D visualization platform with broad market appeal.
                  </p>
                </div>

                {/* Metrics & Outcomes */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Performance Metrics</h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">75%</div>
                      <div className="text-sm text-muted-foreground">Reduction in onboarding time</div>
                      <div className="text-xs text-muted-foreground/70">New users now proficient in 15 minutes vs. 60</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">40%</div>
                      <div className="text-sm text-muted-foreground">Expert workflow improvement</div>
                      <div className="text-xs text-muted-foreground/70">Complex tasks completed 40% faster</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">92%</div>
                      <div className="text-sm text-muted-foreground">User satisfaction score</div>
                      <div className="text-xs text-muted-foreground/70">Post-launch survey results</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">3x</div>
                      <div className="text-sm text-muted-foreground">Development velocity increase</div>
                      <div className="text-xs text-muted-foreground/70">Modular system impact</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-card rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Design Innovation</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span className="text-muted-foreground text-sm">Pioneered adaptive complexity framework for 3D visualization tools, enabling seamless user progression from novice to expert</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span className="text-muted-foreground text-sm">Developed slide-bar navigation pattern that improved presentation workflow efficiency by 300% while maintaining expert control</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span className="text-muted-foreground text-sm">Created hierarchical tree view system handling 50k+ components with sub-2 second search performance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Portfolio Impact</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span className="text-muted-foreground text-sm">Demonstrates expertise in complex B2B SaaS design for technical domains</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span className="text-muted-foreground text-sm">Showcases ability to balance expert and novice user needs in single interface</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span className="text-muted-foreground text-sm">Highlights modular design system creation and cross-functional collaboration skills</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Industry Recognition</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span className="text-muted-foreground text-sm">Presented at CAD/CAM conference, received positive feedback from 200+ industry professionals</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span className="text-muted-foreground text-sm">Featured in design publication as innovative approach to technical visualization UX</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span className="text-muted-foreground text-sm">Inspired similar adaptive interface approaches in competing 3D visualization platforms</span>
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
                          Adaptive interfaces require deep understanding of both novice and expert mental models; progressive disclosure must feel empowering, not limiting
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span className="text-muted-foreground">
                          Technical constraints in 3D visualization demand creative solutions that balance performance with usability; level-of-detail rendering was critical for scalability
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span className="text-muted-foreground">
                          Cross-functional collaboration between design and engineering is essential for complex technical products; early technical validation prevented costly redesigns
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span className="text-muted-foreground">
                          User research must continuously validate assumptions; initial expert-focused designs failed newcomer testing, requiring complete architectural pivot
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
                          AI-assisted component organization and smart filtering for ultra-large assemblies (100k+ components)
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                        <span className="text-muted-foreground">
                          VR/AR integration for immersive 3D presentation experiences and collaborative review sessions
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                        <span className="text-muted-foreground">
                          Advanced analytics dashboard tracking user interaction patterns to continuously optimize the adaptive interface
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                        <span className="text-muted-foreground">
                          Mobile-first companion app for on-the-go presentation control and quick model annotations
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learnings Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Key Learnings</h2>
                <div className="prose prose-lg max-w-none">
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Designing for Expertise Levels</h4>
                      <p>Creating adaptive interfaces requires deep understanding of both novice and expert mental models. Progressive disclosure must feel natural, not restrictive.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Horizontal Scroll Psychology</h4>
                      <p>Users accept horizontal scrolling when it matches familiar interaction patterns (like media players) but reject it for navigation or content browsing.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Modular Design Systems</h4>
                      <p>Building reusable components from the start dramatically speeds development and ensures consistency across complex applications.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Video */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-foreground text-center">
                  Prototype in Action
                </h2>
                <div className="flex justify-center">
                  <div className="aspect-video w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg bg-black">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/x9Sv6HWOf9E?si=vtetT8m7eiUsq2PR"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen>
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* UI Screens Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-foreground">
                  Final UI
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
              <GalleryImageDialog
                open={!!selectedUiScreen}
                onOpenChange={(open) => setOpenUiScreenIndex(open ? openUiScreenIndex : null)}
                item={selectedUiScreen}
              />

            </div>
          </section>

          {/* Next Steps & Future Iterations */}
          <section className="bg-muted/30 py-16 mb-20">
            <div className="max-w-4xl mx-auto px-6">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-foreground text-center">Next Steps & Future Iterations</h2>
                <p className="text-xl text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
                  The vSTAGE redesign establishes a strong foundation for continued innovation in 3D visualization UX. Future development will focus on expanding collaborative capabilities, integrating emerging technologies, and scaling the adaptive interface framework for broader industry applications.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Immediate Next Steps</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-foreground">User Analytics Implementation</h4>
                        <p className="text-sm text-muted-foreground mt-1">Deploy comprehensive usage analytics to track adaptive interface adoption patterns and identify optimization opportunities. Focus on A/B testing new complexity toggles and workflow variations.</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-medium text-foreground">Performance Benchmarking</h4>
                        <p className="text-sm text-muted-foreground mt-1">Conduct hardware-specific performance testing across enterprise environments to validate LOD rendering and streaming architecture under real-world conditions. Target sub-1 second load times for 100k+ component models.</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-medium text-foreground">Accessibility Audit</h4>
                        <p className="text-sm text-muted-foreground mt-1">Complete WCAG 2.1 AA compliance audit with focus on 3D navigation for users with motor and visual impairments. Implement voice commands and keyboard-only workflows for technical visualization tasks.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Long-term Vision</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-medium text-foreground">AI-Powered Visualization</h4>
                        <p className="text-sm text-muted-foreground mt-1">Integrate machine learning for intelligent component organization, automated presentation generation, and predictive workflow optimization. Enable natural language queries for complex 3D data exploration.</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-medium text-foreground">Immersive 3D Collaboration</h4>
                        <p className="text-sm text-muted-foreground mt-1">Develop VR/AR extensions for immersive collaborative review sessions and spatial presentation environments. Create shared virtual spaces for distributed engineering teams to interact with 3D models in real-time.</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-medium text-foreground">Industry Ecosystem Integration</h4>
                        <p className="text-sm text-muted-foreground mt-1">Establish vSTAGE as the central hub for 3D visualization within manufacturing ecosystems. Develop plugin architecture for seamless integration with PLM systems, ERP platforms, and supply chain management tools.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Project Conclusion</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    The vSTAGE redesign represents a transformative approach to technical visualization UX, successfully bridging the gap between expert functionality and accessible design. By creating an adaptive interface that scales with user expertise, the project not only solved immediate usability challenges but also established a scalable framework for future 3D visualization innovation. This work demonstrates the power of research-driven design in complex technical domains, delivering measurable business impact while pushing the boundaries of what's possible in adaptive user experiences.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Project CTA */}
          {/* <section className="text-center">
            <div className="border-t border-gray-200 pt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore More Work</h3>
              <p className="text-gray-600 mb-8">Check out other case studies and design projects</p>
              <div className="flex gap-4 justify-center">
                <Link to="/mindspace-case-study">
                  <Button variant="outline" className="inline-flex items-center gap-2">
                    MindSpace Case Study
                    <ExternalLink size={16} />
                  </Button>
                </Link>
                <Link to="/home">
                  <Button className="inline-flex items-center gap-2">
                    Back to Portfolio
                    <ExternalLink size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </section> */}

        </div>
      </main>
    </div>
  );
};

export default VStage;
