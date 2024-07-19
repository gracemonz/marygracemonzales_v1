/** @type {import('next').NextConfig} */

import path from "path";

const nextConfig = {
  basePath: "",
  output: "export",
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join("styles")],
  },
};

export default nextConfig;
