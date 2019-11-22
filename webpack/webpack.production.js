const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    publicPath: '/',
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
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 70,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.70, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
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
  optimization: {
    minimizer: [
      new CopyWebpackPlugin([
        { from: 'src/*.ico', flatten: true },
        { from: 'src/*.png', flatten: true },
        { from: 'src/*.svg', flatten: true },
        'src/browserconfig.xml',
        'src/robots.txt',
        'src/site.webmanifest',
      ]),
      new TerserWebpackPlugin(),
    ],
  },
});
