import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueCookies from 'vue-cookies'
import VuePageTransition from 'vue-page-transition'
import { routes } from './routes';

Vue.use(VueCookies)
Vue.config.devtools = false
Vue.prototype.$welcome = 0

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VuePageTransition)

window.$ = window.jQuery = require('jquery')

new Vue({

  methods: {
    getUnits: function () {
      location.reload();
      once++;
    }
  },
  activated: function () {
    var once;
    if (once == 0 || once == 1)
      this.getUnits()
  }
});

let router = new VueRouter({
  mode: 'hash',
  routes: routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
