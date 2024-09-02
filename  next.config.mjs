/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    instrumentationHook: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
