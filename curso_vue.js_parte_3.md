## Conceitos estudados: Protegendo recursos com autenticação e VueX
 
### 37 - Axios
 Biblioteca que encapsula todas as chamadas ao servidor. </br>
```npm install axios --save```
* O axios retorna uma *promise* e precisará ser trabalhado capturando tanto o caso de sucesso, quanto o caso de erro.
### 38 - LocalStorage
O localStorage é uma solução de armazenamento para dados disponíveis durante o uso da aplicação, mas também é preciso controlar o estado do usuário, ou seja, se está logado ou não. Para esta segunda necessidade, será utilizado o Vuex, uma biblioteca já pronta que serve para controlar o estado do usuário na aplicação.
### 39 - VUEX
```npm install vuex -- save```</br>
Com o uso do VueX o fluxo da aplicação fica concentrado em um único local, os componentes irão despachar ações e o Vuex realizará essas mediações de acordo com a regra de negócios. Portanto, a ação irá chamar a mutação que chamará o estado, enquanto o componente se preocupa apenas em renderizar o resultado disso. Logo, todas as ações ficam encapsuladas no VueX e, baseado nestas e nas reações do usuário, o componente se ajusta e renderiza as alterações.

### 40 -  Guardião global
É de responsabilidade do desenvolvedor implementar este método sempre que desejar proteger todas as rotas que não são públicas. Deve-se fazer isso por meio do **view router**. Exemplo:

```bash
//código omitido
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      publica: true
    }
//código omitido

    router.beforeEach((routeTo, routeFrom, next) => {
  if (!routeTo.meta.publica && !provedor.state.token) {
    return next({
      path:'/login'
    });
  }
  next();
})
//código omitido
```
**O hook *beforeEach* é essencial para proteger as rotas de forma global, mas não é a única opção disponível no vue-router.**

### 41 - Rota Preguiçosa
O index.js do roteador importa todos os componentes, guardando uma referência em memória para cada um deles, e logo após, apontando um componente em uma dada rota.
Para fazer isso de forma dinâmica, somente instanciando esse componente quando realmente fosse necessário, usa-se o **view router**. Ao invés de apontarmos para uma instância de um componente, chama-se um método usando a *arrow function* que retorna *import()* do mesmo componente.
* Ainda, pode-se utilizar o *web pack* para agrupar todas as rotas de um mesmo contexto em um único arquivo, fazendo uma pequena notação antes da importação.
Exemplo:

```bash
//código omitido

  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    component: () => import(/* webpackChunkName: "registrar" */ '../views/NovoUsuario.vue'),
    meta: {
      publica: true
    }

//código omitido
```
###  42 - Mixins
Consegue-se compartilhar o comportamento de logout utilizando *mixins* do vue-js, tendo flexibilidade para encapsular e compartilhar comportamentos. Pode-se "misturar" todas as propriedades do componente, encapsulando regras específicas que ficam dentro do escopo dos *mixins*, sendo chamadas somente quando necessárias.

### 43 - Getters
Quando utiliza-se o **Vuex**, é comum acessar algumas propriedades mais de uma vez, então a fim de facilitar o trabalho do desenvolvedor, pode-se criar alguns assessores para propriedades específicas, chamados de *getters*. Em index.js de "store", escreve-se que *const getters* é um objeto literal como um assessor para retornar um estado do usuário, se está logado ou não, ao invés de ficar digitando *this.$store.state.token* toda vez.

* Outra vantagem oferecida pelo *Vuex**: ao invés de definir o assessor manualmente, pode-se mapeá-lo para o interior de propriedades computadas. A função *mapGetters()* recebe como parâmetro os assessores que serão compartilhados.



**Anotações feitas durante o Curso de Vue.js: Protegendo recursos com autenticação e VueX**
Trilha Avance em front-end - Vue da Alura.
