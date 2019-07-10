var mypath = require('path');
var common = require('./webpack.config');
var merge = require('webpack-merge');

module.exports = merge(common, {
	mode: "development",
	output: {
		//path: mypath.resolve(__dirname, 'dist'),
		//filename: 'bundle.js'
		filename: './bundle.js'
	}
});