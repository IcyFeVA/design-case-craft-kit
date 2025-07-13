import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CaseStudyNav: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link
                        to="/"
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Portfolio</span>
                    </Link>
                    <div className="font-semibold text-lg">Case Study</div>
                </div>
            </div>
        </nav>
    );
};

export default CaseStudyNav;