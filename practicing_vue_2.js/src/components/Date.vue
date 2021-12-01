<template>
<div id="bind-attribute">
  <span v-bind:title="message">
    Praticando Vue!
    {{ message }}
  </span>
</div>
</template>
            
            
<script>
export default{
 data() {
    return {
      message: 'Nesta data estou praticando Vue: ' + new Date().toLocaleString()
    }
  } 
}
</script>
            
            
