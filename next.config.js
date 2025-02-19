require('dotenv').config();
module.exports = {
  trailingSlash: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': __dirname,
    };
    return config;
  },
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
};
