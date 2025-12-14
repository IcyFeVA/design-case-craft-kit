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
      <Button onClick={toggleMenu} size="default" variant="ghost" className="hover:bg-primary/10 hover:text-primary">
        {isOpen ? <X /> : <Menu />}
      </Button>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background/80 z-49 border-b border-border">
          <div className="px-6 py-4 flex flex-col space-y-4 backdrop-blur-md">
            <Link to="/home" className="text-muted-foreground hover:text-foreground transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/motion" className="text-muted-foreground hover:text-foreground transition-colors" onClick={toggleMenu}>3D & Motion</Link>
            <Link to="/ui-gallery" className="text-muted-foreground hover:text-foreground transition-colors" onClick={toggleMenu}>Gallery</Link>
            <Link to="/home#about" className="text-muted-foreground hover:text-foreground transition-colors" onClick={toggleMenu}>About</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
