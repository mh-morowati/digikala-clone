import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
     },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
     },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
};

export default nextConfig;
