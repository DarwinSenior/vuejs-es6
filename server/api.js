var express = require('express'),
    item_controller = require('./controllers/item_controller');

var router = express.Router();

router
    .route('/items')
        .get(item_controller.itemList)
        .post(item_controller.createItem);

router
    .route('/items/:itemId')
        .get(item_controller.getItem)
        .delete(item_controller.deleteItem);

module.exports = router;
