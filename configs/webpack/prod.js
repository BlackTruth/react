const { merge } = require('webpack-merge');
const { resolve } = require('path');

const commonConfig = require('./common');
//const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => merge(commonConfig(env), {
  mode: 'production',
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, '../../dist'),
  },
  devtool: 'source-map',
  plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     { from: resolve(__dirname, '../..', "static.json"), to:resolve(__dirname, '../../dist') },
    //   ],
    // }),

  ],
});
