var distpath = require('path');
var common = require('./webpack.config');
var merge = require('webpack-merge');
const ASSET_PATH = process.env.ASSET_PATH || '/dist';

module.exports = merge(common, {
	mode: "production",
	output: {
		path: distpath.resolve(__dirname, 'dist'),
		filename: 'bundle[contenthash].js',
		publicPath: ASSET_PATH
	},
	plugins: [
    // This makes it possible for us to safely use env vars on our code
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    })
  ]
});
