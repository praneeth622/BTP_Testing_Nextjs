import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker deployment
  output: 'standalone',
  
  // Configure images for production
  images: {
    unoptimized: true,
  },
  
  // Configure for SAP BTP deployment
  trailingSlash: false,
  
  // Ignore specific files during build
  webpack: (config, { isServer }) => {
    // Ignore binary files and deployment scripts
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/cf', '**/cf-cli.tgz', '**/deploy.sh', '**/.git/**']
    };
    
    return config;
  },
  
  // Environment variables configuration
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;