<template>
  <div>
    <div>
      <p>
        Uma invocação de método sempre executará a função sempre que ocorrer uma
        nova renderização.
      </p>
    </div>

    <div id="counter">Counter: {{ counter }}</div>

    <button @click="increment">Soma Number</button>
    <div id="counter">Number: {{ number }}</div>

    <span>{{ formatDate() }}</span>
  </div>
</template>
      
      
<script>
export default {
  data() {
    return {
      counter: 0,
      number: 0,
    };
  },
  methods: {
    increment() {
      this.number++;
    },
    formatDate() {
      const date = new Date().toLocaleString();
      return date;
    },
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
};
</script>