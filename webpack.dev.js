// Other Module
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const { merge } = require("webpack-merge");

// My Module
const commonConfig = require("./webpack.config");

//
const devConfig = merge(commonConfig, {
  mode: "development",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "[name].[hash].js",
//     assetModuleFilename: "images/[hash][ext][query]",
//   },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  // PLUGIN
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
    }),
  ],
});

module.exports = devConfig;
