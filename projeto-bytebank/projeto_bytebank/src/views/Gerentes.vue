<template>
  <div class="container">
    <h1>Gerentes</h1>
    <div class="row">
      <Gerente
        v-for="gerente in gerentes"
        :key="gerente.numero"
        :gerente="gerente"
      />
    </div>
  </div>
</template>

<script>
import Gerente from "@/components/Gerente.vue";

export default {
  components: {
    Gerente,
  },
  data() {
    return {
      gerentes: [],
    };
  },

  mounted() {
    //busca os gerente no banco qdo monta o componente
    this.$http
      .get("gerentes")
      .then((response) => {
        console.log(response);
        this.gerentes = response.data;
      })
      .catch((erro) => console.log(erro));
  },
  //se não logado direciona para página login(nã faz req)
  beforeRouterEnter(to, from, next) {
    if (!this.$store.state.token) {
      next({ name: "login" });
    }
    next();
  },
};
</script>

