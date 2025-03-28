import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "praxis-production.ru",
      },
      {
        protocol: "https",
        hostname: "media.praxis-group.ru",
      },
    ],
  },
};

export default nextConfig;
