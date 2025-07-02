import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit plain HTML so the site can be served from S3/CloudFront without a NodeJS runtime
  output: "export",
  // Disable the Next.js image optimization pipeline (not available when using `export`)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
