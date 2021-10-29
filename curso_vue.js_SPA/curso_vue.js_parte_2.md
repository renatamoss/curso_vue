## Conceitos estudados: Curso Vue JS - SPA - parte 2
 
### 29 - Diretivas
 Diretivas permitem isolar um código que pode ser aplicado em mais de um componente.

### 30 - Argumentos Vs modificadores
Uma diretiva pode suportar zero ou mais argumentos e eles servem para ditar a lógica principal da diretiva que deve ser executada. Já os modificadores podem ser usados pelos argumentos para que ativem ou não determinada lógica.

* É através de *binding.value* que temos acesso ao valor passado para a diretiva no componente que a utiliza.

* É através de *binding.modifiers* que temos acesso aos modificadores utilizados pela diretiva. Exemplo, binding.modifiers.NomeDoModificador.

* O parâmetro *el* aponta para o elemento do DOM no qual a diretiva foi associada.

```
export default {

    bind(el, binding) {
        let current = 0;
        el.addEventListener('dblclick', function () {
            let scale = binding.value || 2;
            current = scale;
            this.style.transition = `transform 0.5s`;
            this.style.transform = `scale(${current})`;
        });
        console.log(el)
    }

};
```

### 31 - Associação de dados
```
<input @input="usuario.login = $event.target.value">
```
Quando o evento *input* for disparado, tem-se acesso ao seu valor através de *$event.target.value*. Este valor pode ser usado para alterar propriedades do componente. Esta sendo realizada uma associação de dados (data binding) unidirecional.

### 32 - Two-way data binding
```
<input @input="usuario.login = $event.target.value" :value="usuario.login">
```
No entanto, o Vue possui uma diretiva especializada neste tipo de associação.
```
<input v-model="usuario.login">
```

### 33 - O padrão REST
Código de envio da foto para o servidor. No padrão *REST*, usa-se o método *POST* para incluir novos recursos. 
```
this.$http.post
        .get('http://localhost:3000/v1/fotos', this.foto)
        .then(() => this.foto = new Foto(), err => console.log(err));
```

### 34 - O módulo VeeValidate
Este módulo não faz parte dos módulos oficiais do Vue, no entanto é um dos poucos que suportam a versões iguais ou superiores à 2.0. É um plugin beta, mas como é um plugin que vem ganhando força na comunidade por ser inspirado pelo mecanismo de validação do framework PHP Laravel. Sua ideia é que o desenvolvedor tenha que escrever o mínimo de código. 

```
npm install vee-validate@2.0.0-beta.18 --save
```
Exemplo de validação *required* e *quantidade de caracteres*:
```
<input
          name="titulo"
          v-validate
          data-vv-rules="required|min:3|max:30"
          v-model="foto.titulo"
          id="titulo"
          autocomplete="off"
        />
        <span v-show="errors.has('titulo')" class="erro"
```
Para validar um campo, não é suficiente utilizar apenas a diretiva *v-validate*. Defini-se regras de validação através de *data-vv-rules*.
```
        methods: {
    grava() {
      this.$validator.validateAll().then((success) => {
        ***código omitido**
    },
  }
  ``` 
  ### 35 - Gerando arquivos para distribuir
  ```
  npm run build
  ```
  Uma série de passos será realizado, como a concatenação e minificação de scripts e toda lógica de criação de bundle do Webpack será aplicada. 

 Por incrível que pareça, todos os componentes, serviços e diretivas foram adicionados dentro do arquivo *build.js*. O arquivo *build.map* é apenas para ajudar a depurar o código. Sendo assim, basta enviar para o servidor o arquivo */index.html* e a pasta *dist* com seu conteúdo.

  ### 36 - Estilizando nosso componentes com SASS

  O Vue CLI vem parcialmente configurado para suportar este pré-processador, no entanto, deve-se instalar os módulos que ele precisa. Eles são o *node-sass* e o *sass-loader*.
  ```
  npm install node-sass@4.5.0 sass-**loader**@4.1.1 --save-dev
  ```
  ```
<!-- código anterior omitido -->

<style scoped lang="scss">
    $cor: firebrick;

    .botao-perigo {
        background: $cor;
    }

</style>
```



**Anotações feitas durante o Curso de Vue.js parte 2: Construindo Single Page Applications**
Trilha Avance em front-end construindo Single Page Applications com mais produtividade.
