<template>
  <div>
    <h2>{{ title }}</h2>
    <p>
      Para acessar meu portfólio
      <a v-bind:href="url_portfolio" target="_blank">basta clicar aqui</a>
    </p>
    <Picture />
  </div>
</template>


<script>
import Picture from "./Picture.vue";

export default {
  name: "DynamicsAttributesVbind",

  components: {
    Picture,
  },

  data() {
    return {
      title: "4. Dynamics Attributes Vbind v-bind",
      url_portfolio: "https://www.google.com",
    };
  },
};
</script>