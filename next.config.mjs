/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {};
=======
const nextConfig = {
  swcMinify: false, // Disable SWC-based minification
  experimental: {
    swcLoader: false, // Use Babel as a fallback instead of SWC
  },
};
>>>>>>> 6d23ca00c32f9f637b1a55b81bd6beb19903e3c2

export default nextConfig;
