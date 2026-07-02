## 2025-06-29 - Prevent DOM-based form action hijacking
**Vulnerability:** The contact form relied on `form.action` extracted from the DOM event target to submit data.
**Learning:** This exposes the application to DOM-based form action hijacking if the DOM is compromised (e.g., via XSS or browser extensions), allowing an attacker to redirect sensitive form data to a malicious endpoint.
**Prevention:** Always use a trusted configuration source (like the imported `contactData` object) for critical API endpoints in client-side code instead of relying on mutable DOM attributes.
## 2025-06-29 - Prevent basic XSS payloads from forwarding to external backend via form
**Vulnerability:** The contact form forwarded unsanitized `FormData` directly to Google Forms. While Google Forms sanitizes data on its end, the application lacked client-side defense-in-depth sanitization, potentially allowing basic XSS payloads to pass through the frontend. Furthermore, relying entirely on HTML5 validation for email fields allows bypass if an attacker intercepts and modifies the request.
**Learning:** External integrations without a custom backend require robust client-side validation and sanitization as a first line of defense before transmission, even if the external service provides its own security measures.
**Prevention:** Always implement strict input validation (e.g., regex checks) and basic sanitization (e.g., escaping `<` and `>` to HTML entities) on the `FormData` entries before submitting to external APIs.
