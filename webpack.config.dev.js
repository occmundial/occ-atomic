const path = require('path');
const webpack = require('webpack');

const GLOBALS = {
  "process.env.NODE_ENV": JSON.stringify(
    process.env.NODE_ENV.indexOf("development") > -1 ? "development" : process.env.NODE_ENV
  )
};

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3030',
    './src/index.js'
  ],
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
      new webpack.DefinePlugin(GLOBALS)
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.join(__dirname, 'src'),
        use: {
            loader: 'babel-loader',
        }
      },
      {
        test: /\.css?$/,
        use: {
            loader: 'css-loader',
        }
      },
    ]
  },
  devServer: {
      contentBase: 'dist'
  },
  resolve: {
    alias: {
      '@occmundial/occ-atomic': path.resolve(__dirname, './build/index')
    }
  }
};
