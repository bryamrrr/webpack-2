const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/server.jsx',
  output: {
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
           {
             loader: 'css-loader',
             options: {
               modules: true,
               localIdentName: '[path][name]__[local]--[hash:base64:5]'
             }
           }
         ],
        }),
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  target: 'node'
};