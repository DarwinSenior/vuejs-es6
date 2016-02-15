module.exports = {
    entry: __dirname + '/src/app.js',
    hostname: 'localhost',
    output: {
        path: __dirname + '/build',
        publicPath: __dirname + '/build/',
        filename: 'bundle.js'
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
        }]
    }
}
