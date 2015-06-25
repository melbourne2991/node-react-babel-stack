var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var srcDir = path.join(__dirname, 'src');
var outputDir = path.join(__dirname, 'dist');
var entryFile = path.join(__dirname, '/src/js/index.js');

module.exports = {
	progress: true,
	colors: true,
  	entry: [entryFile],
  	output: {
  		path: outputDir,
  		filename: 'bundle.js'
  	},
  	devtool: 'source-map',
  	module: {
  		loaders: [
  			{
  				test: /\.scss$/,
        		loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
  			},
			{
				test: /\.js$/,
				loader: 'babel-loader?stage=0',
				exclude: /\bnode_modules\b/
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
			}
  		]
  	},
  	plugins: [
  	    new HtmlWebpackPlugin({
			template: path.join(srcDir, 'index.html'),
			assetPath: '',
			filename: 'index.html',
			minify: true
		}),
  		new ExtractTextPlugin('[name].css')
  	]
};