# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Project Stack
- TypeScript + React + Vite
- Tailwind CSS for styling with shadcn/ui components
- React Router for routing
- GSAP for animations
- Lucide React for icons

## Essential Commands
- `npm run dev` - Start development server (port 8080)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Non-Standard Patterns
- Uses `@/*` alias for `./src/*` paths
- Custom `cn()` utility function (clsx + tailwind-merge) for conditional class names
- GSAP animations with ScrollTrigger plugin
- Custom button variants defined in `src/components/ui/button.tsx`
- Route-specific components in `src/pages/` directory
- UI components organized in `src/components/ui/` with shadcn structure
- Development-only route widget visible in dev mode (check App.tsx)

## Code Style
- No strict TypeScript mode (strict: false in tsconfig)
- No unused variable checking (noUnusedLocals: false, noUnusedParameters: false)
- No implicit any checking (noImplicitAny: false)
- Uses Poppins font throughout the application
- Custom color palette defined in tailwind.config.ts with CSS variables

## Project Structure
- Pages are in `src/pages/` and automatically routed in `src/App.tsx`
- UI components follow shadcn convention in `src/components/ui/`
- Utility functions in `src/lib/utils.ts`
- Custom hooks in `src/hooks/`
- Static assets in `public/` directory
- Case study pages follow a consistent structure with featured images in `public/img/`

## Important Gotchas
- Animations use GSAP ScrollTrigger which requires cleanup in useEffect
- Mobile number animations differ from desktop (check Home.tsx)
- Some routes are locked/hidden for interview purposes (visible in Home.tsx)
- Custom button variants need to be maintained in `src/components/ui/button.tsx`
- Tailwind classes are merged using `cn()` utility to avoid conflicts