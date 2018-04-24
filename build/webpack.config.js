const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[hash].js',
		},
		devServer: {
			hot: true,
		},
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
				}),
				new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(
            [
                path.resolve(__dirname, '../dist')
            ],
            {
                verbose: true,
                dry: false, 
            }
        ),
    ],
    resolve: {
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, '../src'),
                ],
                use: 'babel-loader',
            }
        ]
    },
    
};
