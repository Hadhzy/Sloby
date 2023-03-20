/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
    ];
  },
};

module.exports = nextConfig;
