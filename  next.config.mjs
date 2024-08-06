/** @type {import('next').NextConfig} */
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

const nextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA).
  // distDir: "./dist", // Changes the build output directory to `./dist/`.
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }

    return config;
  },
};

export default nextConfig;
