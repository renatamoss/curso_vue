<template>
  <div class="corpo">
    <meu-menu :rotas="routes"> </meu-menu>

    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
import { routes } from "./routes";
import Menu from "./components/shared/menu/Menu.vue";

export default {
  components: {
    "meu-menu": Menu,
  },

  data() {
    return {

      routes: routes.filter((route) => route.menu),
      
    };
  },
};
</script>


<style>
.corpo {
  font-family: Arial, Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

/*animação transition*/
.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}

.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.4s;
}
</style>