var express = require('express'),
    webpack = require('webpack'),
    config = require('./webpack.config'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
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

config.vue = {
    loader: {
        css: ExtractTextPlugin.extract('css'),
        stylus: ExtractTextPlugin.extract('css!stylus')
    }
};

var app = express();
var compiler = webpack(config);

app.use('/pure', express.static(__dirname + '/bower_components/pure'));

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

// API
var bodyParser = require('body-parser'),
    api = require('./server/api');

app.use(bodyParser.json());
app.use('/api', api);

app.listen(9090, 'localhost', function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:9090')
});
