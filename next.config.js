/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'fsw-store.s3.sa-east-1.amazonaws.com',
    ],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
