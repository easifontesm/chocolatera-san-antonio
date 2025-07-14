import type { NextConfig } from "next";
const repoName = "chocolatera-san-antonio"; 

const nextConfig: NextConfig = {
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
