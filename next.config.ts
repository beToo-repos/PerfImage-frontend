import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'github.com', 'qr-code-adv.vercel.app'],
  },
};

export default nextConfig;
