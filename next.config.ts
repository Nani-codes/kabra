import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "manufacturer.stylemixthemes.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "manufacturer.stylemixthemes.com",
        pathname: "/industrial8/**",
      },
      {
        protocol: "https",
        hostname: "manufacturer.stylemixthemes.com",
        pathname: "/demos/**",
      },
    ],
  },
  // Use app directory as root so tailwindcss resolves from industrial8-next/node_modules
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
