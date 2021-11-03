<template>
  <div>
    <img :src="avatar" :alt="description" />
  </div>
</template>


<script>
export default {
  name: "Picture",
  data() {
    return {
      avatar: "/img/avatar.png",
      description: "Renata Marques",
    };
  },
};
</script>