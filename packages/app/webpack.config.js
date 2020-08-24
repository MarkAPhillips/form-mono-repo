const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: ["./src/index.tsx"],
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
    chunkFilename: '[name].bundle.js',
    globalObject: "this",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  devServer: {
    contentBase: "./build",
    publicPath: "/",
    historyApiFallback: true,
  },
};

module.exports = config;
