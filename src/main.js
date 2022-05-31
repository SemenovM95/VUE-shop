import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faMagnifyingGlass,
  faBars,
  faCartShopping,
  faHouse,
  faXmark,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/js/all';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import clickOutside from 'mixins/directives';

library.add(faUser, faMagnifyingGlass, faBars, faCartShopping, faHouse, faXmark, faSpinner);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.directive('click-outside', clickOutside);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
