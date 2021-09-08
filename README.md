# Projeto Catpic

> Pictures of cats

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```


 # Curso Vue JS
 
### Instalando o CLI -Command Line Interface do Vue
```
npm install -g vue-cli@2.7.0
vue --version
```
Estamos instalando Vue CLI globalmente através do parâmetro *-g* para que possamos acessar o CLI de qualquer pasta através do terminal.

### Novo projeto a partir de um template
 ```
vue init webpack-simple nome_projeto
 ```
O exemplo acima usa como template o *webpack-simple*. O resultado do comando criará a pasta *nome_projeto*, no entanto, temos apenas a estrutura do projeto e uma lista de todas as suas dependências. Essas dependências não são baixadas automaticamente na construção do projeto. Precisamos entrar na pasta *nome_projeto* ainda no terminal e executarmos o comando:

 ```
 npm install
 ```
 Este comando baixará todas as dependências listadas no arquivo *nome_projeto/package.json*. Entenda esse arquivo como um catálogo de todos os recursos que nosso projeto precisa para funcionar. 

### Levantando um servidor e acessando a aplicação
```
npm run dev
```
O comando *npm run dev* executa um script criado em *nome_projeto/package.json* criado pelo próprio CLI. Ele levanta um servidor local servindo nosso projeto e abrirá automaticamente o navegador padrão do seu sistema operacional apontando para o endereço do projeto no servidor *localhost:8080.*

### Babel, Webpack e geração do bundle
Todos os arquivos da pasta **src** são transformados em um bundle chamado build.js e este é carregado pelo index.html. Inclusive o script do Vue.js faz parte desse arquivo. Então, o próprio Vue.js se encarregará de exibir o conteúdo em index.html interpretando as informações dentro do bundle. Em ambiente de desenvolvimento, o endereço /dist/build.js aponta para um endereço no servidor que aponta para um arquivo criado em memória. Esse processo agiliza o tempo de alteração do build.js a cada alteração, melhorando assim sua experiência de desenvolvimento. Para realizar as transformações anteriores, o Vue CLI utiliza respectivamente Babel e WebPack.

### Componentes declarados em Single File Templates
Single file template (template de único arquivo) que equivale a um módulo que declara um componente. 
Pense em um módulo como uma caixa preta que pode ter diversas funcionalidades e só aquelas que forem explicitamente exportadas podem ser utilizadas em outros módulos. É por isso que nosso componente é definido através de três grandes blocos: template (apresentação), script (comportamento e dados) e style (o estilo da apresentação).

### View Instance
Para que possamos carregar, ou melhor, renderizar nosso componente App em ```<div id="app"></div>``` de index.html, precisamos criar uma *view instance* com auxílio do *global view object*. Uma instância de view é uma ponte entre nossos componentes e view. 

### Renderizando um template
Vejamos nossa view instance devidamente configurada:
```
new Vue({
  el: '#app',
  render: h => h(App)
})
```
A propriedade *el* recebe como parâmetro o seletor do elemento que será substituído pelo nosso componente, já na função *render* passamos o componente que desejamos renderizar.

### Interpolação e data binding
O resultado da sintaxe especial {{ }} com o nome da propriedade que desejamos ler é chamada de *interpolação*. Dizemos que o dado foi interpolado no template. Por fim, essa interpolação segue uma regra: os dados fluem sempre da sua origem para o template e nunca o caminho contrário.Tecnicamente falando, o que a interpolação faz é uma associação de dados unidirecional chamada *data binding*. Aliás, uma característica dessa associação é que qualquer mudança no dado gera automaticamente uma atualização no template do componente. 

### Live reloading
Qualquer alteração que fizemos nossos arquivos do nosso projeto gerará um novo bundle em memória e fará com que o navegador recarregue automaticamente para refletir nossas últimas alterações. Isso só é possível porque o servidor criado pelo Vue CLI suporta LiveReloading.