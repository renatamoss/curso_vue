<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Conceitos importantes do Vue JS:</p>
    <ul>
      <li v-for="(conceito, index) in conceitos_vue" :key="index">
        {{ conceito }}
      </li>
    </ul>
    <p>Tecnolgias de front-end:</p>
    <ul>
      <li v-for="tech in tech_front" :key="tech.id">
        {{ tech.language }}
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "ListRenderingVfor",
  
  data() {
    return {
      title: "6. List Rendering v-for",
      conceitos_vue: [
        "Data Binding",
        "Diretivas",
        "Methods",
        "Live Cycle Hook",
      ],
      tech_front: [
        { id: "1", language: "Javascritp" },
        { id: "2", language: "HTML" },
        { id: "3", language: "CSS" },
        { id: "4", language: "SASS" },
      ],
    };
  },
};
</script>