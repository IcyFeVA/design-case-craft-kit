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

const fakeImages = [
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=225&fit=crop",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=225&fit=crop",
  "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=225&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=225&fit=crop",
];

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
        imageUrl: fakeImages[0],
        title: "Tesla Home",
        description: "Main dashboard for Tesla Watch App.",
        category: "UI",
        year: 2023,
        tags: ["Dashboard", "Tesla", "Watch"],
    },
    {
        imageUrl: fakeImages[1],
        title: "Car Controls",
        description: "Control your Tesla from your wrist.",
        category: "Controls",
        year: 2023,
        tags: ["Controls", "Remote", "Watch"],
    },
    {
        imageUrl: fakeImages[2],
        title: "Summon Gesture",
        description: "Gesture-based car summoning.",
        category: "Gesture",
        year: 2023,
        tags: ["Gesture", "Summon", "UX"],
    },
    {
        imageUrl: fakeImages[3],
        title: "Animation Demo",
        description: "Animated transitions for concept validation.",
        category: "Animation",
        year: 2023,
        tags: ["Animation", "Demo", "Concept"],
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
                    Screenshots
                </span>
                {screenshots.map((s, i) => (
                    <div
                        key={i}
                        style={{
                            width: 120,
                            aspectRatio: "16/9",
                            borderRadius: 8,
                            overflow: "hidden",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                            marginLeft: i === 0 ? 0 : -20,
                            zIndex: 10 + i,
                            background: `url(${s.imageUrl}) center/cover`,
                            cursor: "pointer",
                            transition: "box-shadow 0.2s",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontSize: 12,
                            fontWeight: 500,
                            textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                            border: "3px solid #fff",
                            boxSizing: "border-box",
                        }}
                        title={s.title}
                        onClick={() => setOpenIndex(i)}
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
      <section className="bg-gray-50 py-16">
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
                  <h3 className="font-semibold text-gray-900">Client</h3>
                  <p className="text-gray-600">Personal Project</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Role</h3>
                  <p className="text-gray-600">Concept Designer & Animator</p>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-gray-50 to-blue-100 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-2">
                <Watch className="w-16 h-16 text-blue-600 mx-auto" />
                <p className="text-blue-600 font-medium">Tesla Watch App</p>
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
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
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

      {/* Reflection & Conclusion */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Reflection & Conclusion
              </h2>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
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
      <section className="bg-gray-50 py-16">
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
      </section>
    </main>
  );
};

export default TeslaWatchApp;
