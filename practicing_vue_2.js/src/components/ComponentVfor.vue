<template>
  <ol>
    <li>
     {{todo.id}} - {{ todo.text }}
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

<style>
ol li {
  list-style: circle;
}
</style>
            
            
