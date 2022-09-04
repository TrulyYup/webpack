const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const audioSpriteWebpackPlugin = require('audiosprite-webpack-plugin');
const audioSupport = true;


module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [{
            test: /\.(png|jpe?g|gif|mp3)$/i,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
            }
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader',]
        },
        {
            test: /\.(mp3|wav)$/,
            include: /(sounds)/,
            loader: audioSpriteWebpackPlugin.loader,
            options: {
                emptySprite: !audioSupport,
            },
        },
        {
            test: /audioSpriteName\.(mp3|ogg|ac3|m4a|caf)$/,
            exclude: /(sounds)/,
            loader: 'file-loader'
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'main.html') }),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new audioSpriteWebpackPlugin.Plugin({
            audiosprite: {
                output: 'audioSpriteName',
                export: ['mp3', 'ogg', 'ac3', 'm4a', 'caf'],
                bitrate: 64
            }
        })
    ]

};