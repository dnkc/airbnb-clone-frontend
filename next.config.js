/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  images: {
    domains: ["links.papareact.com"],
  },
};

module.exports = withPlugins([[withImages]], nextConfig);

module.exports = nextConfig;
