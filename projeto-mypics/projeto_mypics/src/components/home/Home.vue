<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>

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

          <router-link :to="{ name: 'altera', params: { id: foto._id } }">
            <meu-botao tipo="button" rotulo="ALTERAR" estilo="padrao" />
          </router-link>

          <meu-botao
            tipo="button"
            rotulo="REMOVER"
            @botaoAtivado="remove(foto, $event)"
            :confirmacao="true"
            estilo="perigo"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>


<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import FotoService from "../../domain/FotoService/FotoService.js";

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
      mensagem: "",
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
    remove(foto) {
      this.service.apaga(foto._id).then(
        //function 1: foto removida com sucesso
        () => {
          let indice = this.fotos.indexOf(foto); //pegando a posição da foto no array
          this.fotos.splice(indice, 1); //removendo o item do array
          this.mensagem = "Foto removida com sucesso";
        },
        //function 2: erro
        (err) => {
          this.mensagem = err.message;
          
        }
      );
    },
  },

  /*função para acessar API com fotos*/
   created() {

    this.service = new FotoService(this.$resource);

    this.service.lista()
      .then(fotos => this.fotos = fotos, err => this.mensagem = err.message);
  }
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