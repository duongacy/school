/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // allowedDevOrigins: ["127.0.0.1"],
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_API_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_API_HOST,
        port: process.env.NEXT_PUBLIC_API_PORT,
      },
    ],
  },
};

module.exports = nextConfig;
