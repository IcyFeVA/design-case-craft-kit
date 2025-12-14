import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Sparkles, Zap, Rocket, Brain, Home, X } from "lucide-react";
import { Link } from "react-router-dom";
import CaseStudyNav from "@/components/CaseStudyNav";
import { useState } from "react";
import { GalleryImageDialog } from "./GalleryImageDialog";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
    imageUrl: '/img/ai-design/prompt.png',
    title: "Gemini Pro AI Prompt",
    description: "The initial prompt used to generate the project brief and UI components with Google's Gemini Pro AI",
    category: "AI Prompt",
    year: 2025,
    tags: ["Gemini Pro", "AI Prompt", "Project Brief"],
  },
  {
    imageUrl: '/img/ai-design/uxpilot.png',
    title: "UX Pilot Workflow",
    description: "Using the AI-generated brief in UX Pilot to create the home page design",
    category: "Process",
    year: 2025,
    tags: ["UX Pilot", "Design Process", "AI Integration"],
  },
  // {
  //   imageUrl: '/img/ai-design/final-design.png',
  //   title: "Final Home Page Design",
  //   description: "The completed home page design generated through the AI-driven workflow",
  //   category: "Final Design",
  //   year: 2025,
  //   tags: ["Home Page", "Final Design", "AI Generated"],
  // },
];


const AIDrivenDesign = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isFinalDesignModalOpen, setIsFinalDesignModalOpen] = useState(false);
  const selectedImage = openIndex !== null ? processShots[openIndex] : null;
  return (
    <div className="pt-8 pb-16 bg-background">
      <CaseStudyNav linkOverride="/home" />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div className="space-y-6">
            {/* <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">AI-Driven Design</Badge>
              <Badge variant="secondary">UX Workflow</Badge>
              <Badge variant="secondary">Rapid Prototyping</Badge>
            </div> */}

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              The Future of UX/UI Design is Now: AI-Powered Workflows
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              How I'm using Google's Gemini Pro AI and UX Pilot to create designs and code in under 15 minutes - perfect for proposals and ideation.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">15 mins</div>
                <div className="text-sm text-muted-foreground">Prompt to Design/Code</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">AI + Tools</div>
                <div className="text-sm text-muted-foreground">Gemini Pro & UX Pilot</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10x</div>
                <div className="text-sm text-muted-foreground">Speed Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2025</div>
                <div className="text-sm text-muted-foreground">Current Workflow</div>
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
              <h2 className="text-3xl font-bold text-foreground">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                This case study explores a revolutionary workflow that combines Google's Gemini Pro AI with the UX Pilot design tool to create complete UI designs in minutes. This approach allows designers to focus on creativity and strategy rather than repetitive tasks.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">Workflow</h3>
                  <p className="text-muted-foreground">AI Prompt → UX Pilot → Figma/v0.dev/Lovable → Final Code</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Tools Used</h3>
                  <p className="text-muted-foreground">Gemini (or your favorite), UX Pilot, Roo Code</p>
                </div>
                {/* <div>
                  <h3 className="font-semibold text-foreground">Role</h3>
                  <p className="text-muted-foreground">Designer & Workflow Innovator</p>
                </div> */}
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-3">
                <Sparkles className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto" />
                <p className="text-blue-600 dark:text-blue-400 font-medium">AI-Driven Design</p>
                <p className="text-sm text-muted-foreground">The future of UX/UI is here</p>
              </div>
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
              Traditional design processes are time-consuming and often involve repetitive tasks that can be automated. Designers spend too much time on:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-950/30 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Time Constraints</h3>
                  <p className="text-muted-foreground">
                    Creating detailed project briefs and component lists manually takes hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950/30 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Mental Load</h3>
                  <p className="text-muted-foreground">
                    Keeping track of all UI components and their relationships is cognitively demanding.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950/30 rounded-lg flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Speed vs. Quality</h3>
                  <p className="text-muted-foreground">
                    Balancing rapid prototyping with high-quality design outputs for client proposals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">The AI-Driven Solution</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                By leveraging Google's Gemini Pro AI and UX Pilot, I've created a workflow that reduces design time from days to minutes.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-6">Step 1: AI-Powered Project Brief</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <p className="text-muted-foreground">I use this prompt (two parts) with Google's Gemini Pro AI:</p>
                      <div className="mt-2 p-4 bg-muted rounded-lg">
                        <div className="border-l-4 border-blue-500 pl-4 py-2">
                          <p className="text-md font-mono italic">
                            "1. I'm building a neighborhood event finder website. Ask me questions one by one until we reach a solid project brief that will guide the whole design process.<br /><br />
                            2. Give me the contents of the home page UI, from top to bottom, include only elements, components and building blocks. Do not include styling and UI specs."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 mt-4">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">The AI asks targeted questions to build a comprehensive brief</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">It then generates a detailed list of UI components for the home page</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-6">Step 2: UX Pilot Implementation</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Paste the AI-generated brief into UX Pilot (uxpilot.ai)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">UX Pilot generates the page design based on the brief</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Use the "reference" feature to maintain design consistency across pages</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-6">Step 3: Rapid Implementation</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Export designs to Figma for refinement</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Or use AI-assisted coding tools to refine code</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Vibe code until the design is production-ready (coding skills are reocommended)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Visualization */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center">Workflow Visualization</h2>

            {/* Process Diagram */}
            <div className="bg-card rounded-2xl p-8 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-foreground">Gemini Pro AI (or your favorite)</h3>
                    <p className="text-muted-foreground text-sm">Generate project brief and UI components</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-950/30 rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-950/30 flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-foreground">UX Pilot</h3>
                    <p className="text-muted-foreground text-sm">Create designs from AI-generated brief</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-950/30 rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-950/30 flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-foreground">Design Tools</h3>
                    <p className="text-muted-foreground text-sm">Figma</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-950/30 rounded-full flex items-center justify-center">
                      <Rocket className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-950/30 flex items-center justify-center">
                    <span className="text-orange-600 dark:text-orange-400 font-bold">4</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-foreground">Code Implementation</h3>
                    <p className="text-muted-foreground text-sm">AI-assisted coding and refinement</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-8 h-8 bg-orange-100 dark:bg-orange-950/30 rounded-full flex items-center justify-center">
                      <Brain className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Screenshots */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Process Screenshots</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Visual documentation of the AI-driven design workflow in action
              </p>
            </div>

            {/* Screenshots Row */}
            <div className="flex items-center mt-8" style={{ height: 48 }}>
              <span
                className="mr-4 text-sm font-medium text-muted-foreground"
                style={{ minWidth: 80 }}
              >
                Process
              </span>
              {processShots.map((s, i) => (
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 500,
                    textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                    border: "3px solid #fff",
                    boxSizing: "border-box",
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
              onOpenChange={(open) => setOpenIndex(open ? openIndex : null)}
              item={selectedImage}
            />
          </div>
        </div>
      </section>

      {/* Final Design Showcase */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center">Final Home Page Design</h2>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              The complete home page design generated through the AI-driven workflow
            </p>

            {/* Scrollable container for the final design */}
            <div className="bg-card rounded-2xl p-6 shadow-sm">
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-muted/50 to-muted/30 p-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">Neighborhood Event Finder</h3>
                    <Badge variant="secondary">AI-Generated Design</Badge>
                  </div>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    // Check if user is on mobile device
                    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                    if (isMobile) {
                      // Open image in new tab for mobile users
                      window.open("/img/ai-design/final1.png", "_blank");
                    } else {
                      // Open modal for desktop users
                      setIsFinalDesignModalOpen(true);
                    }
                  }}
                >
                  <img
                    src="/img/ai-design/final1.png"
                    alt="AI-Generated Real Estate Website Home Page Design"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                This complete home page design was generated using the AI-driven workflow described in this case study
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Key Benefits of AI-Driven Design</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                This workflow transforms how designers approach projects, offering unprecedented speed and efficiency
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Speed</h3>
                    <p className="text-muted-foreground">
                      Reduce design time from days to minutes, enabling rapid iteration and client feedback cycles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-950/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Consistency</h3>
                    <p className="text-muted-foreground">
                      AI ensures consistent design language and component usage across all pages and projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Scalability</h3>
                    <p className="text-muted-foreground">
                      Easily generate multiple design variations and entire design systems with minimal effort.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Creativity Enhancement</h3>
                    <p className="text-muted-foreground">
                      Free up mental resources to focus on strategic thinking and innovative solutions rather than repetitive tasks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-950/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Client Value</h3>
                    <p className="text-muted-foreground">
                      Deliver high-quality proposals and concepts faster, improving client satisfaction and winning more projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-950/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 text-teal-600 dark:text-teal-400 font-bold text-lg">%</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Cost Efficiency</h3>
                    <p className="text-muted-foreground">
                      Dramatically reduce labor costs for initial design phases while maintaining high quality output.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Implications */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center">The Future of Design is Collaborative</h2>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              As AI tools become more sophisticated, designers who embrace these workflows will have a significant competitive advantage
            </p>

            <div className="bg-card rounded-2xl p-8 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-950/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Human-AI Collaboration</h3>
                    <p className="text-muted-foreground">
                      The most successful designers will be those who learn to effectively collaborate with AI tools,
                      using them to handle routine tasks while focusing their creativity on strategic and emotional aspects of design.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-950/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 dark:text-green-400 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Continuous Learning</h3>
                    <p className="text-muted-foreground">
                      As AI tools evolve rapidly, designers must commit to continuous learning to stay current with
                      the latest capabilities and best practices for integrating these tools into their workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-950/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Ethical Considerations</h3>
                    <p className="text-muted-foreground">
                      Designers must navigate the ethical implications of AI-generated content, ensuring transparency
                      with clients and users about the role of AI in the design process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center">Personal Reflection</h2>

            <div className="bg-card rounded-2xl p-8 shadow-sm">
              <p className="text-lg text-muted-foreground leading-relaxed">
                This AI-driven workflow has fundamentally changed how I approach design projects. What used to take
                days of research, briefing, and initial concepting can now be accomplished in under 15 minutes.
                This doesn't diminish the value of design; instead, it elevates it by allowing me to focus on
                what truly matters: understanding user needs, crafting meaningful experiences, and solving
                complex problems creatively.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                The key is not to replace human creativity with AI, but to amplify it. By automating the
                repetitive aspects of design work, we free ourselves to tackle more challenging and rewarding
                problems. This workflow is particularly powerful for early-stage ideation, client proposals,
                and rapid prototyping - contexts where speed and iteration are more valuable than pixel-perfect
                execution.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                As AI tools continue to evolve, I'm excited to explore even more sophisticated integrations
                that could further enhance the design process while preserving the human touch that makes
                our work meaningful and impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Try This Workflow Yourself</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of AI-driven design with this proven workflow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Sparkles className="w-4 h-4" />
                Get Gemini Pro Access
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <ExternalLink className="w-4 h-4" />
                Visit UX Pilot
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Final Design Image Modal */}
      <Dialog open={isFinalDesignModalOpen} onOpenChange={setIsFinalDesignModalOpen}>
        <DialogContent className="max-w-none w-screen h-screen p-0 bg-black flex flex-col">
          <div className="absolute top-4 right-4 z-50">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsFinalDesignModalOpen(false)}
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          <div className="flex-1 overflow-auto p-4">
            <img
              src="/img/ai-design/final1.png"
              alt="AI-Generated Real Estate Website Home Page Design"
              className="w-auto h-auto max-w-none mx-auto"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AIDrivenDesign;