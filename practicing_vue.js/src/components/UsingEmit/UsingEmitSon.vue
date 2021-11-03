<template>
  <div>
    <h2>{{ title }}</h2>
    <button @click="$emit('mudarImagem')">Trocar imagem de perfil</button>
  </div>
</template>


<script>
export default {
  name: "UsingEmitSon",

  emits: ["mudarImagem"],

  data() {
    return {
      title: "Using Emit Son",
    };
  },
};
</script>