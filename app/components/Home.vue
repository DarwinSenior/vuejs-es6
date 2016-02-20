<template>
    <div>
        <form class="pure-form">
            <div class="pure-g">
                <div class="pure-u-4-24 pure-u-md-1-3"></div>
                <div class="pure-u-16-24 pure-u-md-1-3">
                    <input class="pure-input-1" type="text" v-model="newItem" v-on:keydown.enter="saveItem($event)" placeholder="I need to...">
                </div>
                <div class="pure-u-4-24 pure-u-md-1-3"></div>
            </div>
        </form>
        <div class="pure-g">
            <div class="pure-u-4-24 pure-u-md-1-3"></div>
            <div class="pure-u-16-24 pure-u-md-1-3">
                <div class="pure-u-1" v-for="item in items">
                    <input type="checkbox" v-model="item.checked">
                    {{ item.content }}
                </div>
            </div>
            <div class="pure-u-4-24 pure-u-md-1-3"></div>
        </div>
    </div>
</template>

<script>
import items from '../services/items';

export default {
    data() {
        return {
            newItem: '',
            items: []
        }
    },
    methods: {
        saveItem(event) {
            event.preventDefault();
            items.save(this.newItem)
                .then(response => {
                    this.items = response;
                    this.newItem = '';
                }); 
        }
    },
    ready() {
        items.getAll()
            .then(response => {
                this.items = response;
            });
    }
}
</script>
