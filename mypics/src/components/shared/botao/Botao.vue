<template>
  <button
    @click="disparaAcao()"
    class="botao"
    :class="estiloDoBotao"
    :type="tipo"
  >
    {{ rotulo }}
  </button>
</template>

<script>
export default {
  props: {
    /*props foram validadas conf. type e required*/
    tipo: {
      type: String,
      required: true,
    },

    rotulo: {
      type: String,
      required: true,
    },

    confirmacao: Boolean,
    estilo: String,
  },

  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Confirma a operação? ")) {
          this.$emit("botaoAtivado", new Date());
        }
        return;
      }
      this.$emit("botaoAtivado", new Date());
    },
  },

  computed: {
    estiloDoBotao() {
      /*opção do botão do estilo perigo ou padrão*/
      // se o valor é padrão ou não passou nada para estilo
      if (this.estilo == "padrao" || !this.estilo) return "botao botao-padrao";

      if (this.estilo == "perigo") return "botao botao-perigo";
    },
  },
};
</script>


<style scoped>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>

