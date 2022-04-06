<template>
  <introduction-comp-api />

  <div>{{ text }}</div>
  <button @click="pushText(text)">TEXT</button>
</template>

<script>
import introductionCompApi from "./components/introductionCompApi.vue";
import { ref, onMounted } from "vue";

export default {
  components: { introductionCompApi },
  setup() {
    let text = ref("Estou testando o ref");

    function pushText(text) {
      alert(text)
    }
    

    onMounted(() => {
      console.log("Estou testando o onMounted no Composition API");
    });

    return { text, pushText };
  },
};
</script>

