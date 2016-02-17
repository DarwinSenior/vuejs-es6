<template>
    <header id="header-app" class="pure-g">
        <div class="pure-u-1 box">
            <nav>
                <ul>
                    <li>
                        <a v-link="{ path: '/' }">Home</a>
                    </li>
                    <li>
                        <a v-link="'all'">All Items</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <div>
        <h1>&#161;Todo!</h1>
        <router-view></router-view>
    </div>
</template>

<style lang="stylus">
@import "../styles/main"
#header-app
    nav
        ul
            float right
            li
                padding 5px
                a
                    text-decoration: none
                    &:link
                    &:visited
                        color $color-white
</style>
