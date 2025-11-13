/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.NEXT_PUBLIC_HOST_NAME,
        port: process.env.NEXT_PUBLIC_API_PORT,
      },
    ],
  },
};

module.exports = nextConfig;
