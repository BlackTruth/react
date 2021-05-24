const { merge } = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');

let isLinux = process.platform === "linux";

module.exports = (env) => merge(commonConfig(env), {
  mode: 'development',
  target: "web",
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.tsx'
  ],
  devServer: {
    hot: true,
    open: isLinux ? 'google-chrome' : true,
    historyApiFallback: true,
  },
  output: {
    publicPath: "/"
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
});
