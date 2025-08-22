import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // force browser to download images
    contentDispositionType: "attachment",
    // prevent embedded scripts from running
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // enable serving SVGs
    dangerouslyAllowSVG: true,
    remotePatterns: [new URL("https://us-west-2.graphassets.com/**")],
  },
};

export default nextConfig;
