
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

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
      link: "#"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Application",
      description: "Designed an intuitive mobile banking experience focusing on accessibility and security for elderly users.",
      tags: ["Mobile Design", "Accessibility", "FinTech"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-semibold text-lg">Portfolio</div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-900 hover:text-gray-600 transition-colors">Home</Link>
              <Link to="/work" className="text-gray-600 hover:text-gray-900 transition-colors">Work</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="" alt="Profile" />
                  <AvatarFallback className="bg-gray-900 text-white text-xl font-semibold">JD</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">Jane Designer</h1>
                  <p className="text-gray-600">Senior UX/UI Designer</p>
                </div>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                Crafting Digital
                <span className="block text-gray-400">Experiences</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-lg">
                I design intuitive interfaces that bridge the gap between complex technology and human needs, 
                with 5+ years of experience in UX/UI design and user research.
              </p>
              
              <div className="flex items-center space-x-6">
                <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800">
                  <Link to="/work">
                    View My Work
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl aspect-[4/5] flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <p className="text-sm">Profile Image Placeholder</p>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive skill set spanning design, research, and technical implementation
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Selected works that showcase my approach to solving complex design challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <div className="bg-gray-100 aspect-[4/3] rounded-t-lg flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-3"></div>
                      <p className="text-sm">Project Image</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Link 
                      to={project.link} 
                      className="inline-flex items-center text-gray-900 hover:text-gray-600 font-medium group-hover:translate-x-1 transition-transform"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Let's Create Something Amazing Together
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <a href="mailto:hello@example.com">Get In Touch</a>
            </Button>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
