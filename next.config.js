/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/editor',
        destination: '/editor/dashboard',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
