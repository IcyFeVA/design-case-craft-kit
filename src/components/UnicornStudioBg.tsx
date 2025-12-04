import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export const UnicornStudioBg = () => {
  const { theme } = useTheme();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if desktop on mount and resize
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia('(min-width: 768px)').matches);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    // Only initialize if desktop and dark mode
    if (!isDesktop || theme !== 'dark') {
      return;
    }

    // Initialize Unicorn Studio script
    const w = window as any;
    if (!w.UnicornStudio) {
      w.UnicornStudio = { isInitialized: false };
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js';
      script.onload = () => {
        if (!w.UnicornStudio.isInitialized) {
          w.UnicornStudio.init();
          w.UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(script);
    }
  }, [isDesktop, theme]);

  // Don't render if not desktop or not dark mode
  if (!isDesktop || theme !== 'dark') {
    return null;
  }

  return (
    <div
    //   data-us-project="4Fpn7p07PYhcifhUg8uM"
      data-us-project="75qQehYLDLVINEpdel7N"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
};
