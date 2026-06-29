## 2024-10-27 - [Lockfile Noise in PRs]
**Learning:** Running `pnpm install` or other commands that trigger lockfile generation can create massive noise (like a 4000+ line `pnpm-lock.yaml`) in PRs that are meant to be small and focused.
**Action:** Always verify `git status` before committing and avoid staging auto-generated lockfiles unless explicitly intended, especially when constrained by a strict line-limit rule.
## 2024-11-20 - Static Data in Components
**Learning:** Hardcoding static dictionaries or array manipulation rules inside the render loop of functional React components can cause unnecessary allocation and computation during re-renders, impacting client-side performance.
**Action:** Move static data objects, configuration mapping structures, and pure filtering or flattening operations that only rely on constant imports outside of the component function.
## 2024-05-24 - Invalid HTML Syntax in Image sizes
**Learning:** Appending a pixel cap fallback (e.g., `, 640px`) to a Next.js Image `sizes` string without ensuring all preceding items have a valid media condition (e.g., `(max-width: 1200px) 50vw`) results in invalid HTML syntax, as only the final fallback item can omit a media condition.
**Action:** When updating `sizes`, always ensure all items except the final fallback specify a valid CSS media condition.
