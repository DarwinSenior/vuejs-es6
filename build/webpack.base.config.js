var path = require('path'),
    rootDir = path.resolve(__dirname, '../app');

module.exports = {
    entry: [
        path.join(rootDir, 'app.js') 
    ],
    hostname: 'localhost', 
    module: {
        loaders: [
        {
            test: /\.css$/,
            loader: 'style!css'
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader?presets[]=es2015'
        },
        {
            test: /\.json$/,
            loader: 'json'
        },
        {
            test: /\.styl$/,
            loader: 'style-loader!css-loader!stylus-loader'
        },
        {
            test: /\.vue$/,
            loader: 'vue'
        }]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        filename: 'bundle.js'
    },
    resolve: {
        root: rootDir,
        alias: {
            
        }
    }
}
