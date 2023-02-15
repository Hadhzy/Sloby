/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/editor',
        destination: '/editor/dashboard',
        permanent: true,
        // images: {
        //   remotePatterns: [
        //     {
        //       protocol: 'https',
        //       hostname: 'lh3.googleusercontent.com',
        //       port: '',
        //       pathname: ''
        //     }
        //   ]
        // }
      },
      {
        source: '/api/websocket',
        destination: '/api/websocket.ts',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
