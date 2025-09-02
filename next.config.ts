import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true, // enable source maps for production

  async headers() {
    return [
      {
        source: '/(.*)', // apply to all routes
        headers: [
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https:;
              font-src 'self' https:;
              connect-src 'self' https://www.google-analytics.com;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'none';
            `.replace(/\s{2,}/g, ' '),
          },

          // HSTS – start with low max-age for testing
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=86400; includeSubDomains; preload',
          },

          // Cross-Origin-Opener-Policy
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },

          // Cross-Origin-Embedder-Policy
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },

          // Clickjacking Protection (X-Frame-Options)
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
