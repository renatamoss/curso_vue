## Conceitos estudados: Curso Vue JS - SPA - parte 2
 
### 29 - Diretivas
 Diretivas permitem isolar um código que pode ser aplicado em mais de um componente.

### 30 - Argumentos Vs modificadores
Uma diretiva pode suportar zero ou mais argumentos e eles servem para ditar a lógica principal da diretiva que deve ser executada. Já os modificadores podem ser usados pelos argumentos para que ativem ou não determinada lógica.

* É através de binding.value que temos acesso ao valor passado para a diretiva no componente que a utiliza.

* É através de binding.modifiers que temos acesso aos modificadores utilizados pela diretiva. Exemplo, binding.modifiers.NomeDoModificador.

* O parâmetro el aponta para o elemento do DOM no qual a diretiva foi associada.

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
Quando o evento input for disparado, teremos acesso ao seu valor através de $event.target.value. Este valor pode ser usado para alterar propriedades do componente. Esta sendo realizada uma associação de dados (data binding) unidirecional.

### 32 - Two-way data binding
```
<input @input="usuario.login = $event.target.value" :value="usuario.login">
```
No entanto, o Vue possui uma diretiva especializada neste tipo de associação.
```
<input v-model="usuario.login">
```

### 33 - O padrão REST
Código de envio da foto para o servidor. No padrão REST, usamos o método POST para incluir novos recursos. 
```
this.$http.post
        .get('http://localhost:3000/v1/fotos', this.foto)
        .then(() => this.foto = new Foto(), err => console.log(err));
```









**Anotações feitas durante o Curso de Vue.js parte 2: Construindo Single Page Applications**
Trilha Avance em front-end construindo Single Page Applications com mais produtividade.
