const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: resolve(__dirname, 'src', 'index.js'),
	output: {
		path: resolve(__dirname, 'build'),
		filename: 'index.[contenthash].js'
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: `img-optimize-loader`,
						options: {
							compress: {
								// This will take more time and get smaller images.
								mode: 'high', // 'lossless', 'low'
								webp: true,
								disableOnDevelopment: true,
							},
						},
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader',]
			},
			{
				test: /\.(mp3|mp4)$/i,
				loader: 'file-loader',
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: resolve(__dirname, 'src', 'index.html') }),

	]

}