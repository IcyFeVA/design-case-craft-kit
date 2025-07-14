import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Github, Linkedin, Instagram, Download, Twitter, ExternalLink, Grid3X3, Star, Mail, ArrowDown, Dribbble } from "lucide-react";
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
      link: "/ecommerce-case-study"
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

      <div className="max-w-6xl mx-auto py-8"></div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div className="space-y-6">
            {/* <Badge variant="outline" className="text-sm font-medium">
              Available for new opportunities
            </Badge> */}

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Product Designer crafting
              <span className="block text-gray-600">meaningful experiences</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
              I’m Pascal, a product designer with 9+ years in tech. I build clear, useful experiences that solve real problems — fast.
            </p>
          </div>

            <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/#work">
              <Button size="lg" className="gap-2">
              View My Work
              <ArrowDown className="w-4 h-4" />
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
            <Link to="https://instagram.com/icyfeva" target="_blank" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link to="https://dribbble.com/icyfeva" target="_blank" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Dribbble className="w-5 h-5" />
            </Link>
            {/* <Link to="https://bsky.app/profile/icyfeva.bsky.social" target="_blank" className="text-gray-400 hover:text-gray-600 transition-colors">
              <ExternalLink className="w-5 h-5" />
              Bluesky
            </Link> */}
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-gray-900">150+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-gray-900">30+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-gray-900">9+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-600">Design Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section className="py-20">
        <img src="/img/core-skills.png" alt="Core Skills" className="max-w-6xl mx-auto px-6 py-20" />
      </section> */}

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
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center max-h-[480px] overflow-hidden w-full">
                <img src="/img/tesla/teaser.png" alt="Tesla Apple Watch App Thumbnail" className="rounded-2xl" />
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">UX/UI Design</Badge>
                <Badge variant="secondary">Apple Watch</Badge>
                <Badge variant="secondary">Tiny UI</Badge>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Tesla — Adoption to Apple Watch
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  If you know the TV Show "Knight Rider", this is the next step. This concept watch app allows you to control your car from your wrist, with a focus on simplicity and ease of use.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tesla-watch-app">
                  <Button className="gap-2">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                {/* <Button variant="outline" className="gap-2 bg-transparent">
                  <ExternalLink className="w-4 h-4" />
                  Live Project
                </Button> */}
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/ecommerce-case-study">
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
                        Web App
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        E-commerce
                      </Badge>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Checkout Optimization</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Reduced cart abandonment by 24% through simplified checkout design and improved user experience
                    </p>
                    <Button variant="ghost" className="gap-2 p-0 h-auto text-sm">
                      View Project
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
                        {/* <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border border-gray-200">
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
              </div> */}

            <Link to="/vstage">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-emerald-50 rounded-t-lg flex items-center justify-center border-b border-green-100">
                    
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Desktop Application
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        3D Visualization
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        3D Presentation
                      </Badge>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">vSTAGE — 3D Presentation Platform</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Transformed a complex 3D tool designed for CAD professionals into an intuitive platform accessible to
                  newcomers while retaining deep functionality for power users.
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

      {/* Case Studies Section */}
      {/* <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deep dives into design challenges, processes, and solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/case-study" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-300 rounded-lg mx-auto mb-3"></div>
                    <p className="text-gray-600 font-medium">vSTAGE Interface</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  vSTAGE: 3D Editor Redesign
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Transforming a complex CAD tool into an intuitive 3D presentation engine for both experts and newcomers.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  Read Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/ecommerce-case-study" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="h-48 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-200 rounded-lg mx-auto mb-3"></div>
                    <p className="text-green-600 font-medium">E-commerce Platform</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Checkout Optimization
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Reducing cart abandonment by 24% through simplified checkout design and transparent pricing strategies.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  Read Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/mindspace-case-study" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-200 rounded-lg mx-auto mb-3"></div>
                    <p className="text-blue-600 font-medium">MindSpace App</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  MindSpace: Mental Health Companion
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Designing accessible mental health support for college students through crisis intervention and peer connection.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  Read Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section id="about" className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  I'm a product designer with 9+ years of experience creating digital experiences that users love. My
                  interest in psychology helps me understand user behavior and design solutions that truly resonate.
                </p>
                <p>
                  I specialize in complex applications, design systems, and UI design. I believe great design
                  happens when we deeply understand the problem we're solving and the people we're solving it for.
                </p>
                <p>
                  When I'm not designing, you'll find me hiking, playing video games, or learning new things.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-2">
                  <img src="/img/itsame.jpg" alt="Alex Chen" className="rounded-3xl" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">3D</Badge>
                  <Badge variant="secondary">Interaction Design</Badge>
                  <Badge variant="secondary">Prototyping</Badge>
                  <Badge variant="secondary">Design Systems</Badge>
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">After Effects</Badge>
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
                  "Pascal is both a skilled and knowledgeable UI/UX Designer, as well as a great team leader. I highly recommend Pascal to any organization who needs a great UI/UX team leader or instructor."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Dougal Mac Gregor</p>
                    <p className="text-sm text-gray-600">Executive Coach & Software Engineer, Ryv Consulting</p>
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
                  "I wholeheartedly recommend Pascal for any position requiring expertise in education and UX/UI Design."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Gabriela Kurtz, Phd.</p>
                    <p className="text-sm text-gray-600">Ex-Program Manager, Tamwood Careers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects. Let's discuss how we can create something amazing together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="mailto:pascal.zirn@pm.me">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Mail className="w-4 h-4" />
                  pascal.zirn@pm.me
                </Button>
              </Link>
              <Link to="https://www.linkedin.com/in/pascalz/" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              </Link>
            </div>

            <p className="text-sm text-gray-400">
              Based in Vancouver Metro Area, open to remote opportunities worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600">© 2025 Pascal Zirn. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <Link to="https://instagram.com/icyfeva" target="_blank" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link to="https://dribbble.com/icyfeva" target="_blank" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Dribbble className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
