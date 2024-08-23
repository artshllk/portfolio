/** @type {import('next').NextConfig} */
import path from "path";
import fileLoader from "file-loader";

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add a rule to handle PDF files
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/files",
            outputPath: "static/files",
            name: "[name].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
