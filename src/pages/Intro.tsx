import { UnicornIntro } from "@/components/UnicornIntro";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Intro = () => {
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth < 768) {
                navigate('/home', { replace: true });
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const timer = setTimeout(() => {
            setShowButton(true);
        }, 2000);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', checkMobile);
        };
    }, [navigate]);

    return (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden">
            {/* Animation Container - Fixed 700x250px centered */}
            <div className="relative w-[700px] h-[250px] flex items-center justify-center">
                <UnicornIntro />
            </div>

            {/* Enter Button - Slightly below the animation */}
            <div
                className={`z-10 transition-all duration-1000 transform ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
            >
                <Link to="/home">
                    <Button
                        size="lg"
                        className="text-white border-white/20 hover:bg-white/10 hover:text-white transition-all duration-300 text-lg px-8 py-6 group bg-black/50 backdrop-blur-sm"
                    >
                        E N T E R
                        {/* <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /> */}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Intro;
