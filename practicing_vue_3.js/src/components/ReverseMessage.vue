<template>
  <div id="event-handling">
    <p>{{ message }}</p>
    <button @click="reverseMessage">Reverse Message</button>
  </div>
</template>
            
            
<script>
export default{
            
data() {
    return {
      message: 'Essa mensagem será revertida!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
}
</script>
            
            
<style lang= scoped>
</style>