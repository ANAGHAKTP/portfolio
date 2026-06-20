## 2024-10-27 - [Lockfile Noise in PRs]
**Learning:** Running `pnpm install` or other commands that trigger lockfile generation can create massive noise (like a 4000+ line `pnpm-lock.yaml`) in PRs that are meant to be small and focused.
**Action:** Always verify `git status` before committing and avoid staging auto-generated lockfiles unless explicitly intended, especially when constrained by a strict line-limit rule.
## 2024-11-20 - Static Data in Components
**Learning:** Hardcoding static dictionaries or array manipulation rules inside the render loop of functional React components can cause unnecessary allocation and computation during re-renders, impacting client-side performance.
**Action:** Move static data objects, configuration mapping structures, and pure filtering or flattening operations that only rely on constant imports outside of the component function.
## 2024-05-24 - [Next.js Image Sizes on Large Screens]
**Learning:** Using relative `vw` units like `50vw` in Next.js `<Image>` `sizes` props without a hard cap causes massive bandwidth waste on large, high-resolution screens (e.g., 4K monitors) when the image is inside a fixed-width container (like `max-w-7xl`). Next.js will generate and download needlessly large image variants (e.g., 2000px wide for a container that never exceeds 640px).
**Action:** Always append a fixed pixel cap (e.g., `..., 640px`) to the `sizes` prop for images within fixed-width layout containers to prevent Next.js from generating and downloading oversized image variants on large displays.
