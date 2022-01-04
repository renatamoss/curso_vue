<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Meu formulário:</p>

    <form @submit="enviarFormulario($event)">
      <input type="text" v-model="input_name" placeholder="Digite seu nome" />
      <input type="text" v-model="input_age" placeholder="Digite sua idade" />
      <input type="submit" value="Enviar" />
    </form>

    <p>Nome: {{ name }}</p>
    <p>Idade: {{ age }}</p>
  </div>
</template>


<script>
export default {
  name: "EventsClickSubmit",

  data() {
    return {
      title: "8. Events @click and @submit",
      name: "",
      age: "",
      input_name: "",
      input_age: "",
    };
  },

  methods: {
    enviarFormulario(e) {
      e.preventDefault();

      this.name = this.input_name;
      this.age = this.input_age;

      console.log("O nome é " + this.name);
      console.log("A idade é " + this.age);

      this.input_name = "";
      this.input_age = "";
    },
  },
};
</script>