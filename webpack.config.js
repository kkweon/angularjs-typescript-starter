const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devtool: "inline-source-map",
  devServer: {
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "AngularJS TypeScript",
      template: "./src/html/index.html",
    }),
  ],
  mode: "development",
};
