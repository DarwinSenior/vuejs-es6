//import 'webcomponents.js';
import crossroads from 'crossroads';
import $ from 'jquery';
import './styles/main.styl';

import { template as homeView } from './components/home/home.js';

var routes = {};

function init() {
    // Only set up routes if not already set
    if ($.isEmptyObject(routes)) {
        routes.home = crossroads.addRoute('', () => {
            document.body.innerHTML = homeView;
        });

        routes.formPage = crossroads.addRoute('#form/{id}', id => {
            console.log(id);
        });

        // Parse location
        //console.log('hash', document.location.hash);
        crossroads.parse(document.location.hash);
    }
}

init();
