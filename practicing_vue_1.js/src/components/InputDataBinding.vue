<template>
  <div>
    <h2>{{ title }}</h2>
    <form id="app-form">
      <input type="text" v-model="input_name" placeholder="Digite seu nome" />
      <input type="submit" value="Enviar" v-on:click="submitForm" />
    </form>
    <p>
      O meu nome é: {{ name }}
      <!-- DATA BINDING = {{ input_name }} -->
    </p>
  </div>
</template>


<script>
export default {
  name: "InputDataBinding",

  data() {
    return {
      title: "1. Input and Data Binding",
      name: "",
      input_name: "",
    };
  },

  methods: {
    submitForm(e) {
      e.preventDefault();

      this.name = this.input_name;

      this.input_name = "";
    },
  },
};
</script>

