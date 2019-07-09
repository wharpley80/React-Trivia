var distpath = require('path');
var common = require('./webpack.config');
var merge = require('webpack-merge');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: "production",
	output: {
		path: distpath.resolve(__dirname, '/'),
		filename: 'bundle[contenthash].js'
	}
});
