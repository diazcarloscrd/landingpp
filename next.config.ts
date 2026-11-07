import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Evitar frenar build si no hay eslint global configurado
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
