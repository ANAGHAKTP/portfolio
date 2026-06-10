## 2025-05-18 - Making Decorative Circular SVG Links Accessible
**Learning:** Circular animated text built with SVG `<textPath>` inside an anchor tag is read incorrectly and redundantly by screen readers, creating a confusing experience when combined with an arrow icon.
**Action:** Always add `aria-hidden="true"` to such decorative SVG elements and provide a single, clear `aria-label` (e.g., "Scroll down to about section") on the parent `<a>` element, along with proper `focus-visible` styles for keyboard navigation.
