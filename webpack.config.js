const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['env']
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
            use: 'css-loader?modules',
        }),
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  target: 'web',
  plugins: [
    new ExtractTextPlugin('./assets/styles.css'),
  ]
};
