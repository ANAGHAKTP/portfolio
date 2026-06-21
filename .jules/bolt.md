## 2024-10-27 - [Lockfile Noise in PRs]
**Learning:** Running `pnpm install` or other commands that trigger lockfile generation can create massive noise (like a 4000+ line `pnpm-lock.yaml`) in PRs that are meant to be small and focused.
**Action:** Always verify `git status` before committing and avoid staging auto-generated lockfiles unless explicitly intended, especially when constrained by a strict line-limit rule.
## 2024-11-20 - Static Data in Components
**Learning:** Hardcoding static dictionaries or array manipulation rules inside the render loop of functional React components can cause unnecessary allocation and computation during re-renders, impacting client-side performance.
**Action:** Move static data objects, configuration mapping structures, and pure filtering or flattening operations that only rely on constant imports outside of the component function.
## 2024-11-21 - [Next.js Image Sizes in Fixed Containers]
**Learning:** Using purely relative `vw` units in Next.js `<Image>` `sizes` props inside fixed-width layout containers (like `max-w-7xl` or `max-w-sm`) will cause Next.js to generate and download unnecessarily oversized images on high-resolution displays.
**Action:** Always append a fixed pixel cap (e.g., `sizes="..., 640px"`) corresponding to the maximum rendered size of the container to prevent oversized asset downloads on large screens.
