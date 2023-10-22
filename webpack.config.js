const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const config = {
  entry: ["./src/index.ts"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `bundle.js`,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};

module.exports = (argv) => {
  if (argv.mode === "development") {
    config.devtool = "source-map";
  }

  if (argv.mode === "production") {
    config.devtool = false;
  }
  return config;
};
