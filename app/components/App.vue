<template>
    <header id="header-app" class="pure-g">
        <div class="pure-u-1 box">
            <nav>
                <ul>
                    <li>
                        <a v-link="{ path: '/' }">Home</a>
                    </li>
                    <li>
                        <a v-link="'about'">About</a>
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
                    text-decoration none
                    font-size .75em
                    &:link
                    &:visited
                        color $color-secondary
</style>
