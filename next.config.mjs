/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {};

export default nextConfig;
=======
const nextConfig = {
    swcMinify: false, // Disable SWC-based minification
    experimental: {
      swcLoader: false, // Use Babel as a fallback instead of SWC
    },
  };
  
  export default nextConfig;
  
>>>>>>> 67b14e2 (Initial commit)
