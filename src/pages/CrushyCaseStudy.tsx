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
    description: "Conducted user research and interviews to surface common frustrations and preferences among social networking app users.",
    category: "Research",
    year: 2024,
    tags: ["User Interviews", "Research", "Personas"],
  },
  {
    imageUrl: '/img/crushy/process2.png',
    title: "Product Concepts",
    description: "Explored product concepts that let people present different intentions and control how they discover and are discovered.",
    category: "Design",
    year: 2024,
    tags: ["Concept Design", "User Journey", "Exploration"],
  },
  {
    imageUrl: '/img/crushy/process3.png',
    title: "Technical Architecture",
    description: "Mapped out the technical architecture including React Native, Supabase, Clerk auth, and real-time messaging systems.",
    category: "Development",
    year: 2024,
    tags: ["Architecture", "React Native", "Database Design"],
  },
];

const uiScreens: Screenshot[] = [
  {
    imageUrl: '/img/crushy/surf-mode.png',
    title: "Surf Mode Interface",
    description: "Image-forward presentation designed for casual interactions and quick discovery.",
    category: "UI/UX",
    year: 2024,
    tags: ["Mobile UI", "Swipe Interface", "Visual Design"],
  },
  {
    imageUrl: '/img/crushy/dive-mode.png',
    title: "Dive Mode Experience",
    description: "Profile-first presentation that emphasizes preferences, prompts, and conversation starters.",
    category: "UI/UX",
    year: 2024,
    tags: ["Profile Design", "Privacy", "Discovery"],
  },
  {
    imageUrl: '/img/crushy/filter-system.png',
    title: "Filter System",
    description: "A robust set of filters focused on lifestyle, interests and intent, with some advanced features available via premium tiers.",
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
              Building Crushy: A social networking app Focused on Intent & Transparency
            </h1>
 
            <p className="text-xl text-gray-600 leading-relaxed">
              A React Native mobile app designed to give users clearer control over how they present themselves and discover others — focused on intent, privacy, and straightforward matching.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1000+ hours</div>
                <div className="text-sm text-gray-600">Prototype to App</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">Presentation Modes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">30+</div>
                <div className="text-sm text-gray-600">Extensive Filters</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Beta Users</div>
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
                As a solo developer I built Crushy as a people-first social app — No algorithms, no AI bots, no BS. The goal was simple: give people straightforward controls to express intent, discover others, and form real connections without the endless swiping economy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Key principles: phone-number signups and strict anti-fraud measures, free search and powerful filters for discovery, affordable premium perks, and a local‑first rollout from Vancouver focused on building community.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Role</h3>
                  <p className="text-gray-600">Solo Developer & Designer</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Platform</h3>
                  <p className="text-gray-600">React Native (iOS & Android)</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-video bg-gradient-to-br from-pink-50 to-purple-100 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-3 max-w-md">
                <Heart className="w-16 h-16 text-pink-600 mx-auto" />
                <p className="text-pink-600 font-medium">Crushy App</p>
                <p className="text-sm text-gray-600">Founded by Pascal in Vancouver — a mission-driven, people-first approach to help newcomers and locals find friends, dates, and community without the usual paywalls.</p>
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
              Creating a social networking app that serves all kinds of relationships seekers 
              without compromising either experience required innovative thinking and technical excellence.
              Think moms finding other moms, newcomers finding friends, and people looking for serious relationships.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Different Intentions</h3>
                  <p className="text-gray-600">
                    Users want clearer ways to signal intent — from casual meetups to friendships and serious relationships. The product focuses on helping people present themselves and discover others in ways that match those intentions.
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
                    and coherent user flows as a solo developer.
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
                of different types of social networking app users. 
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Discovery Phase</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">146</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">User Research</h4>
                    <p className="text-gray-600 text-sm">
                      Conducted interviews and feedback sessions to understand frustrations and preferences.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold">4</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">User Personas</h4>
                    <p className="text-gray-600 text-sm">
                      Synthesized insights into personas to guide experience decisions.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold">10</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Competitor Analysis</h4>
                    <p className="text-gray-600 text-sm">
                      Reviewed existing apps to identify gaps and practical opportunities.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Supporting Different Intentions</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Instead of prescribing a single way to meet people, Crushy provides presentation options and gentle affordances so users can express intent more clearly. These presentation modes are product choices to help people discover compatible interactions. Just one of the features that are fairly unique.
                </p>
                <div className="bg-white rounded-lg p-6 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="font-semibold text-blue-600 min-w-[100px]">Surf Mode:</span>
                      <span className="text-gray-700">An image-forward presentation for casual discovery.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-semibold text-purple-600 min-w-[100px]">Dive Mode:</span>
                      <span className="text-gray-700">A profile-led presentation focused on preferences and conversation starters.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-semibold text-purple-600 min-w-[100px]">Crushr Mode:</span>
                      <span className="text-gray-700">For men only. Like Grindr, but way more affordable. Allows sharing of picture album.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Human-centered matching</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Matching in Crushy is guided by user-controlled preferences and free filters. The focus is on transparency and user agency, allowing people to discover others based on shared interests and intentions rather than algorithms.
                </p>
                <div className="bg-white rounded-lg p-4 text-sm">
                  <div className="text-gray-700">Design choices emphasize user control, clarity, and privacy over hidden scoring formulas.</div>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Tech-Stack</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">React Native with Expo for cross-platform development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Supabase for real-time chat and user data</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Clerk integration for authentication</span>
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
                    <span className="text-gray-700">Free search + Filters</span>
                    <span className="font-bold text-green-600">✓ Delivered</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">3 Modes</span>
                    <span className="font-bold text-green-600">✓ Delivered</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Real-time messaging</span>
                    <span className="font-bold text-green-600">✓ Delivered</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">No BS and money-grab</span>
                    <span className="font-bold text-green-600">✓ Delivered</span>
                  </div>                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Affordable</span>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Beta Testing</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Closed beta with early users</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Tested onboarding flows and presentation options</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Iterative UI/UX improvements based on feedback</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Performance optimization for smooth interactions</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Early Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Early retention</span>
                    <span className="font-bold text-green-600 text-right">Positive initial retention in early tests</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Early feedback</span>
                    <span className="font-bold text-green-600 text-right">Users appreciate transparency</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Three modes</span>
                    <span className="font-bold text-green-600 text-right">People like how it works</span>
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
                Building Crushy as a solo developer confirmed that better product decisions come from listening to users and iterating. The project reinforced the value of clear intent, transparent controls, and practical trade-offs — from privacy-preserving defaults to pragmatic engineering choices for reliable mobile performance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">What Worked Exceptionally Well</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">People-first discovery and free search resonated with users</span>
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
              Crushy demonstrates a practical, people-first approach to discovery and connection. Future work focuses on safer discovery, clearer signals, and incremental improvements driven by community feedback and transparency.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold text-gray-900">Market Innovation</h4>
                  <p className="text-gray-600 text-sm">
                    A transparent, non-algorithmic approach and free search model that prioritizes real connections over engagement-maximizing mechanics.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold text-gray-900">Technical Achievement</h4>
                  <p className="text-gray-600 text-sm">
                    Built phone-based sign-up flows, robust anti-fraud checks, reliable real-time messaging, and scalable mobile architecture as a solo developer.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold text-gray-900">User Satisfaction</h4>
                  <p className="text-gray-600 text-sm">
                    Positive early feedback and community engagement validate the focus on affordability, safety, and control.
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