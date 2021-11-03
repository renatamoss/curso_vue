<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Meu formulário:</p>

    <form @submit="enviarFormulario($event)">
      <input type="text" v-model="name" placeholder="Digite seu nome" />
      <input type="text" v-model="age" placeholder="Digite sua idade" />
      <input type="submit" value="Enviar" />
    </form>

    <p>Nome: {{ name }}</p>
    <p>Idade: {{ age }}</p>
  </div>
</template>


<script>
export default {
  name: "EventosClickSubmit",

  data() {
    return {
      title: "8. Eventos @click e @submit",
      name: "",
      age: "",
    };
  },

  methods: {
    enviarFormulario(e) {
      e.preventDefault();

      const name = this.name;
      const age = this.age;

      console.log("O nome é" + name);
      console.log("A idade é" + age);

    },
  },
};
</script>