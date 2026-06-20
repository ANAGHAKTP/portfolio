## 2024-06-17 - Hidden circular text paths for screen readers
**Learning:** Screen readers often parse circular SVG `<textPath>` text literally, which can result in confusing output for users depending on the text structure and context.
**Action:** Always hide decorative circular SVG text (or SVGs acting as decorative text/icons within buttons/links) with `aria-hidden="true"` and provide a descriptive `aria-label` on the parent interactive element instead.

## 2026-06-20 - Asynchronous Form Submit Buttons
**Learning:** Using the native `disabled` attribute on submit buttons during asynchronous operations drops screen reader focus, creating a confusing experience.
**Action:** Use `aria-disabled="true"` combined with `aria-live="polite"` on submit buttons during async submissions to maintain focus and reliably announce status changes, styling with Tailwind's native `aria-disabled:` modifiers.
