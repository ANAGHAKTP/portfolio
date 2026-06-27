## 2024-06-17 - Client-side form limits missing
**Vulnerability:** External API forms (Google Forms integration) lack client-side input validation/limits.
**Learning:** Due to the absence of a backend and the use of mode: "no-cors" with direct form submission, there are no payload size protections, which could lead to excessively large payload submissions resulting in resource exhaustion.
**Prevention:** Always enforce client-side `maxLength` attributes on inputs and textareas that interact with external unvalidated endpoints.
## 2024-06-27 - Unbounded Fetch Requests Missing Timeout
**Vulnerability:** External API requests using `fetch` lack a timeout, making them susceptible to hanging indefinitely if the endpoint is unresponsive.
**Learning:** `fetch` does not have a built-in timeout mechanism. An unresponsive server can cause requests to hang, leading to client-side resource exhaustion.
**Prevention:** Always use an `AbortController` combined with `setTimeout` to enforce timeouts on `fetch` requests.
## 2024-06-27 - Leaking Errors via console.error
**Vulnerability:** The application was passing the raw `error` object directly to `console.error` in the generic catch block for form submission.
**Learning:** Raw error objects can contain internal stack traces, API keys (if poorly configured), or internal module names that shouldn't be exposed to the end-user via their browser console.
**Prevention:** Sanitize error outputs in `catch` blocks before logging, using generic string messages for client-side environments.
