module.exports = {
  images: {
    domains: ["www.datocms-assets.com"],
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  },
};
