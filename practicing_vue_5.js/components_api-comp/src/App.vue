<template>
  <HelloWorld 
  :msg="msg"
  @minha-messagem="alertaMessagem" />
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";

//props: ação executada no filho, dados do pai
const msg = ref("Estou estudando components com API Composition");


//emit: ação executada no pai, ordem do filho
const alertaMessagem = (msgEmit) => {
  alert(msgEmit)
}


</script>


