# Build Setup

``` bash

# install CLI -Command Line Interface do Vue
npm install -g @vue/cli
vue --version

# new project template
vue create my-project
# OR inside the folder
vue create .
 
# install dependencies
npm install

# build for production with minification
npm run build

```

## Conceitos estudados: Trilha Formação Vue JS Alura

### Curso Vue JS - SPA - parte 1

##### 1 - Babel, Webpack e geração do bundle;
##### 2 - Componentes declarados em Single File Templates: template, script e style;
##### 3 - View Instance: renderizando o componente App em ```<div id="app"></div>```;
##### 4 - Renderizando um template com instância raiz do Vue *new Vue*;
##### 5 - Data binding e Interpolação: sintaxe especial {{ }} - dados fluem origem para o template;  
##### 6 - Live reloading: atualização nas alterações automaticamente; 
##### 7 - Template e view root: os elementos  dentro de um elemento pai;
##### 8 - Data binding interpolação em atributos: ```v-bind:nomeDoAtributo```;
##### 9 - A diretiva v-bind ```<button type="image" v-bind:src="endereco"></button>```;
##### 10 - Atalho para v-bind: pode-se trocar *v-bind* por *dois pontos:* ``` <img :src="foto.url" :alt="foto.titulo">```;
##### 11 - A diretiva v-for ```<li class="lista-fotos-item" v-for="foto in fotos">```;
##### 12 - Módulo VueResource: Integrando APIs ```npm install vue-resource@1.0.3 --save```;
##### 13 - Lifecycle Hooks: Um exemplo de *hook* é a função *created* e são chamados com seu *this*;
##### 14 - Criando um shared component: encapsulando marcação, estilo e comportamento;
##### 15 - Propriedade props: propriedades que podem ser recebidas pelo componente;
##### 16 - Components: referenciando o componente em seu template;
##### 17 - Slot:  área que receberá tudo aquilo que tiver dentro da tag *slot*;
##### 18 - Estilos com escopo de componente ```<style scoped>```;
##### 19 - A diretiva v-on e mais um tipo de data binding: v-on:input
##### 20 - Computed property: *this*. Na diretiva *v-for* deve-se alterar para *computed property*;
##### 21 - A diretiva v-show: a diretiva realiza um ```display: none```;
##### 22 - Bind de eventos: v-on:dblclick: representa a ação do click;
##### 23 - Atalho para v-on: basta adicionar o nome do evento com o prefixo **@** (arroba);
##### 24 - Componente transition: div com uma classe pelo componente *transition*;
##### 25 - Single Page Applications:novas páginas deixam de carregadas e passam a ser feitas pelo JavaScript;
##### 26 - VueRouter: ativando o sistema de rotas do VueRouter ```npm install vue-router@2.1.1 --save```;
##### 27 - Disparando eventos nativos: o modificador *native* no evento clique;
##### 28 - Eventos customizados: a lógica de execução deve ser feita no elemento pai: ```this.$emit```.

### Curso Vue JS - SPA - parte 2

##### 29 - Diretivas: permitem isolar um código que pode ser aplicado em mais de um componente.;
##### 30 - Argumentos Vs modificadores;
##### 31 - Associação de dados: ```<input @input="usuario.login = $event.target.value">```;
##### 32 - Two-way data binding: ```<input v-model="usuario.login">```;
##### 33 - O padrão REST;
##### 34 - O módulo VeeValidate;
##### 35 - Gerando arquivos para distribuir: ```npm run build``` ;
##### 36 - Estilizando nosso componentes com SASS.

### Curso Vue JS - Protegendo recursos com autenticação e VueX

##### 37 - Axios: ```npm install axios --save```;
##### 38 - LocalStorage
##### 39 - VUEX: ```npm install vuex -- save```;
##### 40 -  Guardião global: Deve-se fazer isso por meio do **view router**;
##### 41 - Rota Preguiçosa: ```component: () => import(/* webpackChunkName: "registrar" */ '../views/NovoUsuario.vue')```;
##### 42 - Mixins: flexibilidade para encapsular e compartilhar comportamentos;
##### 43 - Getters.


### Conceitos Base:

## Diretivas
### *v-bind* diretiva é usada para atualizar reativamente um atributo HTML

```bash
<a v-bind:href="url"> ... </a>
# vincula o href atributo do elemento ao valor da expressão url;

<a :href="url"> ... </a>
# forma abreviada;

<p v-if="veja">Agora você me vê</p>
# remove/insere a tag com base veracidade do veja;

<li class="lista-fotos-item" v-for="foto of fotos">
# captura itens do array(dados)  e atualiza no HMTL;

<button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">
# :class="estiloDoBotao: escuta DOM envia para computed;
# :type="tipo": escuta DOM envia para props;

<div class="painel-conteudo" v-show="visivel">
# de data para DOM: realiza um *display: none*;
```

### *v-on* diretiva que escuta eventos DOM

```bash
<a v-on:click="fazerAlgo"> ... </a>
# representa a ação do click;

<a @click="doSomething"> ... </a>
# forma abreviada;

<input type="search" @input="filtro = $event.target.value"/>
# captura valor imput envia para data;

<meu-botao tipo="button" rotulo="REMOVER" @botaoAtivado="remove(foto, $event)" :confirmacao="true" estilo="padrao"/></meu-painel>
# botaoAtivado: escuta click chama methods;
```

### Estrutura do Script
* **props:** envia valor para o componente, porém não é possível modificar seus valores, eles são valores “somente leitura”;
* **components:** podem ser usados no template e criados posteriormente;
* **data:** função v-bind que leva dados para view;
* **computed:** propriedade computada - para qualquer lógica complexa - e são armazenadas em cache;
* **methods:** sempre executará a função sempre que ocorrer uma nova renderização; 
Nos casos em que não se deseja o armazenamento em cache, usa-se um método;
* **created:** para configurar coisas no componente, tanto durante a renderização do cliente quanto na renderização do servidor.


![img_vuejs](vue.png)



