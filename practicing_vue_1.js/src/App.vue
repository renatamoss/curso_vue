<template>
  <div class="app">
    <h1>{{ title }}</h1>

    <InputDataBinding />
    <LifeCycleHook />
    <DirectivesVifVelseVshow />
    <DynamicsAttributesVbind />
    <Methods />
    <ListRenderingVfor />
    <EventsClickSubmit />
    <MultipleEvents />
    <UsingPropsDad />
    <UsingEmitDad />
  </div>
</template>


<script>
import InputDataBinding from "./components/InputDataBinding.vue";
import LifeCycleHook from "./components/LifeCycleHook.vue";
import DirectivesVifVelseVshow from "./components/DirectivesVifVelseVshow.vue";
import DynamicsAttributesVbind from "./components/DynamicsAttributesVbind.vue";
import Methods from "./components/Methods.vue";
import ListRenderingVfor from "./components/ListRenderingVfor.vue";
import EventsClickSubmit from "./components/EventsClickSubmit.vue";
import MultipleEvents from "./components/MultipleEvents.vue";
import UsingPropsDad from "./components/UsingProps/UsingPropsDad.vue";
import UsingEmitDad from "./components/UsingEmit/UsingEmitDad.vue";

export default {
  name: "App",

  components: {
    InputDataBinding,
    LifeCycleHook,
    DirectivesVifVelseVshow,
    DynamicsAttributesVbind,
    Methods,
    ListRenderingVfor,
    EventsClickSubmit,
    MultipleEvents,
    UsingPropsDad,
    UsingEmitDad,
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
