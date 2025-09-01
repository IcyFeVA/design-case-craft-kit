# Project Documentation Rules (Non-Obvious Only)

- Project is a portfolio website for a product designer, not a typical web application
- Case study pages follow a consistent structure with featured images in public/img/
- Some routes are locked/hidden for interview purposes (visible in Home.tsx)
- UI components follow shadcn convention in src/components/ui/
- Project uses GSAP for complex animations, particularly in Home.tsx
- Mobile animations differ significantly from desktop animations
- Custom button variants are defined in src/components/ui/button.tsx
- Development-only route widget is visible only in development mode (check App.tsx)
- Project structure organizes pages in src/pages/ directory with automatic routing in App.tsx