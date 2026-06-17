## 2024-06-17 - Hidden circular text paths for screen readers
**Learning:** Screen readers often parse circular SVG `<textPath>` text literally, which can result in confusing output for users depending on the text structure and context.
**Action:** Always hide decorative circular SVG text (or SVGs acting as decorative text/icons within buttons/links) with `aria-hidden="true"` and provide a descriptive `aria-label` on the parent interactive element instead.
