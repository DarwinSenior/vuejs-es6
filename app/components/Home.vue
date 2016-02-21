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
        <item-list></item-list>
    </div>
</template>

<script>
import items from '../services/items';
import ItemList from './ItemList.vue';

export default {
    components: {
        ItemList
    },
    data() {
        return {
            newItem: ''
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
    }
}
</script>

<style lang="stylus" scoped>
@import "../styles/globals"
</style>
