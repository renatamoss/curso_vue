<template>
  <div class="app">
    <h1>{{ title }}</h1>

    <InputDataBinding />
    <LifeCycleHook />
    <DiretivasVifVelse />
    <AtributosDinamicosVbind />
    <Methods />
    <RenderizacaoListasVfor />
    <EventosClickSubmit />
  </div>
</template>


<script>
import InputDataBinding from "./components/InputDataBinding.vue";
import LifeCycleHook from "./components/LifeCycleHook.vue";
import DiretivasVifVelse from "./components/DiretivasVifVelse.vue";
import AtributosDinamicosVbind from "./components/AtributosDinamicosVbind.vue";
import Methods from "./components/Methods.vue";
import RenderizacaoListasVfor from "./components/RenderizaçãoListasVfor.vue";
import EventosClickSubmit from "./components/EventosClickSubmit.vue";

export default {
  name: "App",

  components: {
    InputDataBinding,
    LifeCycleHook,
    DiretivasVifVelse,
    AtributosDinamicosVbind,
    Methods,
    RenderizacaoListasVfor,
    EventosClickSubmit,
  },

  data() {
    return {
      title: "Practicing Vue.Js",
    };
  },
};
</script>


<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  color: black;
}
</style>
