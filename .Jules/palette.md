## 2024-06-17 - Hidden circular text paths for screen readers
**Learning:** Screen readers often parse circular SVG `<textPath>` text literally, which can result in confusing output for users depending on the text structure and context.
**Action:** Always hide decorative circular SVG text (or SVGs acting as decorative text/icons within buttons/links) with `aria-hidden="true"` and provide a descriptive `aria-label` on the parent interactive element instead.
## 2025-06-27 - Ligature Icon Accessibility
**Learning:** Font-based ligature icons (like `material-icons`) read out their literal text values (e.g., "east", "check_circle") to screen readers if not properly hidden.
**Action:** Always add `aria-hidden="true"` to `material-icons` ligatures (or any ligature-based icon implementation) and ensure the parent interactive element has a descriptive `aria-label` or visible text alternative.

## 2024-06-30 - Screen Reader Parsing of Fragmented Text
**Learning:** Highly stylized typography (like splitting a word with SVGs) causes screen readers to read the text in broken fragments (e.g., "PORTF O LI O").
**Action:** Always wrap visual text fragments in `aria-hidden="true"` and provide a complete `.sr-only` text alternative for assistive technologies to ensure clear pronunciation.
