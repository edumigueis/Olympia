import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';

// tem que vir entre chaves, porque não é default
import { routes } from './routes';

// registrando o módulo/plugin no global view object
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes : routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
