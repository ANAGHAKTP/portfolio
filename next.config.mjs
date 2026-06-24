/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  // 🛡️ Sentinel: Disable X-Powered-By to prevent technology stack information leakage
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          // 🛡️ Sentinel: Add Strict Content-Security-Policy to mitigate XSS attacks
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https://va.vercel-scripts.com; connect-src 'self' https://va.vercel-scripts.com https://docs.google.com; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self' https://docs.google.com;"
          }
        ],
      },
    ];
  },
};

export default nextConfig;
