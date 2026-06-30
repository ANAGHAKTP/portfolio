## 2024-10-27 - [Lockfile Noise in PRs]
**Learning:** Running `pnpm install` or other commands that trigger lockfile generation can create massive noise (like a 4000+ line `pnpm-lock.yaml`) in PRs that are meant to be small and focused.
**Action:** Always verify `git status` before committing and avoid staging auto-generated lockfiles unless explicitly intended, especially when constrained by a strict line-limit rule.
## 2024-11-20 - Static Data in Components
**Learning:** Hardcoding static dictionaries or array manipulation rules inside the render loop of functional React components can cause unnecessary allocation and computation during re-renders, impacting client-side performance.
**Action:** Move static data objects, configuration mapping structures, and pure filtering or flattening operations that only rely on constant imports outside of the component function.
## 2024-11-21 - Relative `vw` Units in Next.js Image Component
**Learning:** Using relative `vw` units in Next.js `<Image>` `sizes` props inside fixed-width containers without a fallback can cause Next.js to generate massively oversized images (e.g. `3840px`), wasting bandwidth and memory.
**Action:** Always append a fixed pixel fallback cap (e.g., `640px`) to prevent Next.js from generating massively oversized images. Crucially, ensure all preceding items in the `sizes` string have a valid media condition, as only the final fallback item can omit a media condition to avoid invalid HTML syntax.
