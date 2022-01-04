<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ dataFromDad }}</p>
    <p v-show="booleanFromDad">Boolean From Dad is true</p>
  </div>
</template>

<script>
export default {
  name: "UsingPropsSon",

  props: {
    dataFromDad: {
      type: String,
      required: true,
    },
    booleanFromDad: {
      type: Boolean,
      required: true,
    },
  },
  //props também podem ser passadas como array, porém sem type e required.

  data() {
    return {
      title: "Using Props Son",
    };
  },
};
</script>