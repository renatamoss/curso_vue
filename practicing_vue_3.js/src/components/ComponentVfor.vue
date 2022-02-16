<template>
  <ol>
    <li>
      {{ todo.text }}
    </li>
  </ol>
</template>
            
            
<script>
export default {
  props: ["todo"],

  data() {
    return {};
  },
};
</script>
            
            
