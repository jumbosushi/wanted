const path = require('path')

module.exports = {
  entry: {
    client: "./src/client.js",
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
      },
    ],
  },
};
