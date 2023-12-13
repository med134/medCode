/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  distDir: 'build',
  swcMinify: true,
  generateEtags: false,
  output: 'standalone',
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  experimental: {
    mdxRs: true,
    typedRoutes: true,
    serverActions: true,
    serverActions: {
      allowedOrigins: ['medcode.dev', '*.medcode.dev'],
    },
  },
  poweredByHeader: false,
  compress: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "books.google.com/books/content",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
    minimumCacheTTL: 1500000,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
