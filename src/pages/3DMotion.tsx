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
      <Navbar highlight="gallery" />

      <div className="max-w-6xl mx-auto py-8"></div>

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div className="space-y-6 align-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              3D & Motion Design
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A curated collection of my design work spanning web applications, mobile interfaces, 
              and FUI for Film and TV. Each piece represents a unique challenge and creative solution.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
        </div>
      </section>

    </div>
  );
};

export default Motion;
