# Explicação do código — Requisição AJAX com JSON

Esse código HTML faz uma **requisição para um arquivo JSON**, recebe os dados e coloca algumas informações dentro de um elemento `<p>` da página.

## Fluxo

```text
Página HTML
    ↓
JavaScript cria uma requisição
    ↓
GET → json_demo.json
    ↓
Servidor/arquivo retorna JSON
    ↓
JSON.parse()
    ↓
Objeto JavaScript
    ↓
Pega name e age
    ↓
Mostra no <p id="demo">
```

## 1. Declaração do HTML

```html
<!DOCTYPE html>
```

Informa ao navegador que o documento utiliza **HTML5**.

## 2. Estrutura básica

```html
<html>
  <head>
    ...
  </head>

  <body>
    ...
  </body>
</html>
```

O `<head>` contém configurações e estilos, enquanto o `<body>` contém o conteúdo exibido na página.

## 3. CSS

```html
<style>
  #demo {
    border: 1px solid red;
    width: 90%;
  }
</style>
```

O seletor `#demo` seleciona o elemento que possui `id="demo"`.

```css
border: 1px solid red;
```

Cria uma borda vermelha de 1 pixel.

```css
width: 90%;
```

Define que o elemento ocupará 90% da largura disponível.

## 4. Elemento que receberá o resultado

```html
<p id="demo"></p>
```

Esse parágrafo começa vazio.

O JavaScript posteriormente colocará os dados recebidos dentro dele.

## 5. Criando o XMLHttpRequest

```javascript
const xmlhttp = new XMLHttpRequest();
```

`XMLHttpRequest` é um objeto JavaScript utilizado para realizar requisições HTTP.

Ele permite que a página solicite dados a um servidor sem precisar necessariamente recarregar a página inteira.

## 6. Evento `onload`

```javascript
xmlhttp.onload = function() {
```

Essa função será executada quando a requisição terminar e a resposta estiver disponível.

Podemos imaginar:

```text
JavaScript
    ↓
Requisição
    ↓
Servidor
    ↓
Resposta
    ↓
onload()
```

## 7. Obtendo a resposta

```javascript
this.responseText
```

`responseText` contém o conteúdo retornado pela requisição como texto.

Por exemplo, o arquivo `json_demo.json` pode conter:

```json
{
  "name": "João",
  "age": 25
}
```

Inicialmente, essa resposta é recebida como texto.

## 8. Convertendo JSON para objeto JavaScript

```javascript
const myObj = JSON.parse(this.responseText);
```

`JSON.parse()` converte uma string JSON em um objeto JavaScript.

Depois da conversão, podemos trabalhar com:

```javascript
myObj.name
```

e:

```javascript
myObj.age
```

Por exemplo:

```javascript
myObj.name // João
myObj.age  // 25
```

## 9. Inserindo os dados no HTML

```javascript
document.getElementById("demo").innerHTML =
    myObj.name + '  ' + myObj.age;
```

### `document`

Representa o documento HTML atual.

### `getElementById("demo")`

Procura o elemento:

```html
<p id="demo"></p>
```

### `innerHTML`

Altera o conteúdo desse elemento.

Assim:

```javascript
document.getElementById("demo").innerHTML = "João 25";
```

faz com que o conteúdo da página passe a ser:

```html
<p id="demo">João 25</p>
```

## 10. Concatenando os valores

O código:

```javascript
myObj.name + '  ' + myObj.age
```

combina os dois valores.

Se:

```javascript
myObj.name = "João";
myObj.age = 25;
```

o resultado será:

```text
João  25
```

## 11. Configurando a requisição

```javascript
xmlhttp.open("GET", "json_demo.json");
```

O método `open()` configura a requisição.

O primeiro parâmetro:

```text
GET
```

indica o método HTTP utilizado.

O segundo:

```text
json_demo.json
```

indica o arquivo que será solicitado.

Portanto:

> Faça uma requisição GET para `json_demo.json`.

## 12. Enviando a requisição

```javascript
xmlhttp.send();
```

Essa linha envia efetivamente a requisição.

## 13. Código completo

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #demo {
        border: 1px solid red;
        width: 90%;
      }
    </style>
  </head>

  <body>

    <h2>
      Faz uma requisição para o servidor e insere
      o resultado dentro do bloco
    </h2>

    <p id="demo"></p>

    <script>
      const xmlhttp = new XMLHttpRequest();

      xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);

        document.getElementById("demo").innerHTML =
          myObj.name + '  ' + myObj.age;
      };

      xmlhttp.open("GET", "json_demo.json");

      xmlhttp.send();
    </script>

  </body>
</html>
```

## 14. Arquivo JSON

Para o exemplo funcionar, precisamos de um arquivo:

```text
json_demo.json
```

Com o conteúdo:

```json
{
  "name": "João",
  "age": 25
}
```

A estrutura do projeto pode ser:

```text
projeto/
│
├── index.html
│
└── json_demo.json
```

## 15. Fluxo completo

```text
                    REQUISIÇÃO
index.html ─────────────────────────> json_demo.json
                                      │
                                      │
                                      ▼
                                  JSON recebido
                                      │
                                      ▼
                                  JSON.parse()
                                      │
                                      ▼
                              Objeto JavaScript
                                      │
                              ┌───────┴───────┐
                              ▼               ▼
                          myObj.name      myObj.age
                              │               │
                              └───────┬───────┘
                                      ▼
                              document.getElementById()
                                      │
                                      ▼
                                <p id="demo">
                                      │
                                      ▼
                                  João 25
```

## 16. O que é AJAX?

Esse tipo de técnica é tradicionalmente chamado de **AJAX**.

AJAX significa:

> **Asynchronous JavaScript and XML**

Apesar do nome mencionar XML, atualmente é muito comum utilizar **JSON**.

A ideia principal é:

```text
Página aberta
     ↓
JavaScript faz uma requisição
     ↓
Servidor responde
     ↓
JavaScript recebe os dados
     ↓
Página é atualizada
```

Sem necessariamente recarregar a página inteira.

## 17. Principais comandos

| Código                 | Função                                 |
| ---------------------- | -------------------------------------- |
| `new XMLHttpRequest()` | Cria uma requisição HTTP               |
| `onload`               | Executa código quando a resposta chega |
| `responseText`         | Obtém a resposta como texto            |
| `JSON.parse()`         | Converte JSON em objeto JavaScript     |
| `myObj.name`           | Obtém o nome                           |
| `myObj.age`            | Obtém a idade                          |
| `getElementById()`     | Localiza um elemento HTML              |
| `innerHTML`            | Altera o conteúdo do elemento          |
| `open("GET", ...)`     | Configura a requisição                 |
| `send()`               | Envia a requisição                     |

## Resumo

O código faz basicamente isto:

> **Busca `json_demo.json` usando uma requisição GET, transforma a resposta JSON em um objeto JavaScript e mostra o nome e a idade dentro do elemento `<p id="demo">`.**
