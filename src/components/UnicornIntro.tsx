import { useEffect, useState } from 'react';

export const UnicornIntro = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        // Initialize Unicorn Studio script
        const w = window as any;

        // Load script if not already loaded
        if (!document.querySelector('script[src*="unicornStudio"]')) {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js';
            script.onload = () => {
                w.UnicornStudio?.init?.();
            };
            document.head.appendChild(script);
        } else if (w.UnicornStudio?.init) {
            // Script already loaded, just init
            w.UnicornStudio.init();
        }
    }, [mounted]);

    if (!mounted) return null;

    return (
        <div
            data-us-project="9SWNOHUqkgXEONLcFgwB"
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
