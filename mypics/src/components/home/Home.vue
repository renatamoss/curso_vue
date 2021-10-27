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

          <router-link :to="{ name: 'cadastro'}">
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
      this.$http.delete(`v1/fotos/${foto._id}`).then(
        () => {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
          this.mensagem = "Foto removida com sucesso";
        },
        (err) => {
          this.mensagem = "Não foi possível remover a foto";
          console.log(err);
        }
      );
    },
  },

  /*função para acessar API com fotos*/
  created() {
    this.$http
      .get("v1/fotos")
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