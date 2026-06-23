## 2024-06-17 - Hidden circular text paths for screen readers
**Learning:** Screen readers often parse circular SVG `<textPath>` text literally, which can result in confusing output for users depending on the text structure and context.
**Action:** Always hide decorative circular SVG text (or SVGs acting as decorative text/icons within buttons/links) with `aria-hidden="true"` and provide a descriptive `aria-label` on the parent interactive element instead.
## 2024-06-23 - Focus management for disabled buttons
**Learning:** Natively disabling a submit button during asynchronous form submission drops screen reader focus to the document body because the button is removed from the focus order.
**Action:** Prefer `aria-disabled="true"` combined with `aria-live="polite"` over native `disabled` attributes on submit buttons to maintain screen reader context, while manually preventing clicks using an `onClick` handler (`e.preventDefault()`).
