/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // styledComponentsが利用可能になる
    styledComponents: true,
  },
};

module.exports = nextConfig;
