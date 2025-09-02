import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true, // enable source maps in production

  async headers() {
    return [
      {
        source: "/(.*)", // apply to all routes
        headers: [
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com blob:;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: https:;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://www.google-analytics.com https://cdn.jsdelivr.net https://unpkg.com;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'none';
            `.replace(/\s{2,}/g, " "), // remove extra whitespace
          },

          // HSTS – enforce HTTPS
          {
            key: "Strict-Transport-Security",
            value: "max-age=86400; includeSubDomains; preload",
          },

          // Cross-Origin-Opener-Policy
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },

          // Cross-Origin-Embedder-Policy
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },

          // Clickjacking protection
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
