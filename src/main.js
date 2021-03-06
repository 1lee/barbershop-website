import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import { routes } from './routes';


Vue.use(VueRouter);

const router = new VueRouter({
routes,
mode: 'history',
    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            return {selector: to.hash}
        } else {
            return { x: 0, y: 0 }
        }
    },
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
