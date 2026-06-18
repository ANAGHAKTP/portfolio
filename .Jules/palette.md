## 2024-06-17 - Hidden circular text paths for screen readers
**Learning:** Screen readers often parse circular SVG `<textPath>` text literally, which can result in confusing output for users depending on the text structure and context.
**Action:** Always hide decorative circular SVG text (or SVGs acting as decorative text/icons within buttons/links) with `aria-hidden="true"` and provide a descriptive `aria-label` on the parent interactive element instead.
## 2025-02-20 - Enhancing Async Status Button Accessibility
**Learning:** Native `disabled` attributes on submit buttons during async operations can cause screen readers to lose focus, preventing critical status messages (e.g., "Sending...") from being read to the user. Using `aria-live` is also necessary to reliably broadcast the completion state.
**Action:** Replace `disabled` with `aria-disabled` and conditionally apply visual styling (`opacity`, `cursor-not-allowed`) for async state buttons. Add `aria-live="polite"` to the container. Also ensure internal icons use `aria-hidden="true"` so screen readers don't read out literal icon names during the status update.
