import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', // Important for Netlify static deployment
};

export default nextConfig;
