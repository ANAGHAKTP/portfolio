## 2025-02-12 - Prevent Screen Reader Fragmentation for Visually Split Text
**Learning:** Highly stylized typography that visually splits words (e.g., using nested SVGs inside letters) causes screen readers to read the text in broken fragments instead of the complete word.
**Action:** Always wrap the fragmented visual elements in `aria-hidden="true"` and provide the complete word using a visually hidden `.sr-only` element. Ensure `.sr-only` is defined in Tailwind v4 `globals.css` if missing.
