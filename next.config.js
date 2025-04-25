/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      'resend'
    ]
  }
}

module.exports = nextConfig
