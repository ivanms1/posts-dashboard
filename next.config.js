module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["i.pravatar.cc", "picky-app.s3-ap-southeast-1.amazonaws.com"],
  },
};
