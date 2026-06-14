## 2026-06-14 - Circular SVG Text Accessibility
**Learning:** Screen readers often parse circular SVG `<textPath>` text literally, which can lead to confusing readouts (e.g., 'Scroll down bullet Scroll down bullet').
**Action:** Hide decorative circular SVG text with `aria-hidden="true"` and provide a descriptive `aria-label` on the parent interactive element.
