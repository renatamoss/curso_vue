<template>
  <div>
    <p>Cores disponíveis:</p>
    <ul v-for="(cor, index) in cores" :key="index">
      <li>{{ cor }}</li>
    </ul>
    <span>{{ coresFlores }}</span>
  </div>
</template>
            
            
<script>
export default {
  data() {
    return {
      cores: ["verde", "amarelo", "azul"],
    };
  },
  computed: {
    coresFlores() {
      return this.cores.length > 0
        ? "Essas são as cores das flores"
        : "Não tem flores";
    },
  },
};
</script>
            
            
<style lang= scoped>
</style>

//propriedades calculadas são armazenadas em cache com base em suas dependências reativas. Uma propriedade computada será reavaliada apenas quando algumas de suas dependências reativas forem alteradas.
//Em comparação, uma invocação de método sempre executará a função sempre que ocorrer uma nova renderização.