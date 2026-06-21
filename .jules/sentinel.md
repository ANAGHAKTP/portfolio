## 2024-06-17 - Client-side form limits missing
**Vulnerability:** External API forms (Google Forms integration) lack client-side input validation/limits.
**Learning:** Due to the absence of a backend and the use of mode: "no-cors" with direct form submission, there are no payload size protections, which could lead to excessively large payload submissions resulting in resource exhaustion.
**Prevention:** Always enforce client-side `maxLength` attributes on inputs and textareas that interact with external unvalidated endpoints.

## 2024-06-21 - Missing Security Headers in Next.js config
**Vulnerability:** The application was missing a Content-Security-Policy (CSP) header and leaked tech stack information via the `X-Powered-By` header.
**Learning:** Next.js applications by default do not enforce strict CSP headers and include an `X-Powered-By` header. In a purely static or simple app, adding basic security headers like CSP directly in `next.config.mjs` provides strong defense-in-depth against XSS.
**Prevention:** Always ensure `next.config.mjs` disables `poweredByHeader` and includes a robust `Content-Security-Policy` header in the `headers()` function, tailored to the specific external resources the app uses.
