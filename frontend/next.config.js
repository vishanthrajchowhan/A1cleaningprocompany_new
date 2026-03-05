/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for production
  reactStrictMode: true,
  swcMinify: true,
  
  // Reduce memory usage
  experimental: {
    // Disable source maps in production to save memory
    productionBrowserSourceMaps: false,
  },
  
  // Optimize images
  images: {
    unoptimized: true, // Use if you don't need Next.js image optimization
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/api/:path*',
      },
    ];
  },
}

module.exports = nextConfig
