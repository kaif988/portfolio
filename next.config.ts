import { output } from "framer-motion/client";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "192.168.29.111",
    "192.168.29.208",
    "localhost"
  ],
  output: 'standalone',
};

export default nextConfig;
