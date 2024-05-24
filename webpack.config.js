const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebPackPlugin({
     // title: "html plugin",
      template: "./src/index.html",
      filename: "index.html", //by default
      inject: "head", //or js in body 
      scriptLoading: "defer",
    })
  ],
}