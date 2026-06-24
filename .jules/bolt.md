## 2024-10-27 - [Lockfile Noise in PRs]
**Learning:** Running `pnpm install` or other commands that trigger lockfile generation can create massive noise (like a 4000+ line `pnpm-lock.yaml`) in PRs that are meant to be small and focused.
**Action:** Always verify `git status` before committing and avoid staging auto-generated lockfiles unless explicitly intended, especially when constrained by a strict line-limit rule.
## 2024-11-20 - Static Data in Components
**Learning:** Hardcoding static dictionaries or array manipulation rules inside the render loop of functional React components can cause unnecessary allocation and computation during re-renders, impacting client-side performance.
**Action:** Move static data objects, configuration mapping structures, and pure filtering or flattening operations that only rely on constant imports outside of the component function.

## 2024-05-24 - [Next.js Image Component Oversizing]
**Learning:** Using relative `vw` units in Next.js `<Image>` `sizes` props inside fixed-width CSS containers (like `max-w-sm` or `max-w-7xl`) causes the browser to download massively oversized images on high-resolution or ultra-wide displays.
**Action:** Always append a fixed pixel cap (e.g., `sizes="..., 640px"`) to the `sizes` prop that corresponds to the maximum physical layout width of the container in the design to prevent Next.js from generating and serving unnecessarily large image files.
