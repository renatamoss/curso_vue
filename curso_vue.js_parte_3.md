## Conceitos estudados: Protegendo recursos com autenticação e VueX
 
### 37 - Axios
 Biblioteca que encapsula todas as chamadas ao servidor. </br>
```npm install axios --save```
  
O axios retorna uma *promise* e precisará ser trabalhado capturando tanto o caso de sucesso, quanto o caso de erro.

**Interceptando as requisições HTTP:** No desenvolvimento de um projecto, normalmente usa-se uma nova instância do axios em vários componentes. Isso faz com que cada componente renderizado tenha uma nova instância do axios criada. Para evitar essa situação, cria-se um único arquivo responsável por criar essa instância do axios e deixá-la disponível para o elemento que for utilizá-la, usando sempre a mesma instância.

```
//código omitido
const http = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Accept': 'applicaton/json',
        'Content': 'application/json'
    }
})
//código omitido
```
É normal que vários componentes necessitem dessa instância, e pensando nesses objetos comuns a todos os componentes, o Vue.js permite criá-los e deixá-los disponíveis em todas as instâncias de todos os componentes de forma **global**, basta incluir no arquivo **main.js**.
```
//código omitido
import http from "@/http"

Vue.prototype.$http = http
//código omitido

```
**Interceptors:** É comum quando se faz o login, pega o token e o envia nas requisições seguintes para o servidor identificar a permissão. Neste caso, implementa-se o comportamento de adicionar o header com autorização por padrão. Acessando os **interceptors** que irão interceptar cada vez que houver uma requisição.
```
//código omitido
http.interceptors.request.use(function (config) {
    const token = store.state.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, function (erro) {
    return Promise.reject(erro)
})
//código omitido
```

### 38 - LocalStorage
O localStorage é uma solução de **armazenamento** para dados disponíveis durante o uso da aplicação, mas também é preciso **controlar o estado do usuário**, ou seja, se está logado ou não. Para esta segunda necessidade, será utilizado o **Vuex**, uma biblioteca já pronta que serve para controlar o estado do usuário na aplicação.
### 39 - VUEX
```npm install vuex -- save```</br>
Com o uso do VueX o fluxo da aplicação fica concentrado em um único local, os componentes irão despachar ações e o Vuex realizará essas mediações de acordo com a regra de negócios. Portanto, a **ação** irá chamar a **mutação** que chamará o **estado**, enquanto o componente se preocupa apenas em renderizar o resultado disso. Logo, todas as ações ficam encapsuladas no VueX e, baseado nestas e nas reações do usuário, o componente se ajusta e renderiza as alterações.

* **State:** Dentro da pasta *src*, cria-se um novo arquivo chamado **store.js** para o state. A *const state* conterá o *state do token* e do *usuario*. Precisa-se configurar o VueX e pedir para o view utilizá-lo deixando-o disponível para os componentes, faz-se a importação do Vuex de 'vuex' e o exporta por padrão default. Este possui um método chamado **Store()**, que receberá um objeto de configuração. 

```
//código omitido
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
//código omitido
```
Além disso, precisa-se dizer ao Vue no arquivo *main.js* que use o Vuex para estar operante na aplicação e disponível, assim como temos o router e outras bibliotecas.
```
//código omitido
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//código omitido
```

* **Mutations:** O Vuex é um padrão para controle de estado, e portanto não permite que alterações sejam feitas de maneira aberta. Precisa-se utilizar as próprias ferramentas do Vuex para realizar alterações dentro do estado. Logo, realiza-se uma **mutation**. Em **store.js**, assim como defido o **state**, adiciona o **const mutations** para alterarmos a informação.
*É interessante assinalar que as mutações em Veux são escritas em caixa alta e as ações não, isso é uma convenção dos desenvolvedores para facilitar a identificação desses elementos no código.*
```
//código omiitdo
const mutations = {
    DEFINIR_USUARIO_LOGADO(state, { token, usuario }) {
        state.token = token
        state.usuario = usuario
    },
    DESLOGAR_USUARIO(state) {
        state.token = null
        state.usuario = {}
    }
}
//código omitido
```

* **Actions:** Em projetos que utilizam Vuex todas as ações *http* ficam encapsuladas dentro da *store*, pois o Vuex além de disponibilizar mutações, há também as **ações.** 

**VUE COMPONENTS -> dispatch -> ACTIONS -> commit -> MUTATIONS -> mutate -> STATE -> render -> VUE COMPONENTS**

### 40 -  Guardião global
É de responsabilidade do desenvolvedor implementar este método sempre que desejar proteger todas as rotas que não são públicas. Deve-se fazer isso por meio do **view router**. 
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
*O hook *beforeEach* é essencial para proteger as rotas de forma global, mas não é a única opção disponível no vue-router.*

### 41 - Rota Preguiçosa
O index.js do roteador importa todos os componentes, guardando uma referência em memória para cada um deles, e logo após, apontando um componente em uma dada rota.
Para fazer isso de forma dinâmica, somente instanciando esse componente quando realmente fosse necessário, usa-se o **view router**. Ao invés de apontarmos para uma instância de um componente, chama-se um método usando a *arrow function* que retorna *import()* do mesmo componente.
*Ainda, pode-se utilizar o *web pack* para agrupar todas as rotas de um mesmo contexto em um único arquivo, fazendo uma pequena notação antes da importação.*
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

### 43 - Getters: retornando um estado do usuário
Quando utiliza-se o **Vuex**, é comum acessar algumas propriedades mais de uma vez, então a fim de facilitar o trabalho do desenvolvedor, pode-se criar alguns assessores para propriedades específicas, chamados de *getters*. Em index.js de "store", escreve-se que *const getters* é um objeto literal como um assessor para retornar um estado do usuário, se está logado ou não, ao invés de ficar digitando *this.$store.state.token* toda vez.

*Outra vantagem oferecida pelo *Vuex**: ao invés de definir o assessor manualmente, pode-se mapeá-lo para o interior de propriedades computadas. A função *mapGetters()* recebe como parâmetro os assessores que serão compartilhados.*



**Anotações feitas durante o Curso de Vue.js: Protegendo recursos com autenticação e VueX**
Trilha Avance em front-end - Vue da Alura.
