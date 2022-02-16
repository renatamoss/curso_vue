<template>
  <div>
    <button :disabled="isButtonDisabled">Se aparece é true</button>
    <p>
      Cada instância do componente passa por uma série de etapas de
      inicialização quando é criada - por exemplo, ele precisa configurar a
      observação de dados, compilar o modelo, montar a instância no DOM e
      atualizar o DOM quando os dados forem alterados. Ao longo do caminho, ele
      também executa funções chamadas ganchos de ciclo de vida , dando aos
      usuários a oportunidade de adicionar seu próprio código em estágios
      específicos. Por exemplo, o gancho created pode ser usado para executar o
      código depois que uma instância é criada.
    </p>
  </div>
</template>
            
            
<script>
export default {
  data() {
    return {
      title: "Estou estudando muito!",
      isButtonDisabled: true,
    };
  },
  created() {
    console.log("O que estou fazendo: " + this.title);
  },
};
</script>
            
            
<style lang= scoped>
</style>