<template>
  <h2>{{ title }}</h2>
  <p v-if="active">Estou trabalhando como Programadora.</p>
  <p v-else>Estou em busca de novas oportunidades na área de Programação!</p>
  <p>Utilizo as seguintes tecnologias:</p>
  <ul>
    <li>JavaScript</li>
    <li>PHP</li>
    <li>MySQL</li>
  </ul>
  <p v-show="show_email">
    Mande uma mensagem para: renatamoss.web@gmail.com
  </p>
</template>


<script>
export default {
  name: "DiretivasVifVelse",

  data() {
    return {
      title: "3. Diretivas v-if e v-else",
      active: false,
      show_email: true,
    };
  },
};
</script>