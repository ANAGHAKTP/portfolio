## 2024-10-27 - [Lockfile Noise in PRs]
**Learning:** Running `pnpm install` or other commands that trigger lockfile generation can create massive noise (like a 4000+ line `pnpm-lock.yaml`) in PRs that are meant to be small and focused.
**Action:** Always verify `git status` before committing and avoid staging auto-generated lockfiles unless explicitly intended, especially when constrained by a strict line-limit rule.
## 2024-11-20 - Static Data in Components
**Learning:** Hardcoding static dictionaries or array manipulation rules inside the render loop of functional React components can cause unnecessary allocation and computation during re-renders, impacting client-side performance.
**Action:** Move static data objects, configuration mapping structures, and pure filtering or flattening operations that only rely on constant imports outside of the component function.
## 2025-02-28 - Image sizes optimization
**Learning:** When using relative vw units in Next.js Image sizes props inside fixed-width containers, you must append a fixed pixel fallback cap to prevent Next.js from generating massively oversized images.
**Action:** Verify the layout structure explicitly before implementing caps, confirming the container classes via codebase inspection to avoid assuming standard Tailwind class constraints.
