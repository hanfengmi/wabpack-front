const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js"
  },
  module: {
    // loaders: [
    //   {test: /\.css$/, loader: "style-loader!css-loader"}
    // ],
    loaders: [
      {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ]
}
