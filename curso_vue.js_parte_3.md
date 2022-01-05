## Conceitos estudados: Protegendo recursos com autenticação e VueX
 
### 1 - Axios
 Biblioteca que encapsula todas as chamadas ao servidor. 
 ```npm install axios --save```
* na tag <script> fazer o import da biblioteca: *import axios from 'axios';*
* O axios retorna uma promise, e então precisará ser trabalhado capturando tanto o caso de sucesso, quanto o caso de erro.
### LocalStorage
O localStorage é uma solução de armazenamento para dados disponíveis durante o uso da aplicação, mas também é preciso controlar o estado do usuário, ou seja, se está logado ou não. Para esta segunda necessidade, será utilizado o Vuex, uma biblioteca já pronta que serve para controlar o estado do usuário na aplicação.
### VUEX
```npm install vuex -- save```
Com o uso do VueX o fluxo da aplicação fica concentrado em um único local, então os componentes irão despachar ações e o Vuex realizará essas mediações de acordo com a regra de negócios. Portanto, a ação irá chamar a mutação que chamará o estado, enquanto o componente se preocupa apenas em renderizar o resultado disso. Logo, todas as ações ficam encapsuladas no VueX e, baseado nestas e nas reações do usuário, o componente se ajusta e renderiza as alterações.




**Anotações feitas durante o Curso de Vue.js: Protegendo recursos com autenticação e VueX**
Trilha Avance em front-end - Vue da Alura.
