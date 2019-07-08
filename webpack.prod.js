var path = require('path');
var common = require('./webpack.config');
var merge = require('webpack-merge');
const express  = require('express');
const port = process.env.PORT || 3000;
const app = express();
app.listen(port);

module.exports = merge(common, {
	mode: "production",
	output: {
		path: path.resolve(__dirname, 'dist', 'index.html'),
		filename: 'bundle[contenthash].js'
	}
});


