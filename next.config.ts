import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Use static export for Cloudflare Pages
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;