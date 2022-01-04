<template>
  <div>
    <h2>{{ title }}</h2>
    <img :src="avatar2" :alt="decricao2" />
    <UsingEmitSon @mudar-imagem="mudarImagem" />
  </div>
</template>

<script>
import UsingEmitSon from "./UsingEmitSon.vue";

export default {
  name: "UsingEmitDad",

  components: {
    UsingEmitSon,
  },

  data() {
    return {
      title: "Using Emit Dad",
      avatar2: "/img/avatar2.png",
      descricao2: "Imagem Avatar",
    };
  },
  methods: {
    mudarImagem() {
      this.avatar2 = "/img/avatar.png"
    }
  },
};
</script>