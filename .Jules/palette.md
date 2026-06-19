## 2024-06-17 - Hidden circular text paths for screen readers
**Learning:** Screen readers often parse circular SVG `<textPath>` text literally, which can result in confusing output for users depending on the text structure and context.
**Action:** Always hide decorative circular SVG text (or SVGs acting as decorative text/icons within buttons/links) with `aria-hidden="true"` and provide a descriptive `aria-label` on the parent interactive element instead.

## 2025-02-24 - Async Button Accessibility
**Learning:** Using the native `disabled` attribute on an async form submission button causes screen readers to lose focus, interrupting the announcement of the loading state.
**Action:** Use `aria-disabled="true"` paired with `aria-live="polite"` to maintain focus and reliably announce status changes like "Sending..." and "Sent!".
