import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GalleryImageDialog } from "./GalleryImageDialog";
import { ArrowLeft, Download, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";



const Motion = () => {



  return (
    <div className="min-h-screen bg-white">
      <Navbar highlight="motion" />

      <div className="max-w-6xl mx-auto py-8"></div>

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div className="space-y-6 align-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Reels
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Some of my recent work in 3D design, motion graphics, FUI, as well as my character animation
            </p>
          </div>
        </div>
      </section>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mx-auto text-center">
        3D, Motion, FUI (2024)
      </h3>

      <section className="pb-20 px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
            <div style={{padding: '56.25% 0 0 0', position:'relative'}} className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-card bg-gray-900">
                <iframe src={`https://player.vimeo.com/video/1034439821?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1`} frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style={{position:'absolute', top:0, left:0, width:'100%',height:'100%'}} title="Demo Reel 2024 (3D, Motion, FUI)">
                </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </section>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mx-auto text-center">
        Character Animation Reel (2012, Maya)
      </h3>

      <section className="pb-20 px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
            <div style={{padding: '56.25% 0 0 0', position:'relative'}} className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-card bg-gray-900">
                <iframe src={`https://player.vimeo.com/video/55232116?h=1de71794e3&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1`} frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style={{position:'absolute', top:0, left:0, width:'100%',height:'100%'}} title="Demo Reel 2024 (3D, Motion, FUI)">
                </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </section>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mx-auto text-center">
        R&M Prime Trailer (C4D, AE)
      </h3>

      <section className="pb-20 px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
            <div style={{padding: '56.25% 0 0 0', position:'relative'}} className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-card bg-gray-900">
                <iframe src={`https://player.vimeo.com/video/326421852?h=1de71794e3&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1`} frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style={{position:'absolute', top:0, left:0, width:'100%',height:'100%'}} title="Demo Reel 2024 (3D, Motion, FUI)">
                </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </section>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mx-auto text-center">
        Star Wars like Space Jump (Houdini, AE)
      </h3>

      <section className="pb-20 px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
            <div style={{padding: '56.25% 0 0 0', position:'relative'}} className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-card bg-gray-900">
                <iframe src={`https://player.vimeo.com/video/328976434?h=1de71794e3&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1`} frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style={{position:'absolute', top:0, left:0, width:'100%',height:'100%'}} title="Demo Reel 2024 (3D, Motion, FUI)">
                </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </section>      

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mx-auto text-center">
        Thank you "card" for client (C4D, Element3D)
      </h3>

      <section className="pb-20 px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
            <div style={{padding: '56.25% 0 0 0', position:'relative'}} className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-card bg-gray-900">
                <iframe src={`https://player.vimeo.com/video/264759753?h=1de71794e3&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1`} frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style={{position:'absolute', top:0, left:0, width:'100%',height:'100%'}} title="Demo Reel 2024 (3D, Motion, FUI)">
                </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </section>         

    </div>
  );
};

export default Motion;
