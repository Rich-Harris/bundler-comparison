module.exports = {
	entry: './index.js',
	output: {
		path: require('path').resolve('results'),
		filename: 'webpack.js',
		libraryTarget: 'commonjs'
	},
	devtool: 'source-map',
	mode: 'production'
};