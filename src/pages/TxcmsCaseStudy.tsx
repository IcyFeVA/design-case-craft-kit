
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, ExternalLink, Newspaper, Users, Monitor, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import CaseStudyNav from "@/components/CaseStudyNav";

const TxcmsCaseStudy = () => {
  return (
   <div className="pt-8 pb-16">
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

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Designing a Unified CMS for Switzerland's Leading News Publishers
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              A comprehensive content management system that revolutionized how dozens of Swiss news 
              portals create, share, and optimize content for millions of mobile readers.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">9 months</div>
                <div className="text-sm text-gray-600">Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">90%</div>
                <div className="text-sm text-gray-600">Mobile readership</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">News portals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Journalists interviewed</div>
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
                TX Group, owning most of Switzerland's newspapers and their websites, needed a unified 
                CMS that could serve all their journalists while allowing content sharing and inheritance 
                between different news portals. The challenge was creating a system with unique features 
                no other CMS offered.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Client</h3>
                  <p className="text-gray-600">TX Group</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Timeline</h3>
                  <p className="text-gray-600">9 months (2016)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Role</h3>
                  <p className="text-gray-600">Lead UX/UI Designer</p>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-slate-50 to-indigo-100 rounded-2xl flex items-center justify-center">
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
            <h2 className="text-3xl font-bold text-gray-900">The Challenge</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              With millions of users reading articles on TX Group's websites and over 90% using mobile devices, 
              we needed to create a CMS that prioritized mobile-first content creation while serving multiple news portals.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Mobile-First Creation</h3>
                  <p className="text-gray-600">
                    90% of readers were on mobile, but existing tools didn't allow journalists to optimize content for mobile-first viewing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Content Inheritance</h3>
                  <p className="text-gray-600">
                    Multiple news portals needed to share and adapt content while maintaining their unique editorial voice and branding.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Adaptive Image Display</h3>
                  <p className="text-gray-600">
                    Different news portals required different image formats (16:9, 3:2, square) without losing important visual content.
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
                Working closely with journalists and developers, I conducted extensive research to understand 
                the unique needs of news content creation and distribution.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Discovery Phase (3 weeks)</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">25</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Journalist Interviews</h4>
                    <p className="text-gray-600 text-sm">
                      Interviewed journalists from different news portals to understand their daily workflows and pain points.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold">5</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Persona Development</h4>
                    <p className="text-gray-600 text-sm">
                      Created detailed personas ranging from tech-savvy digital journalists to traditional print writers.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold">10</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Workflow Analysis</h4>
                    <p className="text-gray-600 text-sm">
                      Analyzed existing content creation and publishing workflows across different news portals.
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
                I designed several features that set this CMS apart from any other system available at the time.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-slate-50 to-indigo-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The "Importance Triangle" Innovation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While having a shower one day, it came to me: The "importance triangle" - a unique solution for adaptive image cropping. 
                  Three hexagonal markers allow journalists to indicate which parts of an image are most important, 
                  ensuring smart cropping across different portal layouts (16:9, 3:2, square formats).
                </p>
                <div className="bg-white rounded-lg p-6 mt-4">
                  <div className="flex items-center justify-center space-x-4">
                    <img src="/img/tx/importance-triangle.png" alt="Importance Triangle" className="w-full object-contain" />
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-2">Priority markers ensure intelligent cropping</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Command-Based Rich Text Editor (before Notion was a thing)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Inspired by what I have seen at a React Conference in Paris, I designed a command system where journalists could type commands like 
                  "/new poll" or "/add poll" to insert content without leaving their keyboard - revolutionary for 2016.
                </p>
                <div className="bg-white rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-600">Type: <span className="text-blue-600">/new</span> → Creates new poll, map, etc.</div>
                  <div className="text-gray-600">Type: <span className="text-green-600">/add </span> → Insert existing image, poll, etc.</div>
                  <div className="text-gray-600">Type: <span className="text-purple-600">/embed </span> → Embed video content, iframe, etc.</div>
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
              <h2 className="text-3xl font-bold text-gray-900">Design Process</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Design Phase (4 months)</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Mobile-first live preview system design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Command-based rich text editor wireframes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Content inheritance workflow mapping</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Multi-language tagging system design</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features Delivered</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Article placement system</span>
                    <span className="font-bold text-green-600">✓ Delivered</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Gamification system</span>
                    <span className="font-bold text-green-600">✓ Delivered</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Smart tagging with synonyms</span>
                    <span className="font-bold text-green-600">✓ Delivered</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Content inheritance system</span>
                    <span className="font-bold text-green-600">✓ Delivered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Impact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Testing & Impact</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Validation Process (2 months)</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Iterative prototype testing with journalists</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Command system usability validation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Importance triangle effectiveness testing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Cross-portal content sharing workflows</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Projected Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Content creation speed</span>
                    <span className="font-bold text-green-600">+40% faster</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Mobile optimization</span>
                    <span className="font-bold text-green-600">100% coverage</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Content reuse efficiency</span>
                    <span className="font-bold text-green-600">+60% increase</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Journalist satisfaction</span>
                    <span className="font-bold text-green-600">Highly positive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Key Learnings & Reflection</h2>
            <div className="bg-slate-50 rounded-2xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                This project taught me that the best innovations often come from unexpected moments of insight. 
                The importance triangle concept, born during a shower, became one of the system's most praised features. 
                Working directly with developers and journalists showed me the value of cross-functional collaboration 
                in creating truly user-centered products.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">What Worked Exceptionally Well</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Command-based interface reduced cognitive load for power users</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Importance triangle solved a complex technical problem elegantly</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Close collaboration with developers and SCRUM enabled rapid prototyping</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Personal Growth</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Learned to balance innovation with practical implementation constraints</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Developed empathy for both technical and editorial user needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Gained confidence in proposing unconventional solutions</span>
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
            <h2 className="text-3xl font-bold text-gray-900">Legacy & Long-term Impact</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Although I left the project before completion, the feedback I received indicated that journalists 
              loved the system. The unique features we designed - from the importance triangle to the command-based 
              editor - set new standards for CMS usability in the news industry.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold text-gray-900">Industry Recognition</h4>
                  <p className="text-gray-600 text-sm">
                    The importance triangle concept has been referenced in other CMS implementations across the industry.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold text-gray-900">User Adoption</h4>
                  <p className="text-gray-600 text-sm">
                    High satisfaction rates among journalists using the system for daily content creation and publication.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold text-gray-900">Technical Innovation</h4>
                  <p className="text-gray-600 text-sm">
                    Command-based editing and mobile-first preview became models for modern CMS design.
                  </p>
                </CardContent>
              </Card>
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
              <Link to="/">
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
