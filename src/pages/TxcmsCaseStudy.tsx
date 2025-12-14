
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, ExternalLink, Newspaper, Users, Monitor, Lightbulb, Clock, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import CaseStudyNav from "@/components/CaseStudyNav";
import ScreenshotsRow from "@/components/ScreenshotsRow";
import { GalleryImageDialog } from "./GalleryImageDialog";
import { useState } from "react";

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
    imageUrl: '/img/tx/process3.png',
    title: "Process",
    description: "User Journey Mapping and Personas. Interviewed dozens of journalists to understand their workflows and needs.",
    category: "UI",
    year: 2023,
    tags: ["UX", "Interviews", "User Journey Mapping"],
  },
  {
    imageUrl: '/img/tx/process1.png',
    title: "Process",
    description: "A few of the many hifi wireframes I created to explore different approaches to the CMS design.",
    category: "UI",
    year: 2023,
    tags: ["Sketch", "Wireframes"],
  },
  {
    imageUrl: '/img/tx/process2.png',
    title: "Process",
    description: "Each step of a user journey was carefully mapped out, from content creation to publishing and sharing.",
    category: "UI",
    year: 2023,
    tags: ["Sketch", "Wireframes"],
  },
];

const uiScreens: Screenshot[] = [
  {
    imageUrl: '/img/tx/final1.png',
    title: "The final Story Editor UI",
    description: "Designed for mobile-first content creation with a focus on simplicity and efficiency. It supports a command-based rich text editor, drag & drop, and a real-time mobile-preview. Remember, this was 2016!",
    category: "UX/UI",
    year: 2016,
    tags: ["Mobile-First", "Command Editor"],
  },
  {
    imageUrl: '/img/tx/final3.png',
    title: "Story Placement System",
    description: "Drag & drop story placement system allows journalists to easily select where their articles will appear across different news portals and categories, ensuring content is optimized for each audience.",
    category: "UX/UI",
    year: 2016,
    tags: ["Content Management", "Multi-Portal"],
  },
  {
    imageUrl: '/img/tx/final2.png',
    title: "Video Management",
    description: "Each video can be tagged with multiple synonyms, allowing for flexible search and categorization across different news portals. This system ensures that content is easily discoverable and adaptable to each portal's unique needs.",
    category: "UX/UI",
    year: 2016,
    tags: ["Video Management", "Smart Tagging"],
  },
];

const TxcmsCaseStudy = () => {

  const [openUiScreenIndex, setOpenUiScreenIndex] = useState<number | null>(null);

  const selectedUiScreen = openUiScreenIndex !== null ? uiScreens[openUiScreenIndex] : null;

  return (
    <div className="pt-8 pb-16 bg-background">
      <CaseStudyNav />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {/* <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link> */}

          <div className="space-y-6">
            {/* <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">CMS Design</Badge>
              <Badge variant="secondary">UX/UI Design</Badge>
              <Badge variant="secondary">Publishing Workflows</Badge>
              <Badge variant="secondary">Mobile-First</Badge>
            </div> */}

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              TX Group CMS Redesign Case Study
            </h1>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="gap-1">
                <Clock className="w-3 h-3" />
                Senior UX/UI Designer
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Target className="w-3 h-3" />
                Sketch, Photoshop
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Users className="w-3 h-3" />
                Cross-functional Team
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Zap className="w-3 h-3" />
                Workflow Automation
              </Badge>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Leading the redesign of TX Group's content management system to improve efficiency, reduce errors,
              and support scalable newsroom workflows for journalists across multiple Swiss media brands.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">9 months</div>
                <div className="text-sm text-muted-foreground">Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">200%</div>
                <div className="text-sm text-muted-foreground">Faster workflows</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">90%</div>
                <div className="text-sm text-muted-foreground">Fewer image errors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Journalists interviewed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context & Problem */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Context & Problem</h2>
              <p className="text-muted-foreground leading-relaxed">
                TX Group managed multiple media brands across Switzerland, Germany and Netherlands, with a CMS that journalists found slow,
                error-prone, and difficult to scale. Pain points included:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Editorial tasks took twice as long as necessary</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Image handling errors occurred in 90% of articles</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Mobile publishing and multi-site article inheritance were cumbersome</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed pt-4">
                The challenge: redesign the CMS to improve efficiency, reduce errors, and support scalable newsroom
                workflows—all while keeping the system intuitive for editors of all experience levels.
              </p>
              <div className="space-y-4 pt-4">
                <div>
                  <h3 className="font-semibold text-foreground">Client</h3>
                  <p className="text-muted-foreground">TX Group</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Timeline</h3>
                  <p className="text-muted-foreground">Jul 2013 – Sep 2017</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Role</h3>
                  <p className="text-muted-foreground">Senior UX/UI Designer</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Team</h3>
                  <p className="text-muted-foreground">Cross-functional with Product, Engineering, and Editorial stakeholders</p>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-muted/30 to-indigo-100 dark:from-muted/20 dark:to-indigo-950/30 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-2">
                <Newspaper className="w-16 h-16 text-blue-600 mx-auto" />
                <p className="text-blue-600 font-medium">TX Group CMS</p>
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
              With millions of users reading articles on TX Group's websites and over 90% using mobile devices,
              we needed to create a CMS that prioritized mobile-first content creation while serving multiple news portals.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Mobile-First Creation</h3>
                  <p className="text-muted-foreground">
                    90% of readers were on mobile, but existing tools didn't allow journalists to optimize content for mobile-first viewing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Content Inheritance</h3>
                  <p className="text-muted-foreground">
                    Multiple news portals needed to share and adapt content while maintaining their unique editorial voice and branding.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Adaptive Image Display</h3>
                  <p className="text-muted-foreground">
                    Different news portals required different image formats (16:9, 3:2, square) without losing important visual content.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Insights */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Research & Insights</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I led user-centered research to understand the editorial workflows and pain points across six news brands.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-6">User Research Activities</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">30+</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Journalist Interviews</h4>
                    <p className="text-muted-foreground text-sm">
                      Conducted in-depth interviews with journalists from different news brands and experience levels.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold">6</span>
                    </div>
                    <h4 className="font-semibold text-foreground">News Brands Analyzed</h4>
                    <p className="text-muted-foreground text-sm">
                      Analyzed editorial workflows across different news portals and publication types.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold">∞</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Usability Testing</h4>
                    <p className="text-muted-foreground text-sm">
                      Continuous usability testing throughout the design process to validate solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Insights Discovered</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Editors needed mobile-first workflows to publish quickly from anywhere</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Multi-site publishing required content inheritance with minimal manual changes</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Automated image cropping and responsive previews would reduce manual errors significantly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Exploration */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Design Exploration</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I focused on creating intuitive workflows and innovative solutions that would set this CMS apart from existing systems.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-muted/30 to-indigo-50 dark:from-muted/20 dark:to-indigo-950/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Workflow Simplification</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Introduced mobile-first article creation with clear, step-by-step publishing flows that made content creation
                  intuitive for journalists of all experience levels.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Mobile-first article creation with live preview</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Enabled inheritance across news sites for content reuse</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Step-by-step publishing flows with clear visual guidance</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Automation & Efficiency</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Designed automated systems to reduce manual errors and improve content creation speed while maintaining quality.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Auto-cropping for images in multiple formats (16:9, 3:2, square)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Reusable component library in Sketch for consistency</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Automated workflow scripts to reduce repetitive tasks</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Visual Design & Interaction</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Created a modern, clean interface that supported both novice and expert editors with thoughtful interactions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Modern, clean interface supporting all experience levels</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Motion cues and micro-interactions to guide users</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Accessibility and readability across all devices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Innovative Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I designed several features that set this CMS apart from any other system available at the time.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-muted/30 to-indigo-50 dark:from-muted/20 dark:to-indigo-950/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">The "Importance Triangle" Innovation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  While having a shower one day, it came to me: The "importance triangle" - a unique solution for adaptive image cropping.
                  Three hexagonal markers allow journalists to indicate which parts of an image are most important,
                  ensuring smart cropping across different portal layouts (16:9, 3:2, square formats).
                </p>
                <div className="bg-card rounded-lg p-6 mt-4">
                  <div className="flex items-center justify-center space-x-4">
                    <img src="/img/tx/importance-triangle.png" alt="Importance Triangle" className="w-full object-contain" />
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-2">Priority markers ensure intelligent cropping</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Command-Based Rich Text Editor (before Notion was a thing)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Inspired by what I have seen at a React Conference in Paris, I designed a command system where journalists could type commands like
                  "/new poll" or "/add poll" to insert content without leaving their keyboard - revolutionary for 2016.
                </p>
                <div className="bg-card rounded-lg p-4 font-mono text-sm">
                  <div className="text-muted-foreground">Type: <span className="text-blue-600">/new</span> → Creates new poll, map, etc.</div>
                  <div className="text-muted-foreground">Type: <span className="text-green-600">/add </span> → Insert existing image, poll, etc.</div>
                  <div className="text-muted-foreground">Type: <span className="text-purple-600">/embed </span> → Embed video content, iframe, etc.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation & Collaboration */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Implementation & Collaboration</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Worked closely with product owner and engineers to align UX decisions with business goals while maintaining rapid iteration cycles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-6">Collaboration Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-muted-foreground">Maintained rapid iteration cycles with journalists</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-muted-foreground">Validated designs with stakeholders at each stage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-muted-foreground">Automated repetitive editorial workflows using scripts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-muted-foreground">Built reusable Sketch component systems</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-6">Cross-functional Achievements</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Product-UX alignment</span>
                    <span className="font-bold text-green-600">✓ Achieved</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Engineering collaboration</span>
                    <span className="font-bold text-green-600">✓ Seamless</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Editorial stakeholder buy-in</span>
                    <span className="font-bold text-green-600">✓ Complete</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Development efficiency</span>
                    <span className="font-bold text-green-600">✓ 95% reusable components</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Overlapping 16:9 thumbnails row */}
            <ScreenshotsRow screenshots={processShots} />
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Results & Impact</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The redesigned CMS delivered significant improvements in efficiency, error reduction, and user satisfaction across all media outlets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Measurable Outcomes</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <span className="text-muted-foreground font-medium">Editorial workflows</span>
                    <span className="font-bold text-green-600">200% faster</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                    <span className="text-muted-foreground font-medium">Image-related errors</span>
                    <span className="font-bold text-blue-600">90% reduction</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                    <span className="text-muted-foreground font-medium">Media outlets adoption</span>
                    <span className="font-bold text-purple-600">6 outlets</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                    <span className="text-muted-foreground font-medium">Client satisfaction</span>
                    <span className="font-bold text-orange-600">98% positive</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Adoption across 6 media outlets supporting 3 countries</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">95% reusable Sketch component library reduced dev time</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Automated workflows eliminated repetitive tasks</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Mobile-first design supported 90%+ mobile readership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI Screens Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
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

      {/* Reflection & Learnings */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Reflection & Learnings</h2>
            <div className="bg-muted/30 rounded-2xl p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                This project reinforced the importance of user-centered design in complex enterprise systems.
                I gained expertise in cross-discipline collaboration, balancing visual polish, usability, and technical constraints.
                Most importantly, I learned how automation and workflow optimization can amplify impact beyond interface design.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Key Principles Reinforced</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">User-centered design drives enterprise system success</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Cross-functional collaboration enables innovative solutions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Balancing UX polish with technical feasibility is key</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Strategic Insights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Automation can amplify design impact beyond UI</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Workflow optimization drives measurable business results</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Innovation often emerges from constraint-solving</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* CTA Section */}
      {/* <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Interested in the Design Process?</h2>
            <p className="text-xl text-gray-600">
              I'd be happy to share more insights about innovating in the news and publishing technology space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/home">
                <Button size="lg" className="gap-2">
                  View More Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <ExternalLink className="w-4 h-4" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default TxcmsCaseStudy;
