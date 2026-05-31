import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dzpz47k6dvo72.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
