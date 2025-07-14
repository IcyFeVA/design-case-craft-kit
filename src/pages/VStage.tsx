
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import CaseStudyNav from "@/components/CaseStudyNav";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ScreenshotsRow from "@/components/ScreenshotsRow";
import { GalleryImageDialog } from "./GalleryImageDialog";

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
        description: "First draft looks nice, but not usable (text and buttons too small).",
        category: "UI",
        year: 2023,
        tags: ["Dashboard", "Tesla", "Apple Watch"],
    },
      {
        imageUrl: '/img/vstage/process4.png',
        title: "Process",
        description: "The concept of using a touch surface to execute a action was inspired by the James Bond movie 'Tomorrow Never Dies.' In this film, the renowned spy is seen using a touchpad on an Ericsson phone to control his BMW car.",
        category: "UI",
        year: 2023,
        tags: ["Dashboard", "Tesla", "Apple Watch"],
    },
          {
        imageUrl: '/img/vstage/process5.png',
        title: "Process",
        description: "The concept of using a touch surface to execute a action was inspired by the James Bond movie 'Tomorrow Never Dies.' In this film, the renowned spy is seen using a touchpad on an Ericsson phone to control his BMW car.",
        category: "UI",
        year: 2023,
        tags: ["Dashboard", "Tesla", "Apple Watch"],
    },

];

  const uiScreens: Screenshot[] = [
      {
          imageUrl: '/img/vstage/final1.png',
          title: "Final UI",
          description: "Dark mode of the vSTAGE 3D interface, showcasing the main editor with advanced controls and data visualization.",
          category: "UX/UI",
          year: 2023,
          tags: ["Climate", "Controls", "Watch"],
      },
      {
          imageUrl: '/img/vstage/final5.png',
          title: "Final UI",
          description: "Slide-bar navigation (bottom) with large visual trackers for presentation sequences, designed like familiar media players.",
          category: "UX/UI",
          year: 2023,
          tags: ["Climate", "Controls", "Watch"],
      },
      {
          imageUrl: '/img/vstage/final3.png',
          title: "Final UI",
          description: "Overlay Editor to manage visual overlays for video export and presentation",
          category: "UX/UI",
          year: 2023,
          tags: ["Climate", "Controls", "Watch"],
      },
      {
          imageUrl: '/img/vstage/final2.png',
          title: "Final UI",
          description: "Login screen for vSTAGE, designed to be simple and intuitive for new users.",
          category: "UX/UI",
          year: 2023,
          tags: ["Climate", "Controls", "Watch"],
      },
      {
          imageUrl: '/img/vstage/final4.png',
          title: "Figma Components",
          description: "There are dozens of dynamic components and reusable patterns for rapid development.",
          category: "UX/UI",
          year: 2023,
          tags: ["Climate", "Controls", "Watch"],
      },
  ];



const VStage = () => {
  const [openUiScreenIndex, setOpenUiScreenIndex] = useState<number | null>(null);

  const selectedUiScreen = openUiScreenIndex !== null ? uiScreens[openUiScreenIndex] : null;

  
  return (
    <div className="min-h-screen bg-white">
      <CaseStudyNav />

      {/* Main Content */}
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Hero Section */}
          <section className="mb-20">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                vSTAGE
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
                3D Data Visualization & Presentation Platform
              </p>
            </div>
            
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                Transforming complex 3D CAD data into intuitive, real-time presentations accessible to both experts and newcomers
              </p>
            </div>

            {/* Hero Image Placeholder */}
            <div className="w-full bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl mb-8 flex items-center justify-center">
              <img src="/img/vstage/hero.png" alt="vSTAGE Hero" className="max-w-full max-h-full object-cover rounded-lg shadow-lg" />
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Role</h3>
                <p className="text-gray-900 font-medium">Lead UX/UI Designer</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Timeline</h3>
                <p className="text-gray-900 font-medium">9 Months</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Team</h3>
                <p className="text-gray-900 font-medium">Designer + 4 Developers</p>
              </div>
            </div>
          </section>

          {/* Challenge Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Side Effects had developed vSTAGE, an advanced 3D visualization tool for presentations, training, and simulations. However, it was exclusively designed for CAD professionals, creating a significant barrier for broader adoption.
                  </p>
                  
                  <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-200 mb-6">
                    <h4 className="font-semibold text-red-800 mb-2">Core Problems</h4>
                    <ul className="space-y-2 text-red-700">
                      <li>• Interface overwhelmed new users with complex 3D data visualization</li>
                      <li>• Managing tens of thousands of components created visual clutter</li>
                      <li>• Existing workflow only served CAD experts, limiting market reach</li>
                      <li>• No clear path for newcomers to access powerful 3D presentation features</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p className="text-blue-800 font-semibold text-lg mb-2">Design Question</p>
                    <p className="text-blue-700">How might we make vSTAGE accessible to new users while preserving the deep functionality that CAD professionals depend on?</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* User Research Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">User Research & Personas</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    I conducted extensive research to understand the needs of both existing CAD professionals and potential new users, identifying key personas and mapping their distinct workflows.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-emerald-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-emerald-800 mb-3">CAD Expert Persona</h4>
                      <div className="space-y-2 text-emerald-700 text-sm">
                        <p><strong>Goals:</strong> Maximum control, advanced filtering, precise component management</p>
                        <p><strong>Pain Points:</strong> Slow workflows, limited overlay management</p>
                        <p><strong>Needs:</strong> Bulk operations, inverse selection, bookmark systems</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-blue-800 mb-3">Newcomer Persona</h4>
                      <div className="space-y-2 text-blue-700 text-sm">
                        <p><strong>Goals:</strong> Simple presentations, intuitive navigation, quick learning</p>
                        <p><strong>Pain Points:</strong> Overwhelming interface, complex terminology</p>
                        <p><strong>Needs:</strong> Guided workflows, simplified controls, clear visual hierarchy</p>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-3">Key Research Insights</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Workflow Complexity:</strong> Expert users needed 15+ specialized tools accessible simultaneously</li>
                    <li><strong>Data Overwhelm:</strong> Projects often contained 50,000+ components requiring intelligent filtering</li>
                    <li><strong>Learning Curve:</strong> New users abandoned the tool within 10 minutes due to complexity</li>
                    <li><strong>Presentation Context:</strong> 70% of use cases were client presentations, not technical modeling</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Design Process Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Design Process</h2>
                <div className="prose prose-lg max-w-none">
                  <div className="space-y-8">
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-xl">1. Workflow Mapping & User Journeys</h3>
                      <p className="text-gray-700 mb-4">Mapped distinct export and overlay workflows for each persona, identifying critical decision points and potential friction areas.</p>
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-green-200 rounded-full mx-auto mb-2"></div>
                            <p className="font-medium text-sm">Expert Journey</p>
                            <p className="text-xs text-gray-600">Complex multi-step workflows</p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-blue-200 rounded-full mx-auto mb-2"></div>
                            <p className="font-medium text-sm">Newcomer Journey</p>
                            <p className="text-xs text-gray-600">Simplified linear flows</p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-purple-200 rounded-full mx-auto mb-2"></div>
                            <p className="font-medium text-sm">Shared Touchpoints</p>
                            <p className="text-xs text-gray-600">Common interaction areas</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-xl">2. Information Architecture & Constraints</h3>
                      <p className="text-gray-700 mb-4">Designed a flexible system that could handle massive datasets while maintaining usability across different experience levels.</p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                          <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-800 font-bold text-sm">⚠</div>
                          <div>
                            <p className="font-medium text-yellow-800">No Horizontal Scrolling</p>
                            <p className="text-yellow-600 text-sm">Except for intentional slide-style navigation patterns</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-sm">🏗</div>
                          <div>
                            <p className="font-medium text-blue-800">Modular Components</p>
                            <p className="text-blue-600 text-sm">Reusable patterns for rapid development</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                          <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-green-800 font-bold text-sm">🎛</div>
                          <div>
                            <p className="font-medium text-green-800">Advanced Controls</p>
                            <p className="text-green-600 text-sm">Filter, tag, bookmark, select/inverse-select capabilities</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-xl">3. Prototyping & UI Kit</h3>
                      <p className="text-gray-700 mb-4">Built high-fidelity Figma components and prototypes to test interaction patterns and validate design decisions with real users.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="aspect-video border border-slate-300 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg overflow-hidden flex items-center justify-center">
                          <img src="/img/vstage/process1.png" alt="design system" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-video bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg overflow-hidden flex items-center justify-center">
                          <img src="/img/vstage/process2.png" alt="design system" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>

                    {/* Overlapping 16:9 thumbnails row */}
                    <ScreenshotsRow screenshots={processShots} />

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    I designed an adaptive interface system that dynamically adjusts complexity based on user needs, featuring progressive disclosure and contextual controls.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-200">
                      <h4 className="font-semibold text-slate-800 mb-2">🎨 Adaptive UI System</h4>
                      <p className="text-slate-700">Toggle-based interface that hides complexity for newcomers while keeping advanced tools accessible to experts. Pop-over toggles, collapsible panels, and contextual menus.</p>
                    </div>
                    
                    <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-200">
                      <h4 className="font-semibold text-amber-800 mb-2">🎬 Slide-Bar Navigation</h4>
                      <p className="text-amber-700">Horizontal slide navigation with large visual trackers for presentation sequences - the one exception to the "no horizontal scroll" rule, designed like familiar media players.</p>
                    </div>
                    
                    <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-200">
                      <h4 className="font-semibold text-emerald-800 mb-2">🌳 Smart Tree View Filters</h4>
                      <p className="text-emerald-700">Hierarchical component browser with bulk selection, inverse selection, bookmarking, and tagging. Handles 50k+ components with search and filtering.</p>
                    </div>
                    
                    <div className="bg-violet-50 p-6 rounded-xl border-l-4 border-violet-200">
                      <h4 className="font-semibold text-violet-800 mb-2">🌓 Dual Theme System</h4>
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

          {/* Testing & Results Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Testing & Impact</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Conducted extensive usability testing with both expert and novice users, iterating based on feedback to refine the adaptive interface approach.
                  </p>

                  {/* Results Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-green-50 p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">75%</div>
                      <p className="text-green-800 font-medium">Faster Onboarding</p>
                      <p className="text-green-600 text-sm">For new users</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                      <p className="text-blue-800 font-medium">Improved Workflow Speed</p>
                      <p className="text-blue-600 text-sm">For expert users</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">3x</div>
                      <p className="text-purple-800 font-medium">Development Efficiency</p>
                      <p className="text-purple-600 text-sm">With modular system</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Testing Insights</h4>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm">"The toggle system lets me hide what I don't need without losing access to advanced features"</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm">"Finally, a slide navigation that is fast and from left to right (like a video editor)"</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm">"The tree view filtering saved hours on complex projects with thousands of components"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learnings Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Learnings</h2>
                <div className="prose prose-lg max-w-none">
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Designing for Expertise Levels</h4>
                      <p>Creating adaptive interfaces requires deep understanding of both novice and expert mental models. Progressive disclosure must feel natural, not restrictive.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Horizontal Scroll Psychology</h4>
                      <p>Users accept horizontal scrolling when it matches familiar interaction patterns (like media players) but reject it for navigation or content browsing.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Modular Design Systems</h4>
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
                      <h2 className="text-3xl font-bold text-gray-900 text-center">
                          Prototype in Action
                      </h2>
                      <div className="flex justify-center">
                          <div className="aspect-video w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg bg-black">
                                        <iframe
                                            className="w-full h-full"
                                            src="https://www.youtube.com/embed/x9Sv6HWOf9E?si=vtetT8m7eiUsq2PR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
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
                    <h2 className="text-3xl font-bold text-gray-900">
                        Final UI
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {uiScreens.map((screen, index) => (
                            <Card
                                key={index}
                                className="w-full rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 cursor-pointer aspect-video"
                                onClick={() => setOpenUiScreenIndex(index)}
                                style={{transform: `rotate(${(-5 + Math.random()*10)}deg)`, border: '5px solid #fff'}}
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

          {/* Next Steps Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Enhancements</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Based on user feedback and usage analytics, several opportunities emerged for future development:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Collaborative Features</strong> - Real-time multi-user editing and annotation for team presentations</li>
                    <li><strong>Advanced Analytics</strong> - User interaction tracking to optimize workflows and identify bottlenecks</li>
                    <li><strong>Mobile Companion App</strong> - Remote control interface for presentations and quick edits</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Reflection Section */}
          <section className="mb-20">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Personal Reflection</h2>
                  <p className="text-slate-800 leading-relaxed">
                    This project taught me that successful Saas software design isn't about choosing between simplicity and power—it's about creating intelligent systems that adapt to user needs. The challenge of serving both CAD experts and newcomers pushed me to develop more sophisticated approaches to progressive disclosure and contextual interfaces. Most importantly, I learned that when users feel in control of their interface complexity, they're more willing to explore advanced features.
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
                <Link to="/">
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
