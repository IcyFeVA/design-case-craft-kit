import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Watch,
  Zap,
  Touchpad,
  Film,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import CaseStudyNav from "@/components/CaseStudyNav";
import { GalleryImageDialog } from "./GalleryImageDialog";
import React, { useState } from "react";


type Screenshot = {
  imageUrl: string;
  title: string;
  description: string;
  category: string;
  year: string | number;
  tags: string[];
};

const screenshots: Screenshot[] = [
      {
        imageUrl: '/img/tesla/process3.png',
        title: "Process",
        description: "First draft looks nice, but not usable (text and buttons too small).",
        category: "UI",
        year: 2023,
        tags: ["Dashboard", "Tesla", "Apple Watch"],
    },
    {
        imageUrl: '/img/tesla/process1.png',
        title: "Process",
        description: "Iterations: Home Screen / Summoning Car",
        category: "UI",
        year: 2023,
        tags: ["Dashboard", "Tesla", "Apple Watch"],
    },
    {
        imageUrl: '/img/tesla/process2.png',
        title: "Process",
        description: "Iterations: Touch Surface",
        category: "UI",
        year: 2023,
        tags: ["Dashboard", "Tesla", "Apple Watch"],
    },
      {
        imageUrl: '/img/tesla/process4.png',
        title: "Process",
        description: "The concept of using a touch surface to execute a action was inspired by the James Bond movie 'Tomorrow Never Dies.' In this film, the renowned spy is seen using a touchpad on an Ericsson phone to control his BMW car.",
        category: "UI",
        year: 2023,
        tags: ["Dashboard", "Tesla", "Apple Watch"],
    },

];

type ScreenshotsRowProps = {
    screenshots: Screenshot[];
};

function ScreenshotsRow({ screenshots }: ScreenshotsRowProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const selectedImage = openIndex !== null ? screenshots[openIndex] : null;
    const setSelectedImage = (idx: number | null) => setOpenIndex(idx);

    return (
        <>
            <div className="flex items-center mt-8" style={{ height: 48 }}>
                <span
                    className="mr-4 text-sm font-medium text-gray-600"
                    style={{ minWidth: 80 }}
                >
                    Process Shots
                </span>
                {screenshots.map((s, i) => ( 
                    <div
                        key={i}
                        style={{
                            width: 120,
                            aspectRatio: "16/9",
                            borderRadius: 8,
                            overflow: "hidden",
                            marginLeft: i === 0 ? 0 : 16,
                            zIndex: 10 + i,
                            background: `url(${s.imageUrl}) center/cover`,
                            cursor: "pointer",
                            // transition: "box-shadow 0.2s",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontSize: 12,
                            fontWeight: 500,
                            textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                            border: "3px solid #fff",
                            boxSizing: "border-box",
                            // transform: Math.random() > 0.5 ? "rotate(3deg)" : "rotate(-3deg)",
                        }}
                        title={s.title}
                        onClick={() => setOpenIndex(i)}
                        className="shadow-2xl transform transition-transform duration-300 hover:scale-110"
                    >
                    </div>
                ))}
            </div>
            {/* Image Overlay Dialog */}
            <GalleryImageDialog
                open={!!selectedImage}
                onOpenChange={(open) => setSelectedImage(open ? openIndex : null)}
                item={selectedImage}
            />
        </>
    );
}


const TeslaWatchApp = () => {
  const [openUiScreenIndex, setOpenUiScreenIndex] = useState<number | null>(null);

  const uiScreens: Screenshot[] = [
      {
          imageUrl: '/img/tesla/final1.png',
          title: "What if Tesla had a Apple Watch App?",
          description: "Mockup",
          category: "UX/UI",
          year: 2023,
          tags: ["Climate", "Controls", "Watch"],
      },
      {
          imageUrl: '/img/tesla/final2.jpg',
          title: "On the Apple Watch Ultra",
          description: "Mockup",
          category: "UX/UI",
          year: 2023,
          tags: ["Climate", "Controls", "Watch"],
      },
      {
          imageUrl: '/img/tesla/final3.png',
          title: "Teaser",
          description: "Mockup",
          category: "UX/UI",
          year: 2023,
          tags: ["Climate", "Controls", "Watch"],
      },
  ];

  const selectedUiScreen = openUiScreenIndex !== null ? uiScreens[openUiScreenIndex] : null;



  return (
    <main className="pt-8 pb-16">
      <CaseStudyNav />
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div className="space-y-6">
            {/* <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Apple Watch App</Badge>
              <Badge variant="secondary">Concept Design</Badge>
              <Badge variant="secondary">Animation</Badge>
              <Badge variant="secondary">UX/UI</Badge>
            </div> */}

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Tesla Watch App: Concept Design & Animation
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Porting the Tesla mobile app to the Apple Watch presents unique
              challenges in UI, compatibility, and interaction. This concept
              explores how a seamless Tesla experience could work on your wrist.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Apple Watch</div>
                <div className="text-sm text-gray-600">Platform</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Gesture UX</div>
                <div className="text-sm text-gray-600">Interaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Animation</div>
                <div className="text-sm text-gray-600">Validation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">007 Bond</div>
                <div className="text-sm text-gray-600">Inspiration</div>
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
              <h2 className="text-3xl font-bold text-gray-900">
                Project Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Tesla Watch App is a personal concept project exploring how
                Tesla's mobile features could be adapted for the Apple Watch.
                The main challenge was designing for a tiny screen, rethinking
                interaction, and ensuring compatibility with Tesla's unique
                features.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Type</h3>
                  <p className="text-gray-600">Apple Watch App</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Figma / After Effects</h3>
                  <p className="text-gray-600">Software</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Role</h3>
                  <p className="text-gray-600">Concept Designer & Animator</p>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-gray-50 to-blue-100 rounded-2xl flex items-center justify-center">
              <img
                src="/img/tesla/thumb.png"
                alt="Tesla Watch App Hero Image"
                className="w-full h-full object-cover rounded-2xl"/>
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
              Designing for the Apple Watch meant rethinking every aspect of the
              Tesla app. Screen size, resolution, and interaction methods
              required creative solutions to make features usable and intuitive.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Screen Constraints
                  </h3>
                  <p className="text-gray-600">
                    The tiny display made traditional buttons unusable. Every
                    pixel had to be carefully considered for clarity and
                    usability.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Touchpad className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Gesture Interaction
                  </h3>
                  <p className="text-gray-600">
                    Buttons were too small, so a double-tap and hold gesture was
                    designed for summoning the car, inspired by spy movies.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Film className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    007 Inspiration
                  </h3>
                  <p className="text-gray-600">
                    The touch gesture concept was inspired by James Bond's use
                    of a phone to control his car in "Tomorrow Never Dies." Cool
                    UX starts with imagination.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6 pb-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Design Process
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Concept & Iteration
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">
                      Initial sketches and wireframes for watch UI
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">
                      Tested button layouts, removed for usability
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">
                      Developed gesture-based interaction
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">
                      Animated demo video for concept validation
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Features
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <div className="flex items-center">
                    <span className="text-gray-700">Gesture-based car summoning</span>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="font-bold text-green-600">✓ Concepted</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-700">Minimalist UI for small screens</span>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="font-bold text-green-600">✓ Designed</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-700">Animated transitions</span>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="font-bold text-green-600">✓ Demoed</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-700">007-inspired UX</span>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="font-bold text-green-600">✓ Ideated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping 16:9 thumbnails row */}
            <ScreenshotsRow screenshots={screenshots} />
          </div>
        </div>
      </section>

        {/* Animation Demo */}
    <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center">
                    Prototype Animation
                </h2>
                <div className="flex justify-center">
                    <div className="aspect-video w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg bg-black">
                        <iframe
                            src="https://player.vimeo.com/video/867596433"
                            width="100%"
                            height="100%"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Tesla Watch App Demo"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>


      {/* UI Screens Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center">
                    Mockups
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {uiScreens.map((screen, index) => (
                        <Card
                            key={index}
                            className="w-full rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 cursor-pointer aspect-video"
                            onClick={() => setOpenUiScreenIndex(index)}
                            style={{transform: `rotate(${(-5 + Math.random()*10)}deg)`, border: '5px solid #fff'}}
                        >
                            <CardContent className="p-0 w-full h-full">
                                <img src={screen.imageUrl} alt={screen.title} className="w-full h-full object-cover" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <GalleryImageDialog
          open={!!selectedUiScreen}
          onOpenChange={(open) => setOpenUiScreenIndex(open ? openUiScreenIndex : null)}
          item={selectedUiScreen}
      />

      {/* Reflection & Conclusion */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Reflection & Conclusion
              </h2>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Porting the Tesla mobile app to the Apple Watch involves
                overcoming several design and compatibility challenges. With
                careful planning and creative thinking, a seamless and intuitive
                user experience is possible—even if it never becomes reality. I
                loved thinking about it for a few weeks!
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  What Worked Well
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">
                      Gesture-based UX solved small screen issues
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">
                      007 inspiration led to creative solutions
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">
                      Animation helped validate the concept
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Personal Growth
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">
                      Learned to design for extreme constraints
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">
                      Developed new animation skills
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">
                      Gained confidence in concept ideation
                    </span>
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
            <h2 className="text-3xl font-bold text-gray-900">
              Want to See the Demo?
            </h2>
            <p className="text-xl text-gray-600">
              Curious about the animation or want to discuss wearable UX? Get in
              touch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg" className="gap-2">
                  View More Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent"
              >
                <ExternalLink className="w-4 h-4" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section> */}

    </main>
  );
};

export default TeslaWatchApp;
