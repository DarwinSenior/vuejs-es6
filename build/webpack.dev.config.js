var webpack = require('webpack'),
    config = require('./webpack.base.config')
    HtmlWebpackPlugin = require('html-webpack-plugin');

config.entry = (config.entry || []).concat([
    'webpack-hot-middleware/client?noInfo=true&reload=true'
]);

config.output.publicPath = '/';

config.plugins = (config.plugins || []).concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'app/index.html',
        inject: true
    })
]);

module.exports = config;
