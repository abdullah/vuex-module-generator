const path = require('path');

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "vue-module-factory.min.js",
    library: "VuexModuleFactory",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  devtool: "source-map",
  target: "web",
}
