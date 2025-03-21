/** @type {import('next').NextConfig} */

const DISABLE_IMAGE_OPTIMIZATION = true;

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    emotion: true,
  },
  output: 'export', // <-- ✅ ADD THIS
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: DISABLE_IMAGE_OPTIMIZATION,
    remotePatterns: [
      { protocol: 'https', hostname: 'www.facebook.com' },
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
      { protocol: 'https', hostname: 'loremflickr.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'cloudflare-ipfs.com' },
      { protocol: 'https', hostname: 'static.xx.fbcdn.net' },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
