## 2024-10-27 - [Lockfile Noise in PRs]
**Learning:** Running `pnpm install` or other commands that trigger lockfile generation can create massive noise (like a 4000+ line `pnpm-lock.yaml`) in PRs that are meant to be small and focused.
**Action:** Always verify `git status` before committing and avoid staging auto-generated lockfiles unless explicitly intended, especially when constrained by a strict line-limit rule.
## 2024-11-20 - Static Data in Components
**Learning:** Hardcoding static dictionaries or array manipulation rules inside the render loop of functional React components can cause unnecessary allocation and computation during re-renders, impacting client-side performance.
**Action:** Move static data objects, configuration mapping structures, and pure filtering or flattening operations that only rely on constant imports outside of the component function.
## 2024-12-04 - [React Compiler & Micro-optimizations]
**Learning:** The project's `next.config.mjs` has the React Compiler enabled (`reactCompiler: true`), which automatically memoizes components and values. Therefore, trivial micro-optimizations like hoisting a small `Object.entries` calculation (which isn't expensive) provide negligible real-world impact and are less impactful than architectural improvements.
**Action:** When working in repositories with React Compiler enabled, focus on more significant optimizations (e.g., bundle size, LCP, N+1 queries) instead of trivial re-allocation concerns within render functions, as the compiler often mitigates them automatically.
