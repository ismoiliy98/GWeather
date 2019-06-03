const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
require("@babel/polyfill");

module.exports = {
  entry: ["@babel/polyfill", "./src/main.js"],
  output: {
    filename: "main.js",
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    })
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};
