const webpack = require('webpack')
const path = require('path')
const { resolve } = require('path')

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    client: "./src/client.js",
  },
  entry: [
    // activate Hot Module Reloading for React
    'react-hot-loader/patch',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhst:8080',
    //bundle the client for hot reloading
    //only => means to only hot reload for successful updates
    'webpack/hot/only-dev-server',
    // entry point for the app
    './client.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: false,
  devServer: {
    // enable HMR on the server
    hot: true,
    // match the output path
    contentBase: resolve(__dirname, 'dist'),
    // match the output 'publicPath'
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader?modules', ],
      },
    ]
  },
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
  ],
  cache: true,
};

