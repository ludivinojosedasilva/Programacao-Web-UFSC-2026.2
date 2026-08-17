const http = require("http"); // Estamos importando o módulo http que já vem com o Node.js
 
const servidor = http.createServer((req, res) => { // Estamos criando um servidor HTTP, recebe duas coisas importantes: 
    res.writeHead(200, {  // req -> requisição do cliente  e res -> resposta que enviaremos ao cliente
        //200 -> A requisição foi processada com sucesso.
        "Content-Type": "text/html; charset=utf-8" // -> Informa ao navegador O conteúdo que estou enviando é HTML.
    });
    
    res.end("<h1>Programação Web - UFSC</h1>");; // Aqui mostra o que estamos enviando na resposta
});

servidor.listen(3000, () => { // Comece a executar conexões na porta 3000.
    console.log("Servidor rodando em http://localhost:3000");// Então o nosso servidor ficará rodando na porta 3000
});