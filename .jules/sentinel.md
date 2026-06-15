## 2024-05-18 - Input Length Limits on External Forms
**Vulnerability:** Contact forms interacting with external APIs (like Google Forms) lacked input length limitations (`maxLength`).
**Learning:** Even without a custom backend API, client-side input validation such as length limits is a critical defense-in-depth measure. It prevents excessively large payloads from being constructed, which could lead to client-side resource exhaustion or abuse of the external endpoint.
**Prevention:** Always enforce reasonable `maxLength` attributes on all form inputs and textareas, regardless of whether the form submits to an internal or external endpoint.
