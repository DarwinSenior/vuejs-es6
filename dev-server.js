var express = require('express'),
    webpack = require('webpack'),
    config = require('./webpack.config'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


// TODO move this to config at later point
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

var app = express();
var compiler = webpack(config);

// handle fallback for HTML5 history API
//app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
}));

// enable hot-reload and state-preserving
app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log
}));

app.listen(9090, 'localhost', function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:9090')
});
