var distpath = require('path');
var common = require('./webpack.config');
var merge = require('webpack-merge');

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: './bundle.js',
	}
});
