const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;
const root = `${__dirname}/../`;
const common = {
  entry: {
    main: path.join(root, 'index.js'),
  },
  output: {
    path: path.join(root, '/dist'),
    filename: 'js/[name]-[hash].js',
    chunkFilename: 'js/[name]-[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attrs: [':data-src'],
          minimize: (env === 'staging' || env === 'production'),
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@app': path.join(root, '/src/app/'),
      '@assets': path.join(root, '/src/assets/'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(root, '/src/index.html'),
    }),
  ],
};

module.exports = common;
