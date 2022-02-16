<template>
  <ComponentVfor
    v-for="item in groceryList"
    :key="item.id"
    :todo="item"
  />
</template>
            
            
<script>
import ComponentVfor from "@/components/ComponentVfor.vue";

export default {
  components: {
    ComponentVfor,
  },
  data() {
    return {
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Whatever else humans are supposed to eat" },
      ],
    };
  },
};
</script>
            
            
<style lang= scoped>
</style>