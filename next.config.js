/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.car-logos.org',
      },
      {
        protocol: 'https',
        hostname: 'igbpxesaulnzqaiqdjol.supabase.co',
      },
    ],
  },
  // Ensure trailing slashes for static export
  trailingSlash: true,
};

module.exports = nextConfig;