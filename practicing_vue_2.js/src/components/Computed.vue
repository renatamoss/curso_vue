<template>
  <div>
    <div>
      <p>
        Propriedades calculadas são armazenadas em cache com base em suas
        dependências reativas. Uma propriedade computada será reavaliada apenas
        quando algumas de suas dependências reativas forem alteradas.
      </p>
    </div>
    <p>Cores disponíveis:</p>
    <ul v-for="(cor, index) in cores" :key="index">
      <li>{{ cor }}</li>
    </ul>
    <span>{{ coresFlores }}</span>
    <h1>{{ fullName }}</h1>
  </div>
</template>
            
            
<script>
export default {
  data() {
    return {
      cores: ["verde", "amarelo", "azul"],
      firstName: "Renata",
      lastName: "Marques",
    };
  },
  computed: {
    coresFlores() {
      return this.cores.length > 0
        ? "Essas são as cores das flores"
        : "Não tem flores";
    },

    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
};
</script>
            
            
<style lang= scoped>
</style>

