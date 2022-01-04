<template>
  <div>
    <h2>{{ title }}</h2>
    <button @click="firstEvent(txt1, $event), secondEvent(txt2), thirdEvent()">
      Active Multiple Events
    </button>
    <p>{{ multiple_events }}</p>
  </div>
</template>

<script>
export default {
  name: "MultipleEvents",

  data() {
    return {
      title: "8. Multiple Events",
      multiple_events: "",
      txt1: "First Event Active",
      txt2: "Second Event Active",
    };
  },
  methods: {
    firstEvent(txt1, e) {
      e.preventDefault();
      this.multiple_events = txt1;
    },
    secondEvent(txt2) {
      setTimeout(() => (this.multiple_events = txt2), 1000);
    },
    thirdEvent() {
      setTimeout(() => this.multiple_events = "", 1500 ) ;
    },
  },
};
</script>