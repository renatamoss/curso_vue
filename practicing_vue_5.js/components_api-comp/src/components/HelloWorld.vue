<template>
  <div class="hello">
    <h1 @click="chamaMsg">{{ msg }}</h1>
    <button @click="enviaMsg">CLICA AQUI</button>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";


//pai para filho(via props)
const props = defineProps({
  msg: String,
});

const chamaMsg = () => {
  alert(props.msg);
};



//filho para pai(via evento)
const emit = defineEmits(["minha-messagem"]);

const enviaMsg = () => {
  emit("minha-messagem", "Estudando emit");
};


</script>





