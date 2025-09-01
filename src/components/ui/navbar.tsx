import { Download } from "lucide-react";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { DarkModeToggle } from "@/components/DarkModeToggle";

type NavLink = "work" | "gallery" | "motion" | "timeline" | "about" | "contact";

interface NavbarProps {
  highlight?: NavLink;
}

const Navbar: FC<NavbarProps> = ({ highlight }) => (
  <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
          <img src="/img/itsame2.jpg" alt="Pascal Zirn" className="h-12 w-auto rounded-full" />
          <div className="font-semibold text-lg">Pascal Zirn <span className="font-light hidden md:inline-block">- Vancouver, Canada</span></div>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-muted-foreground hover:text-foreground transition-colors ${
              highlight === "work" ? "font-semibold text-primary" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/motion"
            className={`text-muted-foreground hover:text-foreground transition-colors ${
              highlight === "motion" ? "font-semibold text-primary" : ""
            }`}
          >
            Motion & 3D
          </Link>
          <Link
            to="/ui-gallery"
            className={`text-muted-foreground hover:text-foreground transition-colors ${
              highlight === "gallery" ? "font-semibold text-primary" : ""
            }`}
          >
            Gallery
          </Link>
          <Link
            to="/timeline"
            className={`text-muted-foreground hover:text-foreground transition-colors`}
          >
            Timeline
          </Link>
          <Link
            to="/#about"
            className={`text-muted-foreground hover:text-foreground transition-colors ${
              highlight === "about" ? "font-semibold text-primary" : ""
            }`}
          >
            About
          </Link>
          {/* <Link
            to="#contact"
            className={`text-muted-foreground hover:text-foreground transition-colors ${
              highlight === "contact" ? "font-semibold text-primary" : ""
            }`}
          >
            Contact
          </Link> */}
        </div>
        <div className="flex items-center space-x-2">
          <DarkModeToggle />
          <MobileMenu />
        </div>
        {/* <Button variant="outline" className="gap-2 bg-transparent">
          <Download className="w-4 h-4" />
          Resume
        </Button> */}
      </div>
    </div>
  </nav>
);

export default Navbar;
