## 2024-10-27 - [Lockfile Noise in PRs]
**Learning:** Running `pnpm install` or other commands that trigger lockfile generation can create massive noise (like a 4000+ line `pnpm-lock.yaml`) in PRs that are meant to be small and focused.
**Action:** Always verify `git status` before committing and avoid staging auto-generated lockfiles unless explicitly intended, especially when constrained by a strict line-limit rule.
## 2024-11-20 - Static Data in Components
**Learning:** Hardcoding static dictionaries or array manipulation rules inside the render loop of functional React components can cause unnecessary allocation and computation during re-renders, impacting client-side performance.
**Action:** Move static data objects, configuration mapping structures, and pure filtering or flattening operations that only rely on constant imports outside of the component function.
## 2024-11-21 - [Next.js Image srcset optimization for fixed containers]
**Learning:** When Next.js `<Image />` components use relative `vw` units in the `sizes` prop (e.g. `100vw, 50vw`), high-resolution displays (like 4K monitors) will request massively oversized source images because the browser calculates the viewport width regardless of whether the image is constrained by a CSS `max-width` container.
**Action:** Always append a fixed pixel cap corresponding to the container's max width at larger breakpoints (e.g., `sizes="(max-width: 1024px) 100vw, 640px"`) to prevent Next.js from generating unnecessary high-resolution variants and save bandwidth.
