var path = require('path'),
    rootDir = path.join(__dirname, '/app');

module.exports = {
    entry: [
        path.join(rootDir, 'app.js'),
        'webpack-hot-middleware/client?noInfo=true&reload=true'
    ],
    hostname: 'localhost',
    output: {
        path: '/'
        //path: __dirname + '/app',
        //publicPath: __dirname + '/app/',
        //filename: 'bundle.js'
    },
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
            test: /\.styl$/,
            loader: 'style-loader!css-loader!stylus-loader'
        },
        {
            test: /\.vue$/,
            loader: 'vue'
        }]
    },
    resolve: {
        root: rootDir,
        alias: {
            
        }
    }
}
