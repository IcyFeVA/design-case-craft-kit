import { Link } from "react-router-dom";
import { Palette, Video } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600">© 2025 Pascal Zirn. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="https://artstation.com/icyfeva" target="_blank" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Palette className="w-5 h-5" /><span className="text-gray-600 text-sm">Artstation</span>
            </Link>
            <Link to="https://vimeo.com/masonstyle" target="_blank" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Video className="w-5 h-5" /><span className="text-gray-600 text-sm">Vimeo</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;