import { api } from './base';
import { EventEmitter } from 'events';

const items = api.all('items');
const itemHandler = new EventEmitter();
export default itemHandler;

itemHandler.getAll = () => { 
    return new Promise((resolve, reject) => {
        items.getAll()
            .then(response => {
                const entities = response.body();
                var i = [];

                entities.forEach(entity => {
                    i.push(entity.data());
                });

                itemHandler.items = i;
                resolve(i);
            }, response => {
                reject('Error fetching items');
            });
    });
}

itemHandler.save = text => {
    return new Promise((resolve, reject) => {
        items.post({ content: text, checked: false })
            .then(response => {
                var newItem = response.body().data();
                itemHandler.items.push(newItem);
                resolve(itemHandler.items);
            }, response => {
                reject('Error saving new item');
            });
    });
}
