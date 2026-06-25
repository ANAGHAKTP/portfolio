## 2024-06-17 - Client-side form limits missing
**Vulnerability:** External API forms (Google Forms integration) lack client-side input validation/limits.
**Learning:** Due to the absence of a backend and the use of mode: "no-cors" with direct form submission, there are no payload size protections, which could lead to excessively large payload submissions resulting in resource exhaustion.
**Prevention:** Always enforce client-side `maxLength` attributes on inputs and textareas that interact with external unvalidated endpoints.

## 2025-06-25 - Prevent DOM Clobbering in form action and mitigate DoS
**Vulnerability:** The contact form previously relied on `form.action` inside the `handleSubmit` event loop, making it susceptible to DOM clobbering if an injected input was named "action". It also lacked client-side rate limiting on form submissions leading to the Google Form, opening a vector for spam/DoS.
**Learning:** External unauthenticated endpoints (like Google Forms) can be spammed if no client-side limits are present. `form.action` can be overridden by user inputs named `action`, leading to SSRF or hijacking.
**Prevention:** Always reference strict URL configs (like `contactData.contactForm.action`) rather than dynamically resolving the form's attribute. Additionally, implement client-side limits (e.g. `useRef` based cooldowns) to mitigate spam where server-side validation isn't present.
