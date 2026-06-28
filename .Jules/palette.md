## 2024-06-17 - Hidden circular text paths for screen readers
**Learning:** Screen readers often parse circular SVG `<textPath>` text literally, which can result in confusing output for users depending on the text structure and context.
**Action:** Always hide decorative circular SVG text (or SVGs acting as decorative text/icons within buttons/links) with `aria-hidden="true"` and provide a descriptive `aria-label` on the parent interactive element instead.
## 2025-06-27 - Ligature Icon Accessibility
**Learning:** Font-based ligature icons (like `material-icons`) read out their literal text values (e.g., "east", "check_circle") to screen readers if not properly hidden.
**Action:** Always add `aria-hidden="true"` to `material-icons` ligatures (or any ligature-based icon implementation) and ensure the parent interactive element has a descriptive `aria-label` or visible text alternative.
## 2025-06-28 - Missing Keyboard Navigation Focus States
**Learning:** This application's interactive elements lacked clear `focus-visible` styles, rendering keyboard navigation extremely difficult for users navigating by `Tab`.
**Action:** Consistently added `focus-visible` utility classes (e.g., `focus-visible:outline-2 focus-visible:outline-mustard focus-visible:outline-offset-4`) to all interactive elements, matching their existing hover states to provide clear, reliable visual feedback for keyboard users.
