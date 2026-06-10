
## 2024-06-11 - Add Default Security Headers
**Vulnerability:** Missing standard HTTP security headers.
**Learning:** Next.js doesn't apply these by default. Clickjacking, XSS, and MIME-sniffing protections should be explicitly defined in `next.config.mjs` for statically exported or deployed Next.js apps to establish a defense in depth baseline.
**Prevention:** Include a standard set of security headers (`Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`, `Permissions-Policy`, `Referrer-Policy`, `X-XSS-Protection`) in the `next.config.mjs` template when initiating new Next.js projects.
