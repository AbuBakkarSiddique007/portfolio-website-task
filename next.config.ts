import type { NextConfig } from "next";

const isNetlify = process.env.NETLIFY === "true" || !!process.env.NETLIFY_BUILD_HOOK;

const nextConfig: NextConfig = isNetlify
  ? {
      output: "export",
      images: { unoptimized: true },
      experimental: { optimizeCss: true },
      compiler: { removeConsole: process.env.NODE_ENV === "production" },
    }
  : {
      images: {
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 31536000,
        deviceSizes: [640, 768, 1024, 1280],
        imageSizes: [16, 32, 48, 64, 80, 96, 128, 256],
      },
      experimental: { optimizeCss: true },
      compiler: { removeConsole: process.env.NODE_ENV === "production" },
    };

export default nextConfig;
