const path = require("path");
const liveServer = require("live-server");
const dev = process.env.NODE_ENV == "development";
const dotenv = require("dotenv");
const webpack = require("webpack");
dotenv.config();

if (dev) {
  liveServer.start({
    root: "./",
    file: "index.html",
  });
}

module.exports = {
  watch: dev,
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      ,
    ],
  },
  resolve: {
    extensions: [".tsx", ".js", ".ts", ".css"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.MAPBOX_TOKEN": JSON.stringify(
        process.env.MAPBOX_TOKEN || ""
      ),
    }),
  ],
};
