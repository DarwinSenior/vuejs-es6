var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    api = require(path.resolve(__dirname, 'server/api'));

var app = express();

app.use('/', express.static(path.resolve(__dirname, 'dist')));
app.use(bodyParser.json());
app.use('/api', api);

var port = 3000;
app.listen(port, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:' + port);
});
