/** @type {import('next').NextConfig} */
const nextConfig = {
  // for placeholder images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co", // Allow images from placehold.co
        port: "", // No specific port
        pathname: "/**", // Allow all paths
      },
    ],
  },
};

export default nextConfig;
