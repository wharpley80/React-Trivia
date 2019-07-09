var distpath = require('path');
var common = require('./webpack.config');
var merge = require('webpack-merge');

module.exports = merge(common, {
	mode: "production",
	output: {
		//path: distpath.resolve(__dirname, 'dist'),
		//filename: 'bundle[contenthash].js'
		//path: distpath.resolve(__dirname, '/'),
		filename: 'bundle.js'
	}
});
