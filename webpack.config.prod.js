const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
    mode: 'production',
    entry: path.resolve(__dirname, "src/index"),
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "http://occmundial.github.io/occ-atomic/dist/",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.DefinePlugin(GLOBALS)
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    },
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
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
        ]
    }
};
