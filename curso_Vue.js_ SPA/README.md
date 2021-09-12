# Projeto Mypics


### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```


 ## Conceitos estudados: Curso Vue JS - SPA
 
### Instalando o CLI -Command Line Interface do Vue
```
npm install -g vue-cli@2.7.0
vue --version
```
Instalando Vue CLI globalmente através do parâmetro *-g* é possível acessar o CLI de qualquer pasta através do terminal.

### Novo projeto a partir de um template
 ```
vue init webpack-simple nome_projeto
 ```
O exemplo acima usa como template o *webpack-simple*. O resultado do comando criará a pasta *nome_projeto*, no entanto, tem-se apenas a estrutura do projeto e uma lista de todas as suas dependências. Essas dependências não são baixadas automaticamente na construção do projeto. É necessário entrar na pasta *nome_projeto* ainda no terminal e executar o comando:

 ```
 npm install
 ```
 Este comando baixará todas as dependências listadas no arquivo *nome_projeto/package.json*. Entenda-se esse arquivo como um catálogo de todos os recursos que o projeto precisa para funcionar. 

### Levantando um servidor e acessando a aplicação
```
npm run dev
```
O comando *npm run dev* executa um script criado em *nome_projeto/package.json* criado pelo próprio CLI. Ele levanta um servidor local servindo o projeto e abrirá automaticamente o navegador padrão do sistema operacional apontando para o endereço do projeto no servidor *localhost:8080.*

### Babel, Webpack e geração do bundle
Todos os arquivos da pasta **src** são transformados em um bundle chamado build.js e este é carregado pelo index.html. Inclusive o script do Vue.js faz parte desse arquivo. Então, o próprio Vue.js se encarregará de exibir o conteúdo em index.html interpretando as informações dentro do bundle. Em ambiente de desenvolvimento, o endereço /dist/build.js aponta para um endereço no servidor que aponta para um arquivo criado em memória. Esse processo agiliza o tempo de alteração do build.js a cada alteração, melhorando assim sua experiência de desenvolvimento. Para realizar as transformações anteriores, o Vue CLI utiliza respectivamente Babel e WebPack.

### Componentes declarados em Single File Templates
*Single file template (template de único arquivo)* que equivale a um módulo que declara um componente. 
Pense em um módulo como uma caixa preta que pode ter diversas funcionalidades e só aquelas que forem explicitamente exportadas podem ser utilizadas em outros módulos. É por isso que o componente é definido através de três grandes blocos: template (apresentação), script (comportamento e dados) e style (o estilo da apresentação).

### View Instance
Para que se possa carregar, ou melhor, renderizar o componente App em ```<div id="app"></div>``` de index.html, precisa-se criar uma *view instance* com auxílio do *global view object*. Uma instância de *view* é uma ponte entre os componentes e *view*. 

### Renderizando um template
Vejamos a *view instance* devidamente configurada:
```
new Vue({
  el: '#app',
  render: h => h(App)
})
```
A propriedade *el* recebe como parâmetro o seletor do elemento que será substituído pelo componente, já na função *render* passa-se o componente que se deseja renderizar.

### Interpolação e data binding
O resultado da sintaxe especial {{ }} com o nome da propriedade que se deseja ler é chamada de *interpolação*. Diz-se que o dado foi *interpolado no template*. Por fim, essa interpolação segue uma regra: os dados fluem sempre da sua origem para o template e nunca o caminho contrário.Tecnicamente falando, o que a interpolação faz é uma associação de dados unidirecional chamada **data binding**. Aliás, uma característica dessa associação é que **qualquer mudança no dado gera automaticamente uma atualização no template do componente.** 

### Live reloading
Qualquer alteração feita nos arquivos do projeto gerará um novo bundle em memória, e fará com que o navegador recarregue automaticamente para refletir as últimas alterações. Isso só é possível porque o servidor criado pelo Vue CLI suporta *LiveReloading*.

### Template e view root
Para exibir mais de um elemento dentro da tag template, os elementos devem estar dentro de um elemento pai. 
```
<template>
  <div>
    <h1>Catpic</h1>
    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwV4kVzT5McBdGSgqlVeRzubrNH_mOrrkKseDOGFURq20HmsrelEfMU7It" alt="Cat">
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
```

### Data binding interpolação em atributos
Não se pode usar interpolação em atributos. É necessário fazer de outra maneira, usando a sintaxe *v-bind:nomeDoAtributo*. O valor é atribuído diretamente, sem **{{}}** como *v-bind:src="foto.url"*. É o Vue que fará a interpolação por debaixo dos panos.

### A diretiva v-bind
O tópico acima é o uso de uma diretiva do Vue. Diretivas nada mais são do que um código interpretado pelo Vue que encapsula determinada funcionalidade ensinando novos truques para o navegador. Tanto isso é verdade que no mundo HTML não existe *v-bind*, logo, esta diretiva esta sendo interpretada pelo Vue.

### Um atalho elegante para v-bind
No entanto, pode parecer um tanto verboso usar a sintaxe *v-bind* para realizar uma associação unidirecional que vai da fonte de dados para a view. Nesse caso pode-se trocar *v-bind* pelo seu atalho *dois pontos:*.
```
    <img :src="foto.url" :alt="foto.titulo">
```

### A diretiva v-for
Se para cada item de um *array* se quer construir uma tag *li* que esta sendo iterada no momento, como um *forEach* em JavaScript, o próprio Vue disponibiliza a diretiva *v-for* que permite realizar laço dentro do template. A diretiva *v-for* pode ser usada com *of ou in*. A primeira é mais perto da sintaxe dos iterators do JavaScript.
```
 <li class="lista-fotos-item" v-for="foto in fotos">
```

### VueResource 
Para integrar uma aplicação com uma API, podería-se fazer essa integração realizando requisições Ajax através do *XmlHttpRequest*, aquele objeto do mundo JavaScript que permite realizar requisições Ajax ou até mesmo realizar esse tipo de requisição através do jQuery. No entanto, o Vue possui um módulo que se integra perfeitamente com todo o seu ecossistema. Este módulo se chama **VueResource**. O VueResource não vem habilitado por padrão no projeto, inclusive precisa-se baixá-lo através do npm. 
```
npm install vue-resource@1.0.3 --save
```
Por mais que o npm baixe o módulo, ele ainda não esta acessível pela nossa aplicação. Precisa-se registrá-lo no *global view object* do Vue. Como sua ativação é feita no objeto de *view global*. Para isso, altera-se o arquivo *src/main.js*.
```
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

// registrando o módulo/plugin no global view object
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
```

### Lifecycle Hooks
 São funções dos nossos componentes que são chamadas em etapas diferentes do ciclo de vida de um componente, ou seja, desde a sua criação até sua destruição. Podemos executar códigos arbitrários em qualquer *hook (gancho)* do ciclo de vida. Um exemplo de *hook* é a função *created*.

### Criando um shared component
 Todo componente em Vue é uma unidade de código que pode encapsular sua marcação, estilo e comportamento, este último, ações que podem ser realizadas com ele. Um *shared component* é aquele reutilizável por outros componentes da aplicação. Aquele que, por convenção, pode fazer parte da pasta components/shared, apesar disso não ser uma regra.

 ### Propriedade props
Na parte scripts, tem-se a propriedade **props**. Nela é possível passar uma lista de propriedades que podem ser recebidas pelo componente. Essas propriedades podem ser acessadas no template do componente através de interpolação. 
Dentro da tag que representa o título do componente, usa-se **{{ titulo }}**.
```
<script>
export default {
   props: ['titulo']
}
</script>
```

Com essa última alteração, nada será exibido no navegador. Isto porque é necessário importar o componente criado em App.vue para poder utilizá-lo:

### Components
Só importar o componente não é suficiente. Precisa-se indicar em App.vue como será referenciado o componente em seu template. Pode-se escolher qualquer nome, no caso, no código abaixo será *meu-painel*. É através da propriedade components que associa-se o nome *meu-painel* ao componente:
```
<script>
import Painel from './components/shared/painel/Painel.vue'

export default {
  components: {
    'meu-painel': Painel
  },

  data () {
    return {
*código omitido*
```
### Slot
Quando o Vue renderiza o componente *Painel* em App, ele não entende que deve preservar tudo aquilo que esta entre as tags *<meu-painel>*. O Vue manipula aquela parte do DOM trocando-a pela renderização do componente *Painel*. Para que isso seja possível, precisa-se indicar no template de Painel a área que quer-se considerar como um *slot*, ou seja, aquela área que recebera tudo aquilo que tiver dentro da tag *<meu-painel>*. Para isso, altera-se o template *src/components/shared/painel/Painel.vue* e trocar a *div* conteúdo pelo componente *slot*. O componente final fica assim:
```
<template>
  <div class="painel">
    <h2 class="painel-titulo">{{ titulo }}</h2>
    <slot class="painel-conteudo">
    </slot>
  </div>
</template>
```

### Estilos com escopo de componente
É uma boa prática usar um escopo de componente quando criamos nossos componentes reutilizáveis, evitando assim que os estilos de um componente interfiram no estilos de outro.
```
<style scoped>
 .painel {
    padding: 0 auto;
    border: solid 2px grey;
*código omitido*
```

### A diretiva v-on e mais um tipo de data binding: v-on:input
Sabe-se que no mundo JavaScript há o evento *input* disparado toda vez que algum valor é inserido no campo. Altera-se a tag *input* do template e adicionar a diretiva *v-on:input*:
```
<input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtre pelo título da foto">
{{ filtro }}
<!-- código omitido -->
```
Cada dígito no local da interpolação será exibido o valor digitado no *input*. Com pouquíssimo esforço captura-se o valor digitado pelo usuário e exibe automaticamente na tela *{{ filtro }}*.</br>

**Faz-se necessário adicionar no objeto retornado pela função data do componente a propriedade *filtro*.** </br>

Por fim, vale ressaltar que:
- [x] *v-on* realiza um data binding unidirecional que flui da **view para os dados**;
- [x] e a interpolação ou *v-bind* realiza uma associação unidirecional que flui dos **dados para view**.

### Computed property
 Sempre que tiver que realizar algum cálculo ou aplicar alguma lógica dinamicamente usa-se o *computed property*. Dentro da *computed property* pode-se acessar dados através de *this*. Isso é possível porque Vue internamente aplica sua mágica para que o *this* tenha acesso a todos as propriedade definidas na função *data*.
 **Uma *computed property* pode ser acessada como uma propriedade na view. Sendo assim, na diretiva *v-for* deve-se alterar para o *computed property*.**

 ### A diretiva v-show
 Se quer esconder o conteúdo do painel, não removê-lo. Para isso há a diretiva *v-show*. Quando adicionada em um elemento, quando seu valor for *true*, o elemento será exibido, se for *false*, será ocultado. Por debaixo dos panos a diretiva realiza um *display: none*.
 **Não se pode usar a diretiva *v-show* diretamente na tag *slot*. É necessário envolvê-lo em uma tag *div* e nela usar a diretiva.**

### Bind de eventos: v-on:dblclick
 Através da diretiva *v-on* pode-se executar um código a partir de um evento do JavaScript. Nesse caso, adiciona-se um *v-on:dblclick* para responder ao evento click na tag que representa a ação do click.

### Atalho para v-on
Da mesma forma que se tem um atalho para *v-bind* (: dois pontos), há um atalho para a diretiva *v-on*. No caso, basta adicionar o nome do evento com o prefixo **@** (arroba):
```
  <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>
```

### Componente transition
O Vue precisa delimitar a área do template no qual fará a ação. Para realizar a transição no conteúdo, é necessário envolver a div com uma classe pelo componente *transition*. Obrigatoriamente precisa-se escolher um *name* para ele. </br>

Em primeiro lugar, *transition* só pode ser usado com um elemento, se tentarmos colocar mais um elemento como filho do nosso wrapper receberemos um erro.
O componente transition adiciona dinamicamente nos seus elementos filhos as seguintes classes dinamicamente:
```
name-enter // antes do elemento ser incluído ou removido, o estado atual
name-enter-active // quando o elemento esta sendo incluído
name-leave-active // quando o elemento esta sendo removido
```
Exemplo:
```
<template>
  <div class="painel">
    <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>
    <transition name="painel-fade">
      <div class="painel-conteudo" v-show="visivel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
```
```
<style>
 /* código anterior omitido */

.painel-fade-enter, .painel-fade-leave-active {
  opacity: 0
}

.painel-fade-enter-active, .painel-fade-leave-active {
  transition: opacity .4s
}
</style>
```

### Single Page Applications
Single Page Applications são páginas que não recarregam durante seu uso com experiência semelhante a um aplicativo. Neste tipo de aplicação carregamos apenas a página principal da aplicação, por exemplo, index.html. Depois que essa página é carregada, o desenvolvedor usurpa o controle do navegador e a busca de novas páginas deixa de ser feita pelo navegador e passam a ser feitas pelo JavaScript.

Para se entender como uma página que nunca recarrega é capaz de exibir outras páginas é necessário entender o conceito de **rotas** e como implementá-la com Vue. 

### VueRouter
Se faz necessário separar a responsabilidade de *App* que será o ponto no qual será exibido os componentes *Home* e *Cadastro*. Então instala-se a infraestrutura necessária para que a magia do SPA aconteça. Por padrão o Vue não é capaz de resolver a questão que é o carregamento de um ou outro componente de acordo com uma rota específica, para isso, utiliza-se o módulo VueRouter.
```
npm install vue-router@2.1.1 --save
```
**As diretivas router-view e router-link são diretivas bastante utilizadas para ativar o sistema de rotas do VueRouter.**

É uma boa prática declarar as rotas da aplicação em um arquivo em separado. . Nele exporta-se uma constante que é um array. No array *routes*, precisa-se ter um objeto Javascript com as propriedades **path** e ****component**. O primeiro é a caminho que identifica o componente, o segundo o componente que será carregado para este caminho presente na url do navegador:
```
export const routes = [
    { path: '', component: Home },
    { path: '/cadastro', component: Cadastro }
];
```

Após cria-se uma instância de VueRouter no *main.js* passando como parâmetro um objeto JavaScript com a propriedade *routes* que deve receber como parâmetro as rotas importadas:
```
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes : routes
});

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
```
Por fim, usa-se uma diretiva especial do VueRouter, uma que indica em que lugar do template de App os componentes serão carregados. Essa diretiva se chama **router-view**:
```
<template>
  <div class="corpo">

    <router-view></router-view>

  </div>
</template>
```

