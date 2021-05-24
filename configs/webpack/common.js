const { resolve } = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = (env) => ({
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader", "source-map-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "awesome-typescript-loader"],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "sass-loader",
        ],
      },
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader:  'css-loader',
            options: {
              modules: {
                localIdentName: env.NODE_ENV === 'production' ? '[hash:base64]' : '[local]_[hash:base64:6]',
                exportLocalsConvention: 'camelCase'
              }
            }
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]&esModule=false",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({ template: "index.html.ejs" }),
    new DefinePlugin({
      'process.env.BUILD_TYPE': JSON.stringify(env.BUILD_TYPE),
    }),
    new FaviconsWebpackPlugin({
      logo: resolve(__dirname, "../../src/assets/img/favicon.svg"),
      cache: true,
      outputPath: resolve(__dirname, "../../dist/icons"),
      prefix: 'icons/',
      inject: true
    }),
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  performance: {
    hints: false,
  },
});
