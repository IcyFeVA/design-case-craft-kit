# Project Debug Rules (Non-Obvious Only)

- GSAP ScrollTrigger animations require proper cleanup in useEffect return functions to prevent memory leaks
- Mobile animations behave differently from desktop animations (check Home.tsx implementation)
- Development-only route widget is visible only in development mode (check App.tsx)
- Some routes are locked/hidden for interview purposes and won't be accessible
- Custom button variants need to be maintained in src/components/ui/button.tsx
- Tailwind classes are merged using cn() utility which can sometimes cause unexpected styling conflicts
- Animation timelines in Home.tsx need to be carefully managed to prevent performance issues