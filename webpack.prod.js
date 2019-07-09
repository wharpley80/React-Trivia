var distpath = require('path');
var common = require('./webpack.config');
var merge = require('webpack-merge');
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = merge(common, {
	mode: "production",
	output: {
		path: distpath.resolve(__dirname, 'dist'),
		filename: 'bundle[contenthash].js',

		publicPath: ASSET_PATH
		//path: distpath.resolve(__dirname, '/'),
		//filename: 'bundle.js'
	}
});
