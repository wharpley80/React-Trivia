var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	
	module: {
		rules: [
			{
				test: /\.(js)$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.png$/,
				loaders: ["url", "img"]
			}
		]
	},
	performance: {
	    hints: false,
	    maxEntrypointSize: 512000,
	    maxAssetSize: 512000
	}
}