let path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './app/index.jsx',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
