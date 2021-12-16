<template>
  <div>
    <p>Interpolação textual: {{ titleHtml }}</p>
    <p>Diretiva v-html: <span v-html="titleHtml"></span></p>
  </div>
</template>
            
            
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      titleHtml: "Estou estudando muito!",
    };
  },
};
</script>
            
