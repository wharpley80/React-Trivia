var mypath = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	/*
	output: {
		//path: mypath.resolve(__dirname, 'dist'),
		//filename: 'bundle.js'
		filename: "./bundle.js"
	},
	*/
	output: {
		//path: mypath.resolve(__dirname, 'dist'),
		filename: './bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			title: 'ReacTrivia | Movie Trivia | Sports Trivia | Trivia game app built with React.js and Redux',
			template: './src/index.html',			
			filename: '../index.html'
		})
	],
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