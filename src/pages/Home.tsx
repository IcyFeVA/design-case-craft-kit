import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Github, Linkedin, Instagram, Download, Twitter, ExternalLink, Grid3X3, Star, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";

const Home = () => {
  const skills = [
    "UX/UI Design", "Figma", "Design Systems", "User Research", 
    "Prototyping", "3D Interfaces", "Interaction Design", "Visual Design"
  ];

  const projects = [
    {
      title: "vSTAGE 3D Editor",
      category: "Desktop Application",
      description: "Transforming complex 3D data into intuitive, real-time presentations for CAD professionals and newcomers alike.",
      tags: ["UX/UI Design", "3D Interface", "Desktop App"],
      link: "/case-study"
    },
    {
      title: "E-commerce Platform",
      category: "Web Application", 
      description: "Complete redesign of a B2B marketplace, increasing conversion rates by 40% through improved user flows.",
      tags: ["Web Design", "User Research", "Conversion Optimization"],
      link: "/case-study"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Application",
      description: "Designed an intuitive mobile banking experience focusing on accessibility and security for elderly users.",
      tags: ["Mobile Design", "Accessibility", "FinTech"],
      link: "/case-study"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar highlight="work" />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div className="space-y-6">
            <Badge variant="outline" className="text-sm font-medium">
              Available for new opportunities
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Product Designer crafting
              <span className="block text-gray-600">meaningful experiences</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
              I help companies transform complex problems into intuitive digital solutions. Currently designing at
              TechCorp, previously at StartupXYZ and DesignStudio.
            </p>
          </div>

            <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/case-study">
              <Button size="lg" className="gap-2">
              View My Work
              <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/ui-gallery">
              <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              {/* If you have Grid3X3 icon, import and use it; otherwise, use a similar Lucide icon */}
              <Grid3X3 className="w-4 h-4" />
              Design Gallery
              </Button>
            </Link>
            </div>

          {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
            <Link to="https://linkedin.com/in/alexchen" target="_blank" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link to="https://twitter.com/alexchen" target="_blank" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link to="https://alexchen.design" target="_blank" className="text-gray-400 hover:text-gray-600 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </Link>
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-gray-900">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-gray-900">15+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-600">Design Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A selection of projects that showcase my approach to solving complex design challenges
            </p>
          </div>

          {/* Featured Project - vSTAGE */}
          <div className="space-y-8">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border border-gray-200">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto"></div>
                <p className="text-gray-500 font-medium">vSTAGE Interface</p>
                <p className="text-sm text-gray-400">3D Editor & Presentation Engine</p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">UX/UI Design</Badge>
                <Badge variant="secondary">Desktop Application</Badge>
                <Badge variant="secondary">3D Visualization</Badge>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  vSTAGE — 3D Editor & Presentation Engine
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Transformed a complex 3D tool designed for CAD professionals into an intuitive platform accessible to
                  newcomers while retaining deep functionality for power users.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/case-study">
                  <Button className="gap-2">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <ExternalLink className="w-4 h-4" />
                  Live Project
                </Button>
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/case-study">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-t-lg flex items-center justify-center border-b border-blue-100">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-blue-200 rounded-lg mx-auto"></div>
                      <p className="text-blue-600 font-medium text-sm">E-commerce Platform</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Mobile App
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        E-commerce
                      </Badge>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">ShopFlow Mobile</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Redesigned mobile shopping experience resulting in 40% increase in conversion rates
                    </p>
                    <Button variant="ghost" className="gap-2 p-0 h-auto text-sm">
                      View Project
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/case-study">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-emerald-50 rounded-t-lg flex items-center justify-center border-b border-green-100">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-green-200 rounded-lg mx-auto"></div>
                      <p className="text-green-600 font-medium text-sm">SaaS Dashboard</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Web App
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Analytics
                      </Badge>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">DataViz Pro</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Analytics dashboard helping businesses make data-driven decisions with intuitive visualizations
                    </p>
                    <Button variant="ghost" className="gap-2 p-0 h-auto text-sm">
                      View Project
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/case-study">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-pink-50 rounded-t-lg flex items-center justify-center border-b border-purple-100">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-purple-200 rounded-lg mx-auto"></div>
                      <p className="text-purple-600 font-medium text-sm">Healthcare App</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Mobile App
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Healthcare
                      </Badge>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">MedConnect</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Patient-doctor communication platform improving healthcare accessibility and outcomes
                    </p>
                    <Button variant="ghost" className="gap-2 p-0 h-auto text-sm">
                      View Project
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/case-study">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-red-50 rounded-t-lg flex items-center justify-center border-b border-orange-100">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-orange-200 rounded-lg mx-auto"></div>
                      <p className="text-orange-600 font-medium text-sm">Fintech Platform</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Web App
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Fintech
                      </Badge>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">PayStream</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Digital payment solution simplifying transactions for small businesses and freelancers
                    </p>
                    <Button variant="ghost" className="gap-2 p-0 h-auto text-sm">
                      View Project
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  I'm a product designer with 5+ years of experience creating digital experiences that users love. My
                  background in psychology helps me understand user behavior and design solutions that truly resonate.
                </p>
                <p>
                  I specialize in complex B2B applications, design systems, and user research. I believe great design
                  happens when we deeply understand the problem we're solving and the people we're solving it for.
                </p>
                <p>
                  When I'm not designing, you'll find me hiking, experimenting with new coffee brewing methods, or
                  contributing to open-source design tools.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto"></div>
                  <p className="text-gray-600 font-medium">Profile Photo</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">User Research</Badge>
                  <Badge variant="secondary">Interaction Design</Badge>
                  <Badge variant="secondary">Prototyping</Badge>
                  <Badge variant="secondary">Design Systems</Badge>
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">Sketch</Badge>
                  <Badge variant="secondary">Adobe Creative Suite</Badge>
                  <Badge variant="secondary">HTML/CSS</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What People Say</h2>
            <p className="text-xl text-gray-600">Feedback from colleagues and clients I've worked with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Alex has an incredible ability to translate complex business requirements into elegant, user-friendly
                  designs. Their attention to detail and user empathy is unmatched."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Product Manager, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Working with Alex was a game-changer for our product. They brought fresh perspectives and helped us
                  achieve a 40% increase in user engagement through thoughtful design."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Michael Rodriguez</p>
                    <p className="text-sm text-gray-600">CEO, StartupXYZ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects. Let's discuss how we can create
                something amazing together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <Mail className="w-4 h-4" />
                hello@alexchen.design
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </div>

            <p className="text-sm text-gray-400">
              Currently based in San Francisco, open to remote opportunities worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600">© 2024 Alex Chen. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <Link to="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
