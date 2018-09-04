const path = require('path');
const webpack = require('webpack');

const GLOBALS = {
  "process.env.NODE_ENV": JSON.stringify(
    process.env.NODE_ENV.indexOf("production") > -1 ? "production" : process.env.NODE_ENV
  ),
  __DEV__: false
};

module.exports = {
    resolve: {
        extensions: ["*", ".js"],
        alias: {
          '@occmundial/occ-atomic': path.resolve(__dirname, './build/index')
        }
    },
    entry: path.resolve(__dirname, "src/index"),
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "http://occmundial.github.io/occ-atomic/dist/",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.DefinePlugin(GLOBALS),
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
    ],
    module: {
        loaders: [
          {
            test: /\.js?$/,
            loaders: ['babel-loader'],
            include: path.join(__dirname, 'src')
          },
          {
            test: /\.css?$/,
            loaders: ['style-loader', 'css-loader'],
          },
        ]
    }
};