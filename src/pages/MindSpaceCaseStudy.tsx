
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const MindSpaceCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
            <div className="font-semibold text-lg">Case Study</div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Hero Section */}
          <section className="mb-20">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                MindSpace
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
                Mental Health Companion for College Students
              </p>
            </div>
            
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                Bridging the gap between crisis and care through accessible, peer-supported mental health tools
              </p>
            </div>

            {/* Hero Image Placeholder */}
            <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl mb-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-200 rounded-lg mx-auto mb-4"></div>
                <p className="text-blue-600 font-medium">Hero Image</p>
                <p className="text-sm text-blue-400">MindSpace App Overview</p>
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Role</h3>
                <p className="text-gray-900 font-medium">Solo UX/UI Designer</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Timeline</h3>
                <p className="text-gray-900 font-medium">6 Weeks</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Type</h3>
                <p className="text-gray-900 font-medium">Personal Project</p>
              </div>
            </div>
          </section>

          {/* Challenge Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-2xl">🎯</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    College students face unprecedented mental health challenges, with 85% reporting feeling overwhelmed and 45% experiencing higher-than-average stress levels. The problem:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>Existing mental health apps feel clinical and disconnected from student life</li>
                    <li>Crisis support often requires multiple steps, creating barriers during vulnerable moments</li>
                    <li>Students value peer support but lack accessible platforms for connection</li>
                    <li>Traditional therapy approaches don't fit student schedules and budgets</li>
                  </ul>
                  <div className="bg-blue-50 p-6 rounded-xl mt-6">
                    <p className="text-blue-800 font-semibold text-lg mb-2">Design Question</p>
                    <p className="text-blue-700">How might we design a mental health app that provides immediate, accessible support while building sustainable coping habits for college students?</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Research Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-2xl">🔍</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">User Research</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    I conducted comprehensive research with 15 college students aged 18-24 to understand their mental health journey and current coping mechanisms.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-green-800 mb-2">15 Interviews</h4>
                      <p className="text-green-700 text-sm">Semi-structured conversations about mental health challenges</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-purple-800 mb-2">50 Surveys</h4>
                      <p className="text-purple-700 text-sm">Quantitative data on current coping mechanisms</p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-orange-800 mb-2">8 App Analysis</h4>
                      <p className="text-orange-700 text-sm">Competitive analysis of existing mental health apps</p>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-3">Key Research Insights</h4>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li><strong>Crisis moments need immediate access</strong> - Students couldn't navigate complex interfaces during panic attacks</li>
                    <li><strong>Peer support trumps professional therapy</strong> for daily stress management</li>
                    <li><strong>Time constraints matter</strong> - 20-minute meditation sessions weren't realistic</li>
                    <li><strong>Anonymity is crucial</strong> - Fear of judgment prevented help-seeking behavior</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Design Process Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-2xl">⚡</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Design Process</h2>
                <div className="prose prose-lg max-w-none">
                  <div className="space-y-8">
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-xl">1. User Personas & Journey Mapping</h3>
                      <p className="text-gray-700 mb-4">Created three distinct personas representing different student mental health archetypes and mapped their journey from stress triggers to resolution.</p>
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-blue-200 rounded-full mx-auto mb-2"></div>
                            <p className="font-medium text-sm">Alex - The Overwhelmed</p>
                            <p className="text-xs text-gray-600">High-achiever with anxiety</p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-green-200 rounded-full mx-auto mb-2"></div>
                            <p className="font-medium text-sm">Sam - The Isolated</p>
                            <p className="text-xs text-gray-600">Struggles with depression</p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-purple-200 rounded-full mx-auto mb-2"></div>
                            <p className="font-medium text-sm">Jordan - The Skeptic</p>
                            <p className="text-xs text-gray-600">Resistant to traditional help</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-xl">2. Information Architecture</h3>
                      <p className="text-gray-700 mb-4">Designed a three-tier support system addressing different levels of mental health needs:</p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                          <div className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center text-red-800 font-bold text-sm">1</div>
                          <div>
                            <p className="font-medium text-red-800">Immediate Relief</p>
                            <p className="text-red-600 text-sm">Crisis intervention, breathing exercises, grounding techniques</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                          <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-800 font-bold text-sm">2</div>
                          <div>
                            <p className="font-medium text-yellow-800">Daily Habits</p>
                            <p className="text-yellow-600 text-sm">Mood tracking, micro-meditations, wellness goals</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                          <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-green-800 font-bold text-sm">3</div>
                          <div>
                            <p className="font-medium text-green-800">Community Support</p>
                            <p className="text-green-600 text-sm">Peer check-ins, study groups, anonymous sharing</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-xl">3. Prototyping & Testing</h3>
                      <p className="text-gray-700 mb-4">Built and tested low-fidelity wireframes with focus on crisis intervention flow and peer support features.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="h-32 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-8 h-8 bg-cyan-200 rounded mx-auto mb-1"></div>
                            <p className="text-cyan-600 font-medium text-sm">Crisis Flow Wireframes</p>
                          </div>
                        </div>
                        <div className="h-32 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-8 h-8 bg-pink-200 rounded mx-auto mb-1"></div>
                            <p className="text-pink-600 font-medium text-sm">Usability Testing</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-2xl">💡</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    MindSpace became a comprehensive mental health companion featuring crisis support, habit building, and peer connection in one accessible platform.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">🆘 Crisis Support</h4>
                      <p className="text-red-700">One-tap SOS button providing immediate access to breathing exercises, crisis hotlines, and emergency contacts</p>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">📊 Mood Tracking</h4>
                      <p className="text-blue-700">Gamified daily check-ins with personalized insights and mood pattern recognition</p>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">👥 Peer Support</h4>
                      <p className="text-green-700">Anonymous peer groups organized by university, study buddy matching, and shared wellness challenges</p>
                    </div>
                    
                    <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-2">⚡ Micro-Interventions</h4>
                      <p className="text-purple-700">2-minute breathing exercises, quick mindfulness prompts, and energy-boosting activities</p>
                    </div>
                  </div>

                  {/* Visual Design Highlights */}
                  <div className="mt-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Visual Design</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="h-48 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-indigo-200 rounded-xl mx-auto mb-3"></div>
                          <p className="text-indigo-600 font-medium">Calming Color Palette</p>
                          <p className="text-indigo-500 text-sm">Accessibility-focused design</p>
                        </div>
                      </div>
                      <div className="h-48 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-emerald-200 rounded-xl mx-auto mb-3"></div>
                          <p className="text-emerald-600 font-medium">Intuitive Navigation</p>
                          <p className="text-emerald-500 text-sm">Crisis-optimized interface</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testing & Results Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-2xl">📈</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Testing & Impact</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Conducted 5 usability testing sessions with target users, iterating based on feedback about navigation clarity and crisis support accessibility.
                  </p>

                  {/* Results Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-green-50 p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
                      <p className="text-green-800 font-medium">Found More Approachable</p>
                      <p className="text-green-600 text-sm">Than existing solutions</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">3 Taps</div>
                      <p className="text-blue-800 font-medium">Crisis Support Access</p>
                      <p className="text-blue-600 text-sm">Reduced from 7+ steps</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                      <p className="text-purple-800 font-medium">Would Recommend</p>
                      <p className="text-purple-600 text-sm">To fellow students</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3">Key User Feedback</h4>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm">"Finally, an app that gets what it's like to be a stressed college student"</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm">"The SOS button gave me confidence that help was always available"</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm">"Connecting with other students anonymously made such a difference"</p>
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
              <div className="text-2xl">🎓</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Learnings</h2>
                <div className="prose prose-lg max-w-none">
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Designing for Vulnerable States</h4>
                      <p>Mental health design requires deep empathy and understanding of user emotional states. Crisis moments demand ultra-simplified interfaces and immediate access to help.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Power of Peer Support</h4>
                      <p>Students consistently valued peer connection over professional intervention for daily stress. Anonymity enabled authentic sharing and support.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Accessibility is Non-Negotiable</h4>
                      <p>Mental health apps must work for users with varying cognitive loads, from panic attacks to depressive episodes. Every design decision was tested for accessibility.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-2xl">🚀</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Next Steps</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If developed further, I would focus on expanding the impact through strategic partnerships and enhanced personalization:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>University partnerships</strong> - Integration with campus counseling centers and mental health resources</li>
                    <li><strong>AI-powered insights</strong> - Mood pattern recognition and personalized intervention recommendations</li>
                    <li><strong>Expanded peer features</strong> - Study buddy matching, wellness challenges, and mentor programs</li>
                    <li><strong>Professional integration</strong> - Seamless referral system to campus counselors when needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Reflection Section */}
          <section className="mb-20">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="text-2xl">💭</div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Personal Reflection</h2>
                  <p className="text-blue-800 leading-relaxed">
                    This project challenged me to design beyond aesthetics and consider the profound impact of UX on mental wellbeing. It reinforced my belief that good design isn't just functional—it can be life-changing. The experience taught me to approach sensitive topics with deep research, empathy, and responsibility, while never losing sight of the human behind the interface.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Project CTA */}
          <section className="text-center">
            <div className="border-t border-gray-200 pt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore More Work</h3>
              <p className="text-gray-600 mb-8">Check out other case studies and design projects</p>
              <div className="flex gap-4 justify-center">
                <Link to="/case-study">
                  <Button variant="outline" className="inline-flex items-center gap-2">
                    vSTAGE Case Study
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
          </section>

        </div>
      </main>
    </div>
  );
};

export default MindSpaceCaseStudy;
