/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable the Next.js App Router (for app/ directory support)
  experimental: {
    appDir: true,
  },

  // Optional: add strict mode & typed routes
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },

  // Optional: enable source maps for easier debugging
  productionBrowserSourceMaps: true,

  // Optional: configure images (e.g., Unsplash / CDN)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.coverr.co',
      },
    ],
  },
};

export default nextConfig;