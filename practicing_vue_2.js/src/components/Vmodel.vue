<template>
  <div id="two-way-binding">
    <p>{{ message.split('').reverse().join('') }}</p>
    <input v-model="message" />
  </div>
</template>
            
            
<script>
export default {
  data() {
    return {
      message: "Praticando Vue!",
    };
  },
};
</script>
            
