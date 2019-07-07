var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: './src/index.js',
	mode: "development",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

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
	plugins: [
	new HtmlWebpackPlugin({
		template: 'index.html'
	})
	]
}