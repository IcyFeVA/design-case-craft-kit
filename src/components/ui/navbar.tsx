import { Download } from "lucide-react";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type NavLink = "work" | "gallery" | "motion" | "about" | "contact";

interface NavbarProps {
  highlight?: NavLink;
}

const Navbar: FC<NavbarProps> = ({ highlight }) => (
  <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <Link to="/">
          <div className="font-semibold text-lg">Pascal Zirn <span className="font-light text-sm">- Vancouver, Canada</span></div>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-gray-600 hover:text-gray-900 transition-colors ${
              highlight === "work" ? "font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/ui-gallery"
            className={`text-gray-600 hover:text-gray-900 transition-colors ${
              highlight === "gallery" ? "font-semibold" : ""
            }`}
          >
            Gallery
          </Link>
          <Link
            to="/3d-motion"
            className={`text-gray-600 hover:text-gray-900 transition-colors ${
              highlight === "motion" ? "font-semibold" : ""
            }`}
          >
            3D & Motion
          </Link>
          <Link
            to="/#about"
            className={`text-gray-600 hover:text-gray-900 transition-colors ${
              highlight === "about" ? "font-semibold" : ""
            }`}
          >
            About
          </Link>
          {/* <Link
            to="#contact"
            className={`text-gray-600 hover:text-gray-900 transition-colors ${
              highlight === "contact" ? "font-semibold" : ""
            }`}
          >
            Contact
          </Link> */}
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
