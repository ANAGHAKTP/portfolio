## 2024-06-17 - Hidden circular text paths for screen readers
**Learning:** Screen readers often parse circular SVG `<textPath>` text literally, which can result in confusing output for users depending on the text structure and context.
**Action:** Always hide decorative circular SVG text (or SVGs acting as decorative text/icons within buttons/links) with `aria-hidden="true"` and provide a descriptive `aria-label` on the parent interactive element instead.
## 2026-06-22 - Async Form Submit Accessibility
**Learning:** Using the native `disabled` attribute on submit buttons during async operations causes screen readers to lose focus, creating a confusing experience.
**Action:** Use semantic `aria-disabled` combined with `aria-live="polite"` to maintain focus. Additionally, ensure you prevent default submission behavior (e.g., via `onClick`) when `aria-disabled` is true, and update CSS state modifiers to use `aria-disabled:` instead of `disabled:`.
