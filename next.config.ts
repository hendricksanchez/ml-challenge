import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("http://http2.mlstatic.com/**"),
      new URL("https://http2.mlstatic.com/**"),
    ],
  },
};

export default nextConfig;
