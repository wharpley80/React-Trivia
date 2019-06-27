module.exports = {

	entry: './src/index.js',

	output: {
		path: './built',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ["babel-loader"]
			},
			{
				loaders: ["style-loader", "css-loader", "sass-loader"],
				test: /\.scss$/
			},
			{
				loaders: ["url", "img"],
				test: /\.png$/
			}
		]
	}

}