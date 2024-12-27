/** @type {import('next').NextConfig} */


const nextConfig = {
  swcMinify: false, // Disable SWC-based minification
  experimental: {
    swcLoader: false, // Use Babel as a fallback instead of SWC
  },
  images: {
    domains: ['drive.google.com'], // Add 'drive.google.com' here
  },
};


export default nextConfig;
