## 2024-06-17 - Hidden circular text paths for screen readers
**Learning:** Screen readers often parse circular SVG `<textPath>` text literally, which can result in confusing output for users depending on the text structure and context.
**Action:** Always hide decorative circular SVG text (or SVGs acting as decorative text/icons within buttons/links) with `aria-hidden="true"` and provide a descriptive `aria-label` on the parent interactive element instead.
## 2024-05-18 - Keyboard Focus on Static Div Cards
**Learning:** Adding keyboard accessibility (`tabIndex`, `onKeyDown`) to static elements (like `div` acting as cards) in a Next.js App Router application forces the component to become a Client Component because event listeners like `onKeyDown` are not supported in Server Components.
**Action:** Next time you add keyboard interaction handlers to static elements in Next.js, immediately add `"use client";` to the top of the file to prevent server/client rendering errors.
