import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";

interface CaseStudyNavProps {
    linkOverride?: string;
}

const CaseStudyNav: React.FC<CaseStudyNavProps> = ({ linkOverride }) => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-8">
                        <Link
                            to={linkOverride || "/home#work"}
                            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="font-semibold text-lg text-foreground">Case Study</div>
                        <DarkModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default CaseStudyNav;