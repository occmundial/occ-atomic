const path = require('path');
const webpack = require('webpack');

const GLOBALS = {
	'process.env.NODE_ENV': JSON.stringify(
		process.env.NODE_ENV.indexOf('development') > -1
			? 'development'
			: process.env.NODE_ENV
	)
};

module.exports = {
	devtool: 'source-map',
	entry: ['./src/index.js'],
	mode: 'development',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.DefinePlugin(GLOBALS),
		new webpack.ProvidePlugin({
			Buffer: ['buffer', 'Buffer']
		})
	],
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
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		}
	},
	resolve: {
		alias: {
			'@occmundial/occ-atomic': path.resolve(__dirname, './build/index')
		}
	}
};
