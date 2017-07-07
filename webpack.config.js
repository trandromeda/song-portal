var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new webpack.DefinePlugin({
      UNSPLASH_APPID: JSON.stringify('0f54ed67488c83cfd7020132c0c66f39439a724452e7d1b61cb22cb1802e4bce'),
      UNSPLASH_SECRET: JSON.stringify('088f1465e458cb90818a9b8fb3ebe9d0365a2c271ab008874a7ec1ad39eb64f5'),
      UNSPLASH_CALLBACK: JSON.stringify('urn:ietf:wg:oauth:2.0:oob')
    })
  ]
};
