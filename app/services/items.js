import { api } from './api';

const Items = {};
Items.resource = api.all('items');
export { Items as default };

// Delete several items at a time
Items.bulkDelete = (itemsToDelete) => {
    return new Promise((resolve, reject) => {
        if (itemsToDelete.length > 0) {
            itemsToDelete.forEach(i => {
                Items.resource.delete(i._id);
            });

            resolve();
        } else
            resolve();
    });
}

// Create an item
Items.create = text => {
    return new Promise((resolve, reject) => {
        Items.resource.post({ content: text, checked: false })
            .then(response => {
                var newItem = response.body().data();
                resolve(newItem);
            }, response => {
                reject('Error saving new item');
            });
    });
}

// Retrieve all items
Items.getAll = () => {
    return new Promise((resolve, reject) => {
        Items.resource.getAll()
            .then(response => {
                const entities = response.body();
                var i = [];

                entities.forEach(entity => {
                    i.push(entity.data());
                });

                resolve(i);
            }, response => {
                reject('Error fetching items');
            });
    });
}

// Update an item
Items.update = item => {
    return new Promise((resolve, reject) => {
        Items.resource.put(item._id, item)
            .then(response => {
                resolve();
            }, response => {
                reject('Unable to save item');
            });
    });
}
