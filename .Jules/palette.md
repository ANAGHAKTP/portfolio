## 2024-05-24 - Form Label Association and Decorative Icons
**Learning:** Found that custom form implementations often miss `htmlFor` bindings and use decorative icons (like Google Material Icons text "east") that screen readers might read aloud literally, confusing users.
**Action:** Always verify custom forms have explicit `htmlFor`-to-`id` mappings and append `aria-hidden="true"` to icon components/spans that provide no semantic meaning.
