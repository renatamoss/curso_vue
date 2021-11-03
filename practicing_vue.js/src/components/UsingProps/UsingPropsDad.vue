<template>
  <div>
    <h2>{{ title }}</h2>
    <UsingPropsSon :dataFromDad="dataToSon" :booleanFromDad="true" />
  </div>
</template>

<script>
import UsingPropsSon from "./UsingPropsSon.vue";

export default {
  name: "UsingPropsDad",


  components: {
    UsingPropsSon,
  },

  data() {
    return {
      title: "Using Props Dad",
      dataToSon: "Data To Son Text"
    };
  },
};
</script>