import { useEffect } from 'react';

export const UnicornStudioBg = () => {
  useEffect(() => {
    // Initialize Unicorn Studio script
    if (!window.UnicornStudio) {
      (window as any).UnicornStudio = { isInitialized: false };
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js';
      script.onload = () => {
        if (!(window as any).UnicornStudio.isInitialized) {
          (window as any).UnicornStudio.init();
          (window as any).UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(script);
    }
  }, []);

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
