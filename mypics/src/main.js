import Vue from 'vue'
import App from './App.vue'

/*módulo que integra uma aplicação com uma API - 
npm install vue-resource@1.0.3 --save*/
import VueResource from 'vue-resource';

/*módulo para carregamento de um ou outro componente conf. rota específica -
npm install vue-router@2.1.1 --save*/
import VueRouter from 'vue-router';

/*importanto a rota dos componentes*/
import { routes } from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history' /*para elimitar a # do endereço do servidor*/
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})

