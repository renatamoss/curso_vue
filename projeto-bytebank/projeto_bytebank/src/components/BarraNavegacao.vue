<template>
  <nav class="navbar navbar-expand-lg navbar-bytebank">
    <a class="navbar-brand" href="#">ByteBank</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="true"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon navbar-brand">MENU</span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <BarraNavegacaoLogado v-if="usuarioEstaLogado" />
      <BarraNavegacaoDeslogado v-else />
    </div>
  </nav>
</template>

<script>
import BarraNavegacaoLogado from "./BarraNavegacaoLogado";
import BarraNavegacaoDeslogado from "./BarraNavegacaoDeslogado";

import { mapGetters } from "vuex";

export default {
  components: {
    BarraNavegacaoLogado,
    BarraNavegacaoDeslogado,
  },
  computed: {
    ...mapGetters(["usuarioEstaLogado"]),
  },
};
</script>

<style>
.navbar {
  background: #27ae60;
}
.navbar-bytebank a,
.navbar-brand {
  color: #fff;
  text-decoration: none;
}
.navbar-bytebank a:hover {
  color: #000;
}
</style>