const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/scripts/index.js'),
  },
  output: {
    filename: "[name].[contentHash].js",
    path: path.resolve(__dirname, "../dist")
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../src/index.html')
  })],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "imgs"
          }
        }
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts"
          }
        }
      }
    ]
  }
};