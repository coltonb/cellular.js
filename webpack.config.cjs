const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    library: 'cellular',
    filename: 'cellular.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
};
