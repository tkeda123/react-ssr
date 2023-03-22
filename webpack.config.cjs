const path = require('path');

module.exports = {
  mode: 'development',
  target: ['node'],
  entry: {
    path: path.resolve(__dirname, './server/index.cjs'),
  },
  output: { path: path.resolve(__dirname, 'dist'), filename: 'bundle.js' },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
  },
};
