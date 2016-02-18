import Vue from 'vue';
import resource from 'vue-resource';

Vue.use(resource)

export default {
    getAll: function() {
        var main = this;
        Vue.http.get('/api/items')
            .then(function(response) {
                main.items = response.data;
            }, function(response) {
                // TODO error
                console.error(response);
            });
    },
    items: [{ 'content': 'bland', 'checked': false }]
};
