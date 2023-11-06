/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  images: {
    domains: ["fold.money"],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          name: "static/media/[name].[ext]",
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
