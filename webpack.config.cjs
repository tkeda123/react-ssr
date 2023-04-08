const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: ['node'],
  externals: [nodeExternals()],
  entry: {
    path: path.resolve(__dirname, './server/index.js'),
  },
  output: { path: path.resolve(__dirname, 'dist'), filename: 'server.js' },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.*(tsx|ts)$/,
        use: [{ loader: 'ts-loader' }],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { url: false } },
        ],
      },
    ],
  },
};
