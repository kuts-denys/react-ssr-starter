const baseConfig = require('./client.base');

const generateSourceMap = process.env.OMIT_SOURCEMAP !== 'true';

const config = {
  ...baseConfig,
  mode: 'production',
  devtool: generateSourceMap ? 'source-map' : false,
  performance: {
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
};

config.output.filename = 'bundle.[hash:8].js';

module.exports = config;
