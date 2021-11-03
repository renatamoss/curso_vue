<template>
  <div>
    <h2>{{ title }}</h2>
    <p v-show="show_text">Methods no Vue são como funções.</p>
    <button @click="showText">Mostrar Texto</button>
  </div>
</template>


<script>
import Picture from "./Picture";

export default {
  name: "Info",

  components: {
    Picture,
  },

  data() {
    return {
      title: "5. Methods",
      show_text: false,
    };
  },

  methods: {
    showText() {
      this.show_text = !this.show_text;
    },
  },
};
</script>