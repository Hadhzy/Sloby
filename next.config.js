/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
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
