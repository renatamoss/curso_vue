<template>
  <div>
    <p>{{ reverse() }}</p>
    <input v-model="message" />
  </div>
</template>
            
            
<script>
export default {
  data() {
    return {
      message: "Praticando Vue! :esreveR",
    };
  },
  methods: {
    reverse() {
      return this.message.split("").reverse().join("");
    },
  },
};
</script>
            
