import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';

// módulo que integra uma aplicação com uma API - 
// npm install vue-resource@1.0.3 --save
import VueResource from 'vue-resource';

// módulo para carregamento de um ou outro componente conf. rota específica 
// npm install vue-router@2.1.1 --save
import VueRouter from 'vue-router';

// importanto a rota dos componentes
import { routes } from './routes';

Vue.use(VueResource);
//aplicação criada com VueResource para que adote como domínio 
//o endereço localhost:3000 para todas as requisições feitas:
Vue.http.options.root = 'http://localhost:3000';

//rotas
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history' /*para elimitar a # do endereço do servidor*/
});

Vue.use(VeeValidate);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})

