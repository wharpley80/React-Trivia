var path = require('path');
var common = require('./webpack.config');
var merge = require('webpack-merge');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: "production",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './dist/bundle[contenthash].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			filename: './dist/index.html'
		})
	],
});
