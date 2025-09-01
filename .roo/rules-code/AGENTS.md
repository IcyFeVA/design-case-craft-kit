# Project Coding Rules (Non-Obvious Only)

- Always use cn() utility from src/lib/utils.ts for conditional class names (combines clsx + tailwind-merge)
- GSAP animations require ScrollTrigger cleanup in useEffect return functions
- Custom button variants must be defined in src/components/ui/button.tsx
- Path aliases use @/* for ./src/* (configured in tsconfig.json)
- All new components should follow shadcn/ui structure in src/components/ui/
- Case study pages follow a consistent structure with featured images in public/img/
- Mobile animations differ from desktop (check Home.tsx implementation)
- Custom hooks should be placed in src/hooks/ directory
- Route-specific components belong in src/pages/ directory
- Static assets should be placed in public/ directory with appropriate subdirectories