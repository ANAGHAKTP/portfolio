## 2024-06-17 - Client-side form limits missing
**Vulnerability:** External API forms (Google Forms integration) lack client-side input validation/limits.
**Learning:** Due to the absence of a backend and the use of mode: "no-cors" with direct form submission, there are no payload size protections, which could lead to excessively large payload submissions resulting in resource exhaustion.
**Prevention:** Always enforce client-side `maxLength` attributes on inputs and textareas that interact with external unvalidated endpoints.

## 2024-06-21 - Security Headers Missing
**Vulnerability:** The application was missing basic security headers (like Content-Security-Policy) and leaking the Next.js tech stack.
**Learning:** Even static/frontend-only Next.js applications require fundamental security headers in `next.config.mjs` to mitigate XSS and prevent fingerprinting. Next.js broadcasts its presence by default.
**Prevention:** Always set `poweredByHeader: false` in `next.config.mjs` and configure standard security headers, particularly a restrictive Content-Security-Policy tailored to the app's external dependencies.
