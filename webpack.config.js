const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: ['./bin/client/index.js']
  },
  stats: 'errors-only',
  output: {
    path: path.resolve(__dirname,'dist','js'),
    filename: '[name].js',
    publicPath: '/js/'
  },
  cache: {
    type: 'filesystem',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader'},
      { test: /\.css$/, use: [ 'style-loader', 'css-loader']},
      { test: /\.(png|jp(e*)g|gif)$/i, use: [ { loader: 'url-loader', options: { limit: 8192 } } ] }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.es6', '.json']
  },
  devServer: {
    historyApiFallback: true
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist', 'index.html'),
      chunks: ['main'],
      template: './bin/templates/index.html'
    })
  ],
  watch: false
}