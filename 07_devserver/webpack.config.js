const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const pathsToClean = ["dist"];

const cleanOptions = {
  verbose: true,
  dry: false
};

module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js?[hash]"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.html$/,
        exclude: /(node_modules)/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]?[hash]"
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new ExtractTextPlugin("./styles.css?[hash]"),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      title: "Hello Webworker",
      template: "./templates/index.ejs"
    })
  ]
};
