
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, ExternalLink, TrendingUp, Users, ShoppingCart, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";

const EcommerceCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">E-commerce</Badge>
              <Badge variant="secondary">UX/UI Design</Badge>
              <Badge variant="secondary">Conversion Optimization</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Reducing Cart Abandonment Through Simplified Checkout Design
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              A complete redesign of an e-commerce checkout flow that reduced cart abandonment by 24% 
              and increased conversion rates by 15% through user-centered design principles.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">3 months</div>
                <div className="text-sm text-gray-600">Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24%</div>
                <div className="text-sm text-gray-600">Reduction in abandonment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15%</div>
                <div className="text-sm text-gray-600">Conversion increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">32%</div>
                <div className="text-sm text-gray-600">Mobile improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Project Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                Our mid-sized e-commerce platform was experiencing a 68% cart abandonment rate, significantly 
                higher than the industry average of 45%. User feedback indicated frustration with the checkout 
                process, leading to lost revenue and poor user experience.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Client</h3>
                  <p className="text-gray-600">Mid-sized e-commerce platform</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Timeline</h3>
                  <p className="text-gray-600">January - March 2024</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Role</h3>
                  <p className="text-gray-600">Lead UX Designer</p>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-2">
                <ShoppingCart className="w-16 h-16 text-blue-600 mx-auto" />
                <p className="text-blue-600 font-medium">E-commerce Platform</p>
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
              Through analytics and user research, we identified three primary pain points causing high cart abandonment:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Complex Process</h3>
                  <p className="text-gray-600">
                    Checkout process required 7 steps, causing user fatigue and increasing abandonment rates.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Forced Registration</h3>
                  <p className="text-gray-600">
                    Mandatory account creation before purchase deterred 40% of users from completing their order.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Hidden Costs</h3>
                  <p className="text-gray-600">
                    Hidden shipping costs appeared only at final step, breaking user trust and causing abandonment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Research Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                I conducted comprehensive research to understand user pain points and identify opportunities for improvement.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Phase (2 weeks)</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">12</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">User Interviews</h4>
                    <p className="text-gray-600 text-sm">
                      Conducted in-depth interviews to understand checkout frustrations and user expectations.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold">8</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Competitor Analysis</h4>
                    <p className="text-gray-600 text-sm">
                      Analyzed competitor checkout flows to identify industry best practices and opportunities.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold">∞</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Analytics Review</h4>
                    <p className="text-gray-600 text-sm">
                      Reviewed heat maps and user session recordings to identify friction points in the flow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">The Solution</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                I led a complete redesign of the checkout flow, focusing on simplicity, transparency, and user choice.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Design Phase (4 weeks)</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Streamlined 3-Step Process</h4>
                      <p className="text-gray-600 mt-1">Reduced checkout from 7 steps to 3: Information, Payment, and Confirmation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Guest Checkout Option</h4>
                      <p className="text-gray-600 mt-1">Implemented prominent guest checkout to reduce friction for first-time customers.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Transparent Pricing</h4>
                      <p className="text-gray-600 mt-1">Added shipping calculator and upfront cost display to build user trust.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mobile-First Design</h4>
                      <p className="text-gray-600 mt-1">Designed responsive checkout screens optimized for mobile commerce.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Results */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Testing & Results</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Testing Phase (2 weeks)</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">A/B tested new checkout against original design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Conducted usability testing with 8 participants</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Iterated based on feedback to improve form validation</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cart abandonment</span>
                    <span className="font-bold text-green-600">68% → 52%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Conversion rate</span>
                    <span className="font-bold text-green-600">+15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Mobile completion</span>
                    <span className="font-bold text-green-600">+32%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">User satisfaction</span>
                    <span className="font-bold text-green-600">3.2 → 4.1</span>
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
            <h2 className="text-3xl font-bold text-gray-900">Key Learnings</h2>
            <div className="bg-blue-50 rounded-2xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                This project taught me the importance of transparent communication in e-commerce design. 
                I learned that small friction points can compound to create major user experience barriers. 
                The success reinforced my belief in data-driven design decisions combined with qualitative user insights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">What Worked Well</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">User research provided clear direction for design decisions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">A/B testing validated the effectiveness of our solutions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Mobile-first approach significantly improved mobile conversions</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Areas for Improvement</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Earlier stakeholder alignment could have expedited the process</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">More extensive testing with edge cases would be beneficial</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Long-term user behavior tracking for sustained improvements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Next Steps</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Based on the success of this project, we're planning several enhancements to further optimize the checkout experience:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold text-gray-900">Personalization</h4>
                  <p className="text-gray-600 text-sm">
                    Implement smart defaults based on user history and preferences to reduce form completion time.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold text-gray-900">Payment Options</h4>
                  <p className="text-gray-600 text-sm">
                    Add more payment methods including digital wallets and buy-now-pay-later options.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold text-gray-900">Recovery Flow</h4>
                  <p className="text-gray-600 text-sm">
                    Design abandoned cart recovery emails and retargeting campaigns to re-engage users.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Interested in Learning More?</h2>
            <p className="text-xl text-gray-600">
              I'd love to discuss this project in detail and share insights from the design process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg" className="gap-2">
                  View More Work
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <ExternalLink className="w-4 h-4" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceCaseStudy;
