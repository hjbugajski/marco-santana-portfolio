/** @type {import('next').NextConfig} */
const path = require('path');

const production = process.env.NODE_ENV === 'production';

const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: production ? 'https' : 'http',
        hostname: production ? 'marco-santana.com' : 'localhost',
        pathname: '/media/**'
      }
    ]
  },
  webpack: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '~assets': path.resolve(__dirname, './src/assets'),
          '~components': path.resolve(__dirname, './src/components'),
          '~graphql': path.resolve(__dirname, './src/graphql'),
          '~interfaces': path.resolve(__dirname, './src/interfaces'),
          '~scss': path.resolve(__dirname, './src/scss'),
          '~utilities': path.resolve(__dirname, './src/utilities')
        }
      }
    };
  }
};

module.exports = nextConfig;
