var express = require('express'),
    webpack = require('webpack'),
    path = require('path'),
    config = require('./webpack.dev.config'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'); 

config.vue = {
    loader: {
        css: ExtractTextPlugin.extract('css'),
        stylus: ExtractTextPlugin.extract('css!stylus')
    }
};

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

// enable hot-reload
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: console.log
});

compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' });
        cb();
    });
});

app.use(hotMiddleware);

// Static path for Pure.css
app.use('/pure', express.static(path.resolve(__dirname, '../bower_components/pure')));

// API
var bodyParser = require('body-parser'),
    api = require(path.resolve(__dirname, '../server/api'));

app.use(bodyParser.json());
app.use('/api', api);

app.listen(9090, 'localhost', function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:9090')
});
