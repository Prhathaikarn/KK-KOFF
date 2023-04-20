// Other Module
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");

const { merge } = require("webpack-merge");

// My Module
const commonConfig = require("./webpack.config");

//
const prodConfig = merge(commonConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].min.js", /// .min = minify == remove all code comment and white space
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  // PLUGIN
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],

  optimization: {
    minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
            filename: 'index.min.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
    ],
},

});

module.exports = prodConfig;
