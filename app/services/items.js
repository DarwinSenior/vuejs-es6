import { api } from './base';

var getAll = function() {
    const items = api.all('items');
    
    return new Promise((resolve, reject) => {
        items.getAll()
            .then((response) => {
                const entities = response.body();
                var items = [];

                entities.forEach((entity) => {
                    items.push(entity.data());
                });

                resolve(items);
            }, (response) => {
                reject('Error fetching items');
            });
    });
}

export default {
    getAll: getAll
}
