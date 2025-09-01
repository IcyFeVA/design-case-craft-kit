# Project Architecture Rules (Non-Obvious Only)

- Pages are organized in src/pages/ directory and automatically routed in src/App.tsx
- UI components follow shadcn convention in src/components/ui/
- Custom hooks are placed in src/hooks/ directory
- Utility functions are in src/lib/utils.ts
- Static assets are placed in public/ directory with appropriate subdirectories
- Case study pages follow a consistent structure with featured images in public/img/
- GSAP animations with ScrollTrigger require cleanup in useEffect return functions
- Mobile animations differ from desktop animations (check Home.tsx implementation)
- Custom button variants must be defined in src/components/ui/button.tsx
- Development-only route widget is visible only in development mode (check App.tsx)
- Some routes are locked/hidden for interview purposes