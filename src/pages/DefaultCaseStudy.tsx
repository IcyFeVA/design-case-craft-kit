import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
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
      <main className="pt-20 pb-16 ">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Hero Section */}
          <section className="mb-20">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                vSTAGE
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
                3D Editor & Presentation Engine
              </p>
            </div>
            
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                Transforming complex 3D data into intuitive, real-time presentations
              </p>
            </div>

            {/* Hero Image Placeholder */}
            <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                <p className="text-gray-500 font-medium">Hero Image</p>
                <p className="text-sm text-gray-400">vSTAGE Interface Overview</p>
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Role</h3>
                <p className="text-gray-900 font-medium">Lead UX/UI Designer</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Timeline</h3>
                <p className="text-gray-900 font-medium">6 Months</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Team</h3>
                <p className="text-gray-900 font-medium">Designer, 3 Developers</p>
              </div>
            </div>
          </section>

          {/* Challenge Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-2xl">🧩</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Side Effects had this advanced 3D tool (vSTAGE) for presentations, training, and simulations—but it was designed for CAD pros only. The goal:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>Make it accessible for new users while retaining deep functionality</li>
                    <li>Handle tens of thousands of complex components without clutter</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Challenge Image Placeholder */}
            <div className="w-full h-64 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl flex items-center justify-center mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-200 rounded-lg mx-auto mb-3"></div>
                <p className="text-red-600 font-medium">Challenge Visualization</p>
              </div>
            </div>
          </section>

          {/* Role Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-2xl">🎯</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">My Role</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Lead UX/UI designer for the entire desktop app:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>Defined personas (CAD experts vs newcomers)</li>
                    <li>Crafted wireframes, UI patterns, dark/light themes, dashboard layouts</li>
                    <li>Presented Figma prototypes and drove iterative testing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Role Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-200 rounded-lg mx-auto mb-2"></div>
                  <p className="text-blue-600 font-medium text-sm">Personas & Research</p>
                </div>
              </div>
              <div className="h-48 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 bg-purple-200 rounded-lg mx-auto mb-2"></div>
                  <p className="text-purple-600 font-medium text-sm">Figma Prototypes</p>
                </div>
              </div>
            </div>
          </section>

          {/* Constraints Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-2xl">⏱</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Constraints</h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="space-y-4 text-gray-700">
                    <li>Users needed serious control: filter, tag, bookmark, select/inverse-select, manage overlays</li>
                    <li>UI had to avoid horizontal scrolling—except where it actually made sense (like a slide-style media bar)</li>
                    <li>Launch fast, with minimal dev effort, using modular, reusable components</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-2xl">🛠</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Process</h2>
                <div className="prose prose-lg max-w-none">
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Flows & Personas</h3>
                      <p>Mapped export and overlay workflows for different personas</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Wireframes & Prototypes</h3>
                      <p>Built a high-fidelity Figma demo to test toggles, slide-bars, dashboards</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Pattern System</h3>
                      <p>Designed pop‑over toggles, tree views, slide navigation with big trackers, dark/light UI</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Iterate & Test</h3>
                      <p>Refined horizontal scroll behavior ("avoid it—unless…") based on prototypes with real users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="h-32 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-200 rounded mx-auto mb-1"></div>
                  <p className="text-green-600 font-medium text-xs">User Flows</p>
                </div>
              </div>
              <div className="h-32 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-yellow-200 rounded mx-auto mb-1"></div>
                  <p className="text-yellow-600 font-medium text-xs">Wireframes</p>
                </div>
              </div>
              <div className="h-32 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-teal-200 rounded mx-auto mb-1"></div>
                  <p className="text-teal-600 font-medium text-xs">UI Patterns</p>
                </div>
              </div>
              <div className="h-32 bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-violet-200 rounded mx-auto mb-1"></div>
                  <p className="text-violet-600 font-medium text-xs">Testing</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Design Decisions */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-2xl">🔑</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Design Decisions</h2>
                <div className="prose prose-lg max-w-none">
                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Toggle UI elements</h3>
                      <p>Let users hide overlays, bookmarks, tree views—tailor workspace per task</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Slide bar navigation</h3>
                      <p>Larger tracker, horizontal scroll when familiar model—made navigation intuitive</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Tree-view filters</h3>
                      <p>Enabled users to select, inverse-select, bookmark parts from massive data sets seamlessly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision Images */}
            <div className="space-y-6">
              <div className="w-full h-80 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-200 rounded-xl mx-auto mb-4"></div>
                  <p className="text-slate-600 font-medium">Toggle UI Elements</p>
                  <p className="text-sm text-slate-400">Customizable workspace interface</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-48 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-200 rounded-lg mx-auto mb-3"></div>
                    <p className="text-amber-600 font-medium">Slide Navigation</p>
                  </div>
                </div>
                <div className="h-48 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-200 rounded-lg mx-auto mb-3"></div>
                    <p className="text-emerald-600 font-medium">Tree View Filters</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Outcome Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-2xl">📈</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Outcome</h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="space-y-4 text-gray-700">
                    <li>Built a modular UI system that handles large‑scale 3D content smoothly</li>
                    <li>Rolled out both a developer-ready toolkit and polished Figma prototype, speeding dev workflow</li>
                    <li>Design assumptions evolved with real feedback—more reusable, adaptive components</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Outcome Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3x</div>
                <p className="text-blue-800 font-medium">Faster Development</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                <p className="text-green-800 font-medium">User Satisfaction</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50%</div>
                <p className="text-purple-800 font-medium">Reduced Learning Curve</p>
              </div>
            </div>
          </section>

          {/* Visual Highlights */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-2xl">🔍</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Visual Highlights</h2>
                <div className="prose prose-lg max-w-none">
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Pikaboo toggles</h3>
                      <p>Reduce visual clutter by customizing overlays per task</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Slide-bar w/ big tracker</h3>
                      <p>Horizontal flow feels natural, with clear navigation</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Adaptive tree views</h3>
                      <p>Powerful filtering for large component sets</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="h-64 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-14 h-14 bg-indigo-200 rounded-xl mx-auto mb-3"></div>
                  <p className="text-indigo-600 font-medium">Before & After UI</p>
                </div>
              </div>
              <div className="h-64 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-14 h-14 bg-rose-200 rounded-xl mx-auto mb-3"></div>
                  <p className="text-rose-600 font-medium">Interactive Prototypes</p>
                </div>
              </div>
              <div className="lg:col-span-2 h-64 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-200 rounded-xl mx-auto mb-4"></div>
                  <p className="text-cyan-600 font-medium">Final Interface Showcase</p>
                </div>
              </div>
            </div>
          </section>

          {/* Improvements Section */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-2xl">🔄</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What I'd Improve</h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="space-y-4 text-gray-700">
                    <li><span className="font-semibold">📊</span> Add analytics tools for users to track interaction with layers/overlays</li>
                    <li><span className="font-semibold">🖌</span> More onboarding cues/tutorials for new users</li>
                    <li><span className="font-semibold">🔀</span> Expand UI mode-switching (e.g., quick toggle between CAD-mode vs presentation-mode)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Core Takeaway */}
          <section className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-2xl">🎙</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Takeaway</h2>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    vSTAGE shows how to balance simplicity and power. I designed a system that adapts to both CAD veterans and newcomers, turning overwhelming 3D datasets into sleek, navigable experiences—showcasing how I think, prioritize, and execute under real constraints.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Project CTA */}
          <section className="text-center">
            <div className="border-t border-gray-200 pt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in seeing more work?</h3>
              <p className="text-gray-600 mb-8">Explore other case studies and projects</p>
              <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                View More Projects
                <ExternalLink size={16} />
              </button>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Index;
