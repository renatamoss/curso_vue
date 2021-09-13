<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input
      type="search"
      class="filtro"
      @input="filtro = $event.target.value"
      placeholder="Filtre por parte do título"
    />

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />

          <meu-botao
            tipo="button"
            rotulo="REMOVER"
            @botaoAtivado="remove(foto, $event)"
            :confirmacao="true"
            estilo="padrao"/> 
          
        </meu-painel>
      </li>
    </ul>
  </div>
</template>


<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";

export default {
  /*componente criado*/
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },

  /*função v-bind que leva dados para view*/
  data() {
    return {
      titulo: "Mypics",
      fotos: [],
      filtro: "",
    };
  },

  /*método para filtrar*/
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        /*filtrar: trim: remove espaços - 'i': case sensitive*/
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter((foto) => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    },
  },

  /*método botão remover*/
  methods: {
    remove(foto, $event) {
      alert("Remover a foto: " + foto.titulo + " em " + $event);
    },
  },

  /*função para acessar API com fotos*/
  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then((res) => res.json())
      .then(
        (fotos) => (this.fotos = fotos),
        (err) => console.log(err)
      );
  },
};
</script>


<style  scoped>
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos-item {
  display: inline-block;
}
</style>