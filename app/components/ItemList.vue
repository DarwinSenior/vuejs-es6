<template>
    <div id="item-wrapper" class="pure-g">
        <div class="pure-u-4-24 pure-u-md-1-3"></div>
        <div class="pure-u-16-24 pure-u-md-1-3">
            <div class="pure-u-1">
                <a href="#" v-bind:class="{ 'selected': visibility == 'active' }" @click="visibility = 'active'">Active</a>
                <a v-bind:class="{ 'selected': visibility == 'done' }" href="#" @click="visibility = 'done'">Done</a>
                <a v-bind:class="{ 'selected': visibility == 'all' }" href="#" @click="visibility = 'all'">All</a>
            </div>
            <div class="pure-u-1" v-if="visibility == 'done'">
                <a href="#" @click="deleteAll">Delete All</a>
            </div>
            <!-- Show if filtered list is empty -->
            <div class="pure-u-1" v-show="filteredItems.length == 0">
                <h2>Nothing here!</h2>
            </div>
            <div class="pure-u-1 item-container" v-for="item in filteredItems">
                <input id="item-{{ item._id }}" type="checkbox" v-model="item.checked" v-on:click="itemChecked(item)">
                <label for="item-{{ item._id }}">{{ item.content }}</label>
            </div>
        </div>
        <div class="pure-u-4-24 pure-u-md-1-3"></div>
    </div>
</template>

<script>
import Items from '../services/items';

var filters = {
    all: items => {
        return items;
    },
    active: items => {
        return items.filter(item => {
            return !item.checked;
        });
    },
    done: items => {
        return items.filter(item => {
            return item.checked;
        });
    }
}

export default {
    computed: {
        filteredItems: function() {
            return filters[this.visibility](this.items);
        }
    },
    created() {
        Items.on('update', this.getItems);
    },
    data() {
        return {
            items: [],
            visibility: 'active'
        }
    },
    destroyed() {
        Items.removeListener('update', this.getItems);
    },
    methods: {
        deleteAll() {
            Items.bulkDelete(this.filteredItems)
                .then(response => {
                    this.getItems();
                });
        },
        itemChecked(item) {
            // TODO find better way to handle this
            if (item.checked == true)
                item.checked = false;
            else
                item.checked = true;

            Items.update(item);
        },
        getItems() {
            Items.getAll()
                .then(response => {
                    this.items = response;
                });
        }
    },
    ready() {
        this.getItems();
    }
}
</script>

<style lang="stylus" scoped>
@import "../styles/globals"

#item-wrapper
    margin-top 20px
    margin-bottom 20px
    a
    &:link
    &:visited
        color $color-primary
        font-size .75em
        font-weight bold
        text-decoration none
        &.selected
        &:hover
        &:active
            color $color-secondary
    .item-container
        input
            position absolute
            left -9999px
        label
            display block
            position relative
            color $color-secondary
            font-weight bold
            padding 1em
            padding-left calc(32px + 1em)
            line-height 25px
            cursor pointer
            border-radius .2em
            &::before
                content ''
                display block
                position absolute
                left 1em
                top 1em
                width 25px
                height 25px
                border 3px solid $color-primary
                border-radius 100px
                -webkit-box-sizing border-box
                -moz-box-sizing border-box
                box-sizing border-box
            &:hover
                background-color $color-white
                &::before
                    background-color $color-primary
        input:checked + label::before
            background-color $color-primary

</style>
