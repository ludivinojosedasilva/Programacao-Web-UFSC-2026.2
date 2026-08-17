\# Programação Web — Resumão da Aula 1-> Esse resumão foi feito depois de primeiro estudo com (CHATGPT), baseando nos conteúdos básico da disciplina, mas deve considerar apenas o que foi tratado nas aulas passadas e prosseguir nos estudos de acordo com os conteúodos abordados nas aulas.



\## 1. HTML



HTML (\*\*HyperText Markup Language\*\*) é utilizado para estruturar páginas Web.



Exemplo:



<html>

<body>



<h1>Minha página</h1>

<p>Olá!</p>



</body>

</html>



\### Links



<a href="http://www.google.com">GOOGLE</a>

<a href="http://www.ufsc.br">UFSC</a>



\- `<a>` cria um link.

\- `href` define o destino.



\### Imagens



<img src="imagem.png" alt="figura">



\- `src`: endereço da imagem.

\- `alt`: texto alternativo.



\---



\# 2. HTTP



HTTP (\*\*HyperText Transfer Protocol\*\*) é o protocolo utilizado para comunicação entre clientes e servidores Web.



Fluxo básico:



Cliente (Browser)

&#x20;      |

&#x20;      | requisição HTTP

&#x20;      v

Servidor

&#x20;      |

&#x20;      | resposta HTTP

&#x20;      v

Cliente



Uma requisição pode possuir:



\- método HTTP;

\- URL/caminho;

\- headers;

\- body.



Uma resposta pode possuir:



\- código de status;

\- headers;

\- conteúdo.



\---



\# 3. Servidor Web



Um servidor Web é um programa que recebe requisições HTTP e produz respostas.



Exemplo:



Browser

&#x20;  |

&#x20;  | GET /

&#x20;  v

Servidor Node.js

&#x20;  |

&#x20;  | resposta

&#x20;  v

Browser



Um servidor pode:



\- entregar HTML;

\- entregar imagens;

\- retornar texto;

\- retornar JSON;

\- receber dados;

\- processar requisições;

\- acessar banco de dados;

\- acessar outras APIs.



\---



\# 4. Node.js



Node.js é um \*\*runtime de JavaScript\*\* baseado no motor V8.



Ele permite executar JavaScript fora do navegador.



JavaScript no navegador:



JavaScript

&#x20;  |

&#x20;  v

DOM / Página Web



JavaScript com Node.js:



JavaScript

&#x20;  |

&#x20;  v

Servidor / Sistema



\## Node.js é framework?



Não.



Node.js é um \*\*runtime/ambiente de execução\*\*.



Um framework fornece estrutura e abstrações para facilitar o desenvolvimento.



Exemplo:



\*\*Express\*\* é um framework Web para Node.js.



\---



\# 5. Modelo de funcionamento do Node.js



Node.js trabalha com um modelo orientado a eventos e operações assíncronas.



Isso é especialmente útil para aplicações que lidam com muitas operações de entrada/saída:



\- rede;

\- arquivos;

\- banco de dados;

\- APIs externas.



A ideia simplificada:



Requisição

&#x20;   |

&#x20;   v

Node.js

&#x20;   |

&#x20;   +--> operação rápida

&#x20;   |

&#x20;   +--> operação de I/O

&#x20;            |

&#x20;            v

&#x20;         aguarda

&#x20;            |

&#x20;            v

&#x20;         continua



Importante:



> Node.js não simplesmente pega "a requisição mais rápida" da fila.



O conceito principal é que operações de I/O podem ser tratadas de maneira assíncrona, permitindo que o processo continue trabalhando enquanto aguarda essas operações.



\---



\# 6. Módulo HTTP



O Node.js possui um módulo nativo chamado `http`.



```javascript

const http = require("http");

````



Podemos criar um servidor:



```javascript

const servidor = http.createServer((req, res) => {



&#x20;   // processamento



});



servidor.listen(3000);

```



\---



\# 7. `req` e `res`



No código:



```javascript

http.createServer((req, res) => {

```



temos:



\## `req`



Significa \*\*request\*\*.



Representa a requisição recebida.



Podemos acessar:



```javascript

req.method

req.url

```



Por exemplo:



```text

GET /

```



resulta em:



```javascript

req.method // "GET"

req.url    // "/"

```



\## `res`



Significa \*\*response\*\*.



Representa a resposta que será enviada ao cliente.



Exemplo:



```javascript

res.end("Olá!");

```



\---



\# 8. Métodos HTTP



Alguns métodos importantes:



```text

GET

POST

PUT

PATCH

DELETE

```



Nesta etapa estudamos principalmente:



\## GET



Usado principalmente para obter/consultar recursos.



Exemplo:



```text

GET /produtos

```



Ideia:



> "Quero obter os produtos."



\## POST



Usado para enviar dados ao servidor e realizar determinadas operações.



Exemplo:



```text

POST /usuarios

```



com dados no corpo da requisição.



\---



\# 9. GET × POST



| GET                           | POST                               |

| ----------------------------- | ---------------------------------- |

| Consulta/obtenção de recursos | Envio/processamento de dados       |

| `GET /produtos`               | `POST /usuarios`                   |

| Parâmetros podem estar na URL | Dados frequentemente ficam no body |

| Muito usado para consultas    | Muito usado para envio de dados    |



Importante:



> Não devemos pensar simplesmente que "GET pega" e "POST salva". São métodos HTTP com semânticas diferentes.



\---



\# 10. Rotas



Uma rota associa um método HTTP + caminho a determinado comportamento.



Exemplos:



```text

GET /

GET /conteudo

GET /sobre

POST /dados

```



No Node.js básico podemos verificar:



```javascript

if (req.method === "GET" \&\& req.url === "/conteudo") {



&#x20;   // resposta



}

```



\---



\# 11. Exemplo de rotas



```javascript

if (req.method === "GET" \&\& req.url === "/") {



&#x20;   // página inicial



}

```



```javascript

if (req.method === "GET" \&\& req.url === "/conteudo") {



&#x20;   // conteúdo



}

```



```javascript

if (req.method === "GET" \&\& req.url === "/sobre") {



&#x20;   // página sobre



}

```



Se nenhuma rota for encontrada:



```text

404 - Página não encontrada

```



\---



\# 12. Código de status HTTP



Alguns códigos importantes:



```text

200 → OK

404 → Not Found

500 → Internal Server Error

```



Exemplo:



```javascript

res.writeHead(200, {

&#x20;   "Content-Type": "text/html; charset=utf-8"

});

```



`200` significa que a requisição foi processada com sucesso.



Para recurso inexistente:



```javascript

res.writeHead(404, {

&#x20;   "Content-Type": "text/plain; charset=utf-8"

});

```



\---



\# 13. Content-Type



O servidor informa qual é o tipo de conteúdo enviado.



HTML:



```javascript

res.writeHead(200, {

&#x20;   "Content-Type": "text/html; charset=utf-8"

});

```



Texto:



```javascript

res.writeHead(200, {

&#x20;   "Content-Type": "text/plain; charset=utf-8"

});

```



JSON:



```javascript

res.writeHead(200, {

&#x20;   "Content-Type": "application/json; charset=utf-8"

});

```



O navegador utiliza essa informação para interpretar corretamente a resposta.



\---



\# 14. `res.end()`



`res.end()` finaliza a resposta HTTP.



Exemplo:



```javascript

res.end("Olá!");

```



Também podemos enviar HTML:



```javascript

res.end(`

&#x20;   <h1>Olá!</h1>

&#x20;   <p>Conteúdo enviado pelo servidor.</p>

`);

```



\---



\# 15. Servindo um arquivo HTML



Podemos utilizar:



```javascript

const fs = require("fs");

const path = require("path");

```



Construímos o caminho:



```javascript

const caminho = path.join(\_\_dirname, "index.html");

```



Lemos o arquivo:



```javascript

fs.readFile(caminho, "utf8", (erro, conteudo) => {



&#x20;   // ...



});

```



E podemos enviá-lo:



```javascript

res.end(conteudo);

```



\---



\# 16. Log das requisições



Podemos registrar método e URL:



```javascript

console.log(`${req.method} ${req.url}`);

```



Exemplos:



```text

GET /

GET /conteudo

GET /sobre

GET /favicon.ico

```



Isso permite observar o que está acontecendo no servidor.



\---



\# 17. Requisições automáticas do navegador



Ao carregar uma página, o navegador pode fazer outras requisições.



Exemplo:



```text

GET /

GET /favicon.ico

GET /sw.js

```



`favicon.ico` normalmente corresponde ao ícone do site.



`sw.js` pode estar relacionado a um \*\*Service Worker\*\*, utilizado em recursos como:



\* cache;

\* funcionamento offline;

\* PWA;

\* interceptação de requisições;

\* notificações.



Essas requisições extras não significam necessariamente que existe um problema no servidor.



\---



\# 18. AJAX



AJAX significa:



\*\*Asynchronous JavaScript and XML\*\*



É uma técnica que permite fazer requisições HTTP através do JavaScript sem precisar recarregar toda a página.



Fluxo:



Browser

|

| JavaScript

v

Requisição HTTP

|

v

Servidor

|

| resposta

v

JavaScript

|

v

Atualização da página



Apesar do nome conter "XML", AJAX atualmente pode trabalhar com:



\* texto;

\* HTML;

\* JSON;

\* XML;

\* outros formatos.



\---



\# 19. XMLHttpRequest



`XMLHttpRequest` é uma API do navegador para fazer requisições HTTP.



Exemplo:



```javascript

const xhttp = new XMLHttpRequest();

```



Configuramos:



```javascript

xhttp.open("GET", "/conteudo", true);

```



Temos:



```text

GET       → método

/conteudo → caminho

true      → assíncrono

```



Depois enviamos:



```javascript

xhttp.send();

```



\---



\# 20. `readyState` e `status`



Podemos verificar:



```javascript

xhttp.onreadystatechange = function() {



&#x20;   if (this.readyState === 4 \&\& this.status === 200) {



&#x20;       // resposta recebida



&#x20;   }



};

```



\## `readyState`



Indica o estado da requisição.



O valor:



```text

4

```



indica que a requisição terminou.



\## `status`



Representa o código HTTP.



```text

200

```



indica sucesso.



\---



\# 21. `responseText`



Depois que a resposta chega:



```javascript

this.responseText

```



contém o texto recebido.



Exemplo:



Servidor:



```text

Conteúdo carregado!

```



JavaScript:



```javascript

this.responseText

```



recebe:



```text

Conteúdo carregado!

```



\---



\# 22. DOM



DOM significa:



\*\*Document Object Model\*\*



É a representação estruturada do documento HTML que o JavaScript pode manipular.



HTML:



```html

<div id="demo">

&#x20;   Texto inicial

</div>

```



JavaScript:



```javascript

document.getElementById("demo")

```



encontra o elemento.



Podemos modificar:



```javascript

document.getElementById("demo").innerHTML =

&#x20;   "Novo conteúdo";

```



\---



\# 23. AJAX + DOM



No nosso exemplo:



```javascript

document.getElementById("demo").innerHTML =

&#x20;   this.responseText;

```



O fluxo é:



Servidor

|

| resposta

v

responseText

|

v

JavaScript

|

v

DOM

|

v



<div id="demo">



Assim podemos alterar apenas uma parte da página sem recarregá-la.



\---



\# 24. Rota `/conteudo`



Criamos a rota:



```text

GET /conteudo

```



O servidor pode responder:



```javascript

res.writeHead(200, {

&#x20;   "Content-Type": "text/html; charset=utf-8"

});



res.end(`

&#x20;   <h2>Conteúdo carregado!</h2>

&#x20;   <p>Este HTML veio do servidor Node.js.</p>

`);

```



O JavaScript:



```javascript

xhttp.open("GET", "/conteudo", true);

xhttp.send();

```



Depois:



```javascript

document.getElementById("demo").innerHTML =

&#x20;   this.responseText;

```



Fluxo completo:



Botão

|

v

carrega()

|

v

XMLHttpRequest

|

| GET /conteudo

v

Node.js

|

| HTML

v

responseText

|

v

innerHTML

|

v

DOM



\---



\# 25. Rota HTTP ≠ AJAX



Isso é importante.



A rota:



```text

GET /conteudo

```



existe independentemente do AJAX.



Podemos acessar diretamente:



```text

http://localhost:3000/conteudo

```



ou através de JavaScript:



```javascript

xhttp.open("GET", "/conteudo", true);

```



Nos dois casos o servidor recebe:



```text

GET /conteudo

```



Portanto:



```text

Rota HTTP ≠ AJAX

```



AJAX é uma forma de fazer a requisição através do JavaScript sem precisar recarregar toda a página.



\---



\# 26. JavaScript e DOM



JavaScript pode manipular a página localmente:



```javascript

document.getElementById("demo").innerHTML =

&#x20;   "Texto alterado!";

```



Nesse caso:



```text

JavaScript

&#x20;   |

&#x20;   v

DOM

```



Também pode conversar com o servidor:



```javascript

xhttp.open("GET", "/conteudo", true);

xhttp.send();

```



Nesse caso:



```text

JavaScript

&#x20;   |

&#x20;   v

HTTP

&#x20;   |

&#x20;   v

Servidor

```



\---



\# 27. POST



POST permite enviar dados para o servidor.



Exemplo:



```text

POST /dados

```



Body:



```json

{

&#x20;   "nome": "Ludivino",

&#x20;   "email": "exemplo@email.com"

}

```



No Node.js HTTP básico podemos receber os dados:



```javascript

req.on("data", (parte) => {



&#x20;   // dados recebidos



});

```



E detectar o final:



```javascript

req.on("end", () => {



&#x20;   // terminou de receber



});

```



Os dados podem chegar em partes, por isso usamos `data` para acumulá-los e `end` para saber que o recebimento terminou.



\---



\# 28. JSON



JSON significa:



\*\*JavaScript Object Notation\*\*



É um formato muito utilizado para troca de dados.



Objeto JavaScript:



```javascript

const dados = {

&#x20;   nome: "Ludivino",

&#x20;   email: "exemplo@email.com"

};

```



Converter para JSON:



```javascript

const json = JSON.stringify(dados);

```



Resultado:



```json

{

&#x20;   "nome": "Ludivino",

&#x20;   "email": "exemplo@email.com"

}

```



Converter JSON para objeto:



```javascript

const dados = JSON.parse(json);

```



Resumo:



```text

Objeto JavaScript

&#x20;      |

&#x20;      | JSON.stringify()

&#x20;      v

&#x20;     JSON

&#x20;      |

&#x20;      | JSON.parse()

&#x20;      v

Objeto JavaScript

```



\---



\# 29. API



API significa:



\*\*Application Programming Interface\*\*



É uma interface que define como softwares podem se comunicar.



Em aplicações Web, uma API frequentemente utiliza HTTP.



Exemplo:



```text

GET /usuarios

GET /usuarios/10

POST /usuarios

DELETE /usuarios/10

```



Uma API pode retornar JSON:



```json

\[

&#x20;   {

&#x20;       "id": 1,

&#x20;       "nome": "Ludivino"

&#x20;   },

&#x20;   {

&#x20;       "id": 2,

&#x20;       "nome": "João"

&#x20;   }

]

```



Fluxo:



Frontend

|

| HTTP

v

API

|

v

Backend

|

v

Banco de dados



\---



\# 30. Node.js × Express



No Node.js puro podemos criar:



```javascript

const http = require("http");

```



e tratar manualmente:



\* método;

\* URL;

\* rotas;

\* headers;

\* body;

\* respostas.



Por exemplo:



```javascript

if (req.method === "GET" \&\&

&#x20;   req.url === "/conteudo") {



&#x20;   // ...



}

```



Com Express, a estrutura fica mais simples:



```javascript

app.get("/conteudo", (req, res) => {



&#x20;   // ...



});

```



Express é um framework Web para Node.js.



A relação é:



```text

Node.js

&#x20;  |

&#x20;  +---- Express

&#x20;  |

&#x20;  +---- outros pacotes

```



\---



\# 31. Conceitos fundamentais da Aula 1



Você deve saber explicar:



\### HTTP



Protocolo utilizado para comunicação entre clientes e servidores Web.



\### Servidor Web



Programa que recebe requisições e envia respostas.



\### Node.js



Runtime que permite executar JavaScript fora do navegador.



\### Framework



Estrutura/conjunto de abstrações que facilita o desenvolvimento de aplicações.



\### GET



Método HTTP utilizado principalmente para obter/consultar recursos.



\### POST



Método HTTP utilizado para enviar dados e realizar determinadas operações.



\### Rota



Combinação de método HTTP + caminho que determina como uma requisição será tratada.



\### AJAX



Técnica de realizar requisições HTTP através do JavaScript sem recarregar toda a página.



\### XMLHttpRequest



API do navegador utilizada para realizar requisições HTTP.



\### DOM



Representação estruturada do documento HTML que pode ser manipulada por JavaScript.



\### JSON



Formato textual utilizado frequentemente para troca de dados.



\### API



Interface que permite a comunicação estruturada entre softwares.



\---



\# 32. Fluxos fundamentais



\## Carregar uma página



```text

Browser

&#x20;  |

&#x20;  | GET /

&#x20;  v

Node.js

&#x20;  |

&#x20;  | index.html

&#x20;  v

Browser

```



\## AJAX



```text

Browser

&#x20;  |

&#x20;  | JavaScript

&#x20;  v

XMLHttpRequest

&#x20;  |

&#x20;  | GET /conteudo

&#x20;  v

Node.js

&#x20;  |

&#x20;  | resposta

&#x20;  v

responseText

&#x20;  |

&#x20;  v

DOM

```



\## POST



```text

Browser

&#x20;  |

&#x20;  | POST /dados

&#x20;  | body

&#x20;  v

Node.js

&#x20;  |

&#x20;  | processa

&#x20;  v

Resposta

```



\---



\# 33. Ideia central da Aula 1



A ideia que conecta todos esses conceitos é:



> \*\*Uma aplicação Web é formada por clientes e servidores que se comunicam através de requisições e respostas, normalmente utilizando HTTP.\*\*



O navegador pode:



\* solicitar páginas;

\* solicitar dados;

\* enviar dados;

\* executar JavaScript;

\* manipular o DOM.



O servidor pode:



\* receber requisições;

\* identificar método e rota;

\* processar dados;

\* acessar arquivos;

\* acessar bancos de dados;

\* acessar APIs;

\* enviar respostas.



O Node.js permite implementar esse servidor utilizando JavaScript.



```



Esse é o resumo que eu recomendo manter no repositório como \*\*material de revisão\*\*, separado dos códigos dos exercícios.

```



