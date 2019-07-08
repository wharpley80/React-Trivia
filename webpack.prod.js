var path = require('path');
var common = require('./webpack.config');
var merge = require('webpack-merge');
const port = process.env.PORT || 3000;
const app = express();

module.exports = merge(common, {
	mode: "production",
	output: {
		path: path.resolve(__dirname, 'dist', 'index.html'),
		filename: 'bundle[contenthash].js'
	}
});

app.listen(port);
