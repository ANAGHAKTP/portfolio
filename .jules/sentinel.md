## 2023-10-27 - Frontend Form Validation and Error Handling
**Vulnerability:** Lack of input length limits, timeouts, and verbose error logging on contact form.
**Learning:** Client-side forms without a backend are vulnerable to hanging connections and potential info leaks via unhandled fetch errors.
**Prevention:** Implement AbortControllers for timeouts, max length constraints on fields, and generic fallback messages in try-catch blocks.
