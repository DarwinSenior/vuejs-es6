var mongojs = require('mongojs'),
    db = mongojs('todoApp', ['item']);

var itemList = function(req, res) {
    db.item.find(function(err, docs) {
        res.json(docs);
    });
};

var createItem = function(req, res) {
    db.item.insert(req.body, function(err, doc) {
        res.json(doc);
    });
};

var getItem = function(req, res) {
    var id = req.params.itemId;

    db.item.findOne({ _id: mongojs.ObjectId(id) }, function(err, doc) {
        res.json(doc);
    });
};

var deleteItem = function(req, res) {
    var id = req.params.itemId;

    db.item.remove({ _id: mongojs.ObjectId(id) }, function(err, doc) {
        res.json(doc);
    });
};

var updateItem = function(req, res) {
    var id = req.params.itemId,
        item = req.body;

    // Delete id if in body
    // Otherwise, Mongo will throw an error
    if ('_id' in item)
        delete item['_id'];

    db.item.update({ 
        _id: mongojs.ObjectId(id) 
    },
    req.body,
    {
        insert: false,
        multi: false,
        new: true
    }, function(err, doc) {
        if (err)
            res.sendStatus(500);
        else
            res.sendStatus(201);
    });
};

exports.itemList = itemList;
exports.createItem = createItem;
exports.getItem = getItem;
exports.deleteItem = deleteItem;
exports.updateItem = updateItem;
