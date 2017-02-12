var path = require('path'),
  nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: [
    './server.js'
  ],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  },
  watch: true,
}
