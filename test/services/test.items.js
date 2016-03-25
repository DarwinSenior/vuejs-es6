import { failure, success } from '../utils/responses';
import Items from '../../app/services/items';

describe('Test items.js', () => {
    it('Should create a new item', (done) => {
        let id = '345456346dsdf';

        spyOn(Items.resource, 'post').and.returnValue(success({
            _id: id,
            content: 'Test Item',
            checked: false
        }));

        // Test our function!
        Items.create('Test Item')
            .then((result) => {
                expect(result._id).toEqual(id);
                done();
            });
    });
});
