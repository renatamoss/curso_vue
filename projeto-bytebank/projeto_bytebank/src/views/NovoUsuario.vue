<template>
  <div class="container">
    <h1>Novo Usuario</h1>
    <form @submit.prevent="enviarFormulario">
      <div class="form.group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" v-model="usuario.nome" />
      </div>
      <div class="form.group">
        <label for="email">E-mail</label>
        <input type="email" class="form-control" v-model="usuario.email" />
      </div>
      <div class="form.group">
        <label for="senha">Senha</label>
        <input type="password" class="form-control" v-model="usuario.senha" />
      </div>
      <button class="btn btn-primary" type="submit">Cadastrar</button>
    </form>
  </div>
</template>
            
            
<script>

export default {
  props: {},
  components: {},
  data() {
    return {
      usuario: {
        nome: "",
        email: "",
        senha: "",
      },
    };
  },

  methods: {
    //capturando dados do usuário
    //colocando na rota de login: this.$router.push({ name: "login" });
    enviarFormulario() {
      this.$http
        .post("auth/register", this.usuario)
        .then((resposta) => {
          console.log(resposta);
          this.$router.push({ name: "login" });
        })
        .catch((erro) => console.log(erro));
    },
  },
};
</script>
            
            
