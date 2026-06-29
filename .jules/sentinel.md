## 2025-06-29 - Prevent DOM-based form action hijacking
**Vulnerability:** The contact form relied on `form.action` extracted from the DOM event target to submit data.
**Learning:** This exposes the application to DOM-based form action hijacking if the DOM is compromised (e.g., via XSS or browser extensions), allowing an attacker to redirect sensitive form data to a malicious endpoint.
**Prevention:** Always use a trusted configuration source (like the imported `contactData` object) for critical API endpoints in client-side code instead of relying on mutable DOM attributes.
