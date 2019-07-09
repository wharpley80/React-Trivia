var path = require('path');
var common = require('./webpack.config');
var merge = require('webpack-merge');
/*
const express  = require('express');
const port = process.env.PORT;
const app = express();
app.listen(port);
*/
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

module.exports = merge(common, {
	mode: "production",
	output: {
		path: path.resolve(__dirname, 'dist', 'index.html'),
		filename: 'bundle[contenthash].js'
	}
});


