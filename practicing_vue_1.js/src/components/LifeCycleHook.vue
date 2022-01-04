<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Meu nome é {{ nome }}</p>
  </div>
</template>


<script>
export default {
  name: "LifeCycleHook",

  data() {
    return {
      title: "2. Life Cycle Hook",
      nome: "SERÁ CRIADO",
    };
  },

  created() {
    this.nome = "Renata";
  },
};
</script>