<template>
  <li>
    {{ title }}
    <button @click="$emit('remove')">Remove</button>
  </li>
</template>
            
            
<script>
export default {
  props: ["title"],
  emits: ["remove"],
};
</script>
            
            
<style lang= scoped>
</style>