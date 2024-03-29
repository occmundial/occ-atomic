const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	resolve: {
		extensions: ['*', '.js'],
		alias: {
			'@occmundial/occ-atomic': path.resolve(__dirname, './build/index')
		}
	},
	mode: 'production',
	entry: path.resolve(__dirname, 'src/index'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'http://occmundial.github.io/occ-atomic/dist/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
			__DEV__: false
		}),
		new webpack.ProvidePlugin({
			Buffer: ['buffer', 'Buffer']
		})
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					ecma: 6
				},
				extractComments: false
			})
		]
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				include: path.join(__dirname, 'src'),
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css?$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
			}
		]
	}
};
