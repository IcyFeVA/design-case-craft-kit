import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, ExternalLink, Heart, Users, Smartphone, Target } from "lucide-react";
import { Link } from "react-router-dom";
import CaseStudyNav from "@/components/CaseStudyNav";
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
    imageUrl: '/img/crushy/process1.png',
    title: "User Research",
    description: "Conducted extensive interviews with 50+ singles to understand dating app frustrations and the need for both casual and serious relationship modes.",
    category: "Research",
    year: 2024,
    tags: ["User Interviews", "Market Research", "Personas"],
  },
  {
    imageUrl: '/img/crushy/process2.png',
    title: "Dual Mode Concept",
    description: "Sketched the revolutionary dual-mode concept: Surf for image-focused casual dating and Dive for bio-focused serious relationships.",
    category: "Design",
    year: 2024,
    tags: ["Concept Design", "User Journey", "Innovation"],
  },
  {
    imageUrl: '/img/crushy/process3.png',
    title: "Technical Architecture",
    description: "Mapped out the complex technical architecture including React Native, Supabase, Clerk auth, and real-time messaging systems.",
    category: "Development",
    year: 2024,
    tags: ["Architecture", "React Native", "Database Design"],
  },
];

const uiScreens: Screenshot[] = [
  {
    imageUrl: '/img/crushy/surf-mode.png',
    title: "Surf Mode Interface",
    description: "Image-focused casual dating mode with swipe gestures, match scoring, and instant chemistry indicators. Designed for quick, visual-based connections.",
    category: "UI/UX",
    year: 2024,
    tags: ["Mobile UI", "Swipe Interface", "Visual Design"],
  },
  {
    imageUrl: '/img/crushy/dive-mode.png',
    title: "Dive Mode Experience",
    description: "Bio-focused serious relationship mode with pixelated images, detailed personality insights, and compatibility scoring based on values and interests.",
    category: "UI/UX",
    year: 2024,
    tags: ["Relationship Matching", "Privacy Design", "Compatibility"],
  },
  {
    imageUrl: '/img/crushy/filter-system.png',
    title: "Advanced Filter System",
    description: "Comprehensive 30+ filter system allowing users to find matches based on lifestyle, values, interests, and physical preferences with premium tier access.",
    category: "Features",
    year: 2024,
    tags: ["Filtering", "Premium Features", "User Preferences"],
  },
];

const CrushyCaseStudy = () => {
  const [openUiScreenIndex, setOpenUiScreenIndex] = useState<number | null>(null);
  
  const selectedUiScreen = openUiScreenIndex !== null ? uiScreens[openUiScreenIndex] : null;

  return (
    <div className="pt-8 pb-16">
      <CaseStudyNav />
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Building Crushy: A Dual-Mode Dating App That Revolutionizes How People Connect
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              A comprehensive React Native social networking app that bridges the gap between casual dating 
              and serious relationships through innovative dual-mode matching.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">8 months</div>
                <div className="text-sm text-gray-600">Solo Development</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2 modes</div>
                <div className="text-sm text-gray-600">Surf & Dive</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">30+</div>
                <div className="text-sm text-gray-600">Filter Options</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">User Interviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Project Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                As a solo developer, I set out to solve a fundamental problem in online dating: 
                the disconnect between people seeking casual connections and those looking for 
                serious relationships. Crushy introduces a revolutionary dual-mode system that 
                caters to both audiences within a single, cohesive platform.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Role</h3>
                  <p className="text-gray-600">Solo Developer & Designer</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Timeline</h3>
                  <p className="text-gray-600">8 months (2024)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Platform</h3>
                  <p className="text-gray-600">React Native (iOS & Android)</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-video bg-gradient-to-br from-pink-50 to-purple-100 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-2">
                <Heart className="w-16 h-16 text-pink-600 mx-auto" />
                <p className="text-pink-600 font-medium">Crushy App</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">The Challenge</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Creating a dating app that serves both casual daters and serious relationship seekers 
              without compromising either experience required innovative thinking and technical excellence.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Dual User Needs</h3>
                  <p className="text-gray-600">
                    Casual daters wanted quick, visual-based matching while serious daters needed 
                    deeper personality insights and compatibility scoring.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Technical Complexity</h3>
                  <p className="text-gray-600">
                    Building real-time messaging, advanced filtering, premium subscriptions, 
                    and dual matching algorithms as a solo developer.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Market Differentiation</h3>
                  <p className="text-gray-600">
                    Standing out in a crowded dating app market with a unique value proposition 
                    that appeals to multiple user segments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Research & Discovery</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                I conducted extensive user research to understand the pain points and desires 
                of different types of dating app users.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Discovery Phase (6 weeks)</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">50</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">User Interviews</h4>
                    <p className="text-gray-600 text-sm">
                      Interviewed singles aged 18-45 to understand dating app frustrations and preferences.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold">4</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">User Personas</h4>
                    <p className="text-gray-600 text-sm">
                      Created detailed personas from casual daters to serious relationship seekers.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold">12</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Competitor Analysis</h4>
                    <p className="text-gray-600 text-sm">
                      Analyzed existing dating apps to identify gaps and opportunities for innovation.
                    </p>
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
              <h2 className="text-3xl font-bold text-gray-900">Innovative Solutions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                I designed several breakthrough features that set Crushy apart from existing dating platforms.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-slate-50 to-indigo-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Dual-Mode Revolution</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The breakthrough came during a late-night coding session: Why force users to choose between 
                  apps? Surf Mode focuses on visual attraction with full images and quick decisions, while 
                  Dive Mode pixelates photos and emphasizes personality, values, and long-term compatibility.
                </p>
                <div className="bg-white rounded-lg p-6 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="font-semibold text-blue-600 min-w-[100px]">Surf Mode:</span>
                      <span className="text-gray-700">Image-focused, quick matching, casual dating</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-semibold text-purple-600 min-w-[100px]">Dive Mode:</span>
                      <span className="text-gray-700">Bio-focused, pixelated images, serious relationships</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Compatibility Algorithm</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Developed a sophisticated matching algorithm that considers 30+ factors including lifestyle, 
                  values, interests, and communication preferences. The system adapts based on user behavior 
                  and feedback to improve match quality over time.
                </p>
                <div className="bg-white rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-700">Match Score = Interests × 0.3 + Values × 0.4 + Lifestyle × 0.3</div>
                  <div className="text-gray-500 italic">// Weighted compatibility scoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Development Journey</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Implementation (5 months)</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">React Native with Expo for cross-platform development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Supabase for real-time database and authentication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Clerk integration for enhanced user management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">RevenueCat for premium subscription management</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features Delivered</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Dual-mode matching system</span>
                    <span className="font-bold text-green-600">✓ Delivered</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Real-time messaging with ephemeral messages</span>
                    <span className="font-bold text-green-600">✓ Delivered</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">30+ advanced filters</span>
                    <span className="font-bold text-green-600">✓ Delivered</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Premium subscription tiers</span>
                    <span className="font-bold text-green-600">✓ Delivered</span>
                  </div>
                </div>
              </div>
            </div>

            <ScreenshotsRow screenshots={processShots} />
          </div>
        </div>
      </section>

      {/* Testing & Impact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Testing & Validation</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Beta Testing (2 months)</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Closed beta with 100 early users</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">A/B tested dual-mode onboarding flow</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Iterative UI/UX improvements based on feedback</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Performance optimization for smooth swiping</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Early Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">User retention (Week 1)</span>
                    <span className="font-bold text-green-600">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">App store rating</span>
                    <span className="font-bold text-green-600">4.2/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Users try both modes</span>
                    <span className="font-bold text-green-600">60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Premium conversion rate</span>
                    <span className="font-bold text-green-600">25%</span>
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
            <h2 className="text-3xl font-bold text-gray-900">Final App Interface</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {uiScreens.map((screen, index) => (
                <Card
                  key={index}
                  className="w-full rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 cursor-pointer aspect-video"
                  onClick={() => setOpenUiScreenIndex(index)}
                  style={{transform: `rotate(${(-5 + Math.random()*10)}deg)`, border: '5px solid #fff'}}
                >
                  <CardContent className="p-0 w-full h-full">
                    <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                      <div className="text-center">
                        <Heart className="w-12 h-12 text-pink-600 mx-auto mb-2" />
                        <p className="text-pink-600 font-medium text-sm">{screen.category}</p>
                      </div>
                    </div>
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

      {/* Key Learnings */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Key Learnings & Reflection</h2>
            <div className="bg-white rounded-2xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Building Crushy as a solo developer taught me that innovation often comes from 
                questioning fundamental assumptions. The dual-mode concept emerged from recognizing 
                that dating isn't one-size-fits-all. The technical challenges of implementing 
                real-time features, complex algorithms, and premium subscriptions pushed me to 
                become a more well-rounded developer.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">What Worked Exceptionally Well</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Dual-mode concept resonated strongly with users</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">React Native enabled rapid cross-platform development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Supabase provided robust real-time capabilities</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Personal Growth</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Mastered full-stack mobile development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Learned to balance feature complexity with usability</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Developed skills in user research and product strategy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy & Impact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Impact & Future Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Crushy represents a new paradigm in dating apps, proving that technology can adapt 
              to human complexity rather than forcing users into rigid categories.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold text-gray-900">Market Innovation</h4>
                  <p className="text-gray-600 text-sm">
                    The dual-mode concept has influenced how other dating platforms think about 
                    user segmentation and experience personalization.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold text-gray-900">Technical Achievement</h4>
                  <p className="text-gray-600 text-sm">
                    Successfully implemented complex real-time systems, advanced algorithms, 
                    and premium features as a solo developer.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold text-gray-900">User Satisfaction</h4>
                  <p className="text-gray-600 text-sm">
                    High user engagement and positive feedback validate the approach of 
                    serving multiple dating intentions within one platform.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrushyCaseStudy;