const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  entry: './src/app.jsx',
	output: {
    filename: '[name]_[hash:8].js',
		path: path.join(__dirname, 'dist')
	},
	devServer: {
		port: 9001,
		static: {
			directory: path.join(__dirname, 'dist')
		},
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)/,
				use: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {}
					},
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.less$/,
				loader: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'less-loader'
				]
			},
			{
				test: /\.styl$/,
				loader: ['style-loader', 'css-loader', 'stylus-loader']
			},
			{
				test: /\.txt$/,
				loader: 'raw-loader'
			},
			{
				test: /\.(png|jpg|jpeg|gif)/,
				loader: 'url-loader'
			}
		]
	},
	plugins: [
		new HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name]_[hash:8].css',
			chunkFilename: '[id].css'
		})
	],
	mode: 'development'
	// optimization: {
	//   splitChunks: {
	//     chunks: 'async'
	//   }
	// }
};
