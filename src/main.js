// Styles
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'font-awesome/css/font-awesome.css';
import 'vue-directive-tooltip/css/index.css';

import Vue from 'vue';
import vueSmoothScroll from 'vue-smooth-scroll';
import Tooltip from 'vue-directive-tooltip';
import App from './App.vue';
import TrueNinja from './TrueNinja/TrueNinja.vue';

Vue.config.productionTip = false;

Vue.use(vueSmoothScroll);
Vue.use(Tooltip);

// Easter egg for people who open the dev tools
/* eslint-disable no-console */
console.log(
	'%c🍥 YOU FOUND ME!',
	'font: 900 34px/1.4 Barlow, Helvetica, Arial, sans-serif; color: #fff; background: linear-gradient(90deg, #7a2afe, #ff7a18); padding: 10px 24px; border-radius: 10px; text-shadow: 2px 2px 0 #2d0e4e;',
);
console.log(
	'%cFollow this path to become Hokage!%c  /true-ninja',
	'font: 600 18px/2 Barlow, Helvetica, Arial, sans-serif; color: #fff; background: linear-gradient(90deg, #ff7a18, #ff4d6d); padding: 4px 16px; border-radius: 6px 0 0 6px;',
	'font: 700 18px/2 monospace; color: #fff; background: #2d0e4e; padding: 4px 14px; border-radius: 6px;',
);
/* eslint-enable no-console */

// No router yet: the hidden page is picked by path
const isTrueNinja = window.location.pathname.replace(/\/+$/, '') === '/true-ninja';

new Vue({
	render: h => h(isTrueNinja ? TrueNinja : App),
}).$mount('#app');
