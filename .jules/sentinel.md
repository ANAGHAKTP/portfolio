## 2024-06-17 - Client-side form limits missing
**Vulnerability:** External API forms (Google Forms integration) lack client-side input validation/limits.
**Learning:** Due to the absence of a backend and the use of mode: "no-cors" with direct form submission, there are no payload size protections, which could lead to excessively large payload submissions resulting in resource exhaustion.
**Prevention:** Always enforce client-side `maxLength` attributes on inputs and textareas that interact with external unvalidated endpoints.

## 2025-06-26 - External API Timeout & Error Logging
**Vulnerability:** Hanging requests and verbose error logging on client
**Learning:** `fetch` requests without explicit timeouts can hang indefinitely if the external service (like Google Forms) is slow or unreachable, potentially causing resource exhaustion on the client. Additionally, raw error objects logged to the console can expose internal stack traces or configuration details.
**Prevention:** Always use `AbortController` to enforce timeouts on external API calls. Ensure that `clearTimeout` is called in a `finally` block to prevent memory leaks if the request succeeds. Use sanitized, generic error messages when logging to the console on the client side.
