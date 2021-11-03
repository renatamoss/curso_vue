<template>
  <div>
    <h2>{{ title }}</h2>
    <p v-if="active">Estou trabalhando como Programadora.</p>
    <p v-else>Estou em busca de novas oportunidades na área de Programação!</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <li>JavaScript</li>
      <li>PHP</li>
      <li>MySQL</li>
      <li v-if="skil_ok">VUE</li>
    </ul>
    <p v-show="show_email">Mande uma mensagem para: renatamoss.web@gmail.com</p>
  </div>
</template>


<script>
export default {
  name: "DirectivesVifVelseVshow",

  data() {
    return {
      title: "3. Directives v-if, v-else and v-show",
      active: false,
      skil_ok: true,
      show_email: true,
    };
  },
};
</script>