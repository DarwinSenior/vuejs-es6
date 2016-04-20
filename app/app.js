import { polyfill } from 'es6-promise';
polyfill();

// Global app imports
import { nodeEnv } from './config';
import Vue from 'vue';
import VueRouter from 'vue-router';

// Component imports
import App from './components/App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';

// Enable Vue to use Router
Vue.use(VueRouter);
var router = new VueRouter();

// Map routes to components
router.map({
    '/': {
        component: Home
    },
    '/about': {
        component: About
    }
})

// Turn on Vue's debug?
if (nodeEnv == 'development')
    Vue.config.debug = true;

// Fire up Vue!
router.start(App, '#app');
