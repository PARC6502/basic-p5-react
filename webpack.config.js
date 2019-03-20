// Default entry point is ./src/index.js
// output defaults to ./dist/main.js for the main output file
// and to the ./dist folder for any other generated file

const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "./dist"
  }
};

// Config I may need later...
// entry: './src/index.js',
// output: {
//     path: __dirname + '/dist',
//     publicPath: '/',
//     filename: 'bundle.js',
// },
