const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const root = `${__dirname}/../`;
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(root, '/src'),
    open: true,
    openPage: 'index.html',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'file-loader',
              limit: 10000,
              name: '[name]-[hash].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
      {
        test: /\.(pdf|mp4|webm|ogg|woff2|woff|eot|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
