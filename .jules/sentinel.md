## 2025-06-29 - Prevent DOM-based form action hijacking
**Vulnerability:** The contact form relied on `form.action` extracted from the DOM event target to submit data.
**Learning:** This exposes the application to DOM-based form action hijacking if the DOM is compromised (e.g., via XSS or browser extensions), allowing an attacker to redirect sensitive form data to a malicious endpoint.
**Prevention:** Always use a trusted configuration source (like the imported `contactData` object) for critical API endpoints in client-side code instead of relying on mutable DOM attributes.

## 2025-06-29 - Framework Vulnerabilities (Next.js)
**Vulnerability:** The project was running `next@16.1.6`, which is susceptible to numerous known vulnerabilities including XSS, Cache Poisoning, and DoS attacks based on GitHub advisories.
**Learning:** Core framework dependencies often contain significant attack surfaces and need to be kept up-to-date even in static or client-side-heavy sites to mitigate edge cases like Image Optimization DoS or server-side cache-poisoning risks.
**Prevention:** Regularly audit and update core dependencies (e.g., `next`) to their latest stable or patched versions (>=16.2.5).
