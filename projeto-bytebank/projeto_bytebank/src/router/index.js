import Vue from 'vue'
import VueRouter from 'vue-router'
import Gerentes from '../views/Gerentes.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    //Rota Preguiçosa:
    component: () => import(/* webpackChunkName: "registrar" */ '../views/NovoUsuario.vue'),
    meta: {
      publica: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      publica: true
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history' /*para elimitar a # do endereço do servidor*/
})

//Guardião Global: a rota está protegida, se não pública ou não token direciona lgin
router.beforeEach((routeTo, routeFrom, next) => {
  if(!routeTo.meta.publica && !store.state.token) {
    return next({ path: '/login' });
  }
  next();
})


export default router