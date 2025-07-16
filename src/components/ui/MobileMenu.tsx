import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <Button onClick={toggleMenu} variant="ghost" size="icon">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white/90               │     
 │           backdrop-blur-xl z-50 border-b border-gray-100"> 
          <div className="px-6 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/ui-gallery" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={toggleMenu}>Gallery</Link>
            <Link to="/motion" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={toggleMenu}>3D & Motion</Link>
            <Link to="/#about" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={toggleMenu}>About</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
