import { Link } from "react-router-dom";
import { Palette, Video } from "lucide-react";
import { useTheme } from "next-themes";

const Footer = () => {
  const { resolvedTheme } = useTheme();

  return (
    <footer className="border-t border-border py-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            {resolvedTheme === 'dark' && <img src="/img/logo.png" alt="Logo" className="mr-2 w-44 mix-blend-screen" />}
            <p className="text-muted-foreground hidden md:block">© 2025 Pascal Zirn. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="https://artstation.com/icyfeva" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Palette className="w-5 h-5" /><span className="text-muted-foreground text-sm">Artstation</span>
            </Link>
            <Link to="https://vimeo.com/masonstyle" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Video className="w-5 h-5" /><span className="text-muted-foreground text-sm">Vimeo</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;