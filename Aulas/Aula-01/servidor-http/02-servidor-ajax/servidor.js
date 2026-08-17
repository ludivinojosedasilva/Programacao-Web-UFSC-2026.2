// ============================================================
// SERVIDOR HTTP - AULA 1
// Exemplo com:
// - Node.js
// - HTTP
// - GET
// - Rotas
// - HTML
// - XMLHttpRequest / AJAX
// ============================================================


// ------------------------------------------------------------
// 1. IMPORTANDO MÓDULOS
// ------------------------------------------------------------

// O módulo "http" já faz parte do Node.js.
// Não precisamos instalar com npm.
// Ele permite criar servidores HTTP.
const http = require("http");

// O módulo "fs" (File System) permite trabalhar com arquivos.
// Vamos utilizá-lo para ler o index.html.
const fs = require("fs");

// O módulo "path" ajuda a trabalhar com caminhos de arquivos.
// Ele evita problemas com caminhos diferentes entre sistemas.
const path = require("path");


// ------------------------------------------------------------
// 2. CRIANDO O SERVIDOR
// ------------------------------------------------------------

// http.createServer() cria um servidor HTTP.
//
// A função recebe dois parâmetros:
//
// req = request (requisição)
// res = response (resposta)
//
// Quando o navegador fizer uma requisição,
// essa função será executada.
const servidor = http.createServer((req, res) => {


    // --------------------------------------------------------
    // 3. MOSTRAR A REQUISIÇÃO NO TERMINAL
    // --------------------------------------------------------

    // req.method informa o método HTTP utilizado.
    //
    // Exemplos:
    // GET
    // POST
    // PUT
    // DELETE
    //
    // req.url informa qual caminho foi solicitado.
    //
    // Exemplos:
    // /
    // /conteudo
    // /produtos
    //
    // Portanto, podemos ter:
    //
    // GET /
    // GET /conteudo

    console.log(`${req.method} ${req.url}`);


    // --------------------------------------------------------
    // 4. ROTA PRINCIPAL: GET /
    // --------------------------------------------------------

    // Quando o navegador acessar:
    //
    // http://localhost:3000/
    //
    // teremos:
    //
    // req.method = "GET"
    // req.url = "/"

    if (req.method === "GET" && req.url === "/") {


        // ----------------------------------------------------
        // 5. LOCALIZANDO O INDEX.HTML
        // ----------------------------------------------------

        // __dirname representa a pasta onde este
        // arquivo servidor.js está localizado.
        //
        // path.join() junta os caminhos corretamente.
        //
        // Resultado:
        //
        // .../02-servidor-ajax/index.html

        const caminho = path.join(__dirname, "index.html");


        // ----------------------------------------------------
        // 6. LENDO O INDEX.HTML
        // ----------------------------------------------------

        // fs.readFile() lê o conteúdo do arquivo.
        //
        // "utf8" indica que queremos receber o conteúdo
        // como texto.
        //
        // erro -> contém um possível erro
        // conteudo -> contém o conteúdo do index.html

        fs.readFile(caminho, "utf8", (erro, conteudo) => {


            // ------------------------------------------------
            // 7. VERIFICANDO SE OCORREU UM ERRO
            // ------------------------------------------------

            if (erro) {

                // Código HTTP 500 significa:
                //
                // Internal Server Error
                //
                // Ou seja, ocorreu um erro no servidor.

                res.writeHead(500, {
                    "Content-Type": "text/plain; charset=utf-8"
                });

                res.end("Erro ao carregar index.html");

                return;
            }


            // ------------------------------------------------
            // 8. ENVIANDO A RESPOSTA
            // ------------------------------------------------

            // 200 = OK
            //
            // Content-Type informa ao navegador
            // qual tipo de conteúdo estamos enviando.
            //
            // text/html = HTML

            res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            });


            // Envia o conteúdo do index.html para o navegador.

            res.end(conteudo);

        });

        return;
    }


    // --------------------------------------------------------
    // 9. ROTA GET /conteudo
    // --------------------------------------------------------

    // Essa é a rota que será chamada pelo JavaScript
    // através do XMLHttpRequest.
    //
    // Quando o botão for clicado:
    //
    // JavaScript
    //      ↓
    // GET /conteudo
    //      ↓
    // Node.js
    //
    // O servidor entrará neste bloco.

    if (req.method === "GET" && req.url === "/conteudo") {


        // Enviamos:
        //
        // 200 = requisição realizada com sucesso
        //
        // text/plain = estamos enviando texto simples.

        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });


        // Envia o conteúdo de resposta.

        res.end("Conteúdo carregado através de XMLHttpRequest!");

        return;
    }


    // --------------------------------------------------------
    // 10. ROTA NÃO ENCONTRADA
    // --------------------------------------------------------

    // Se o navegador solicitar alguma rota que não existe,
    // chegaremos aqui.
    //
    // Por exemplo:
    //
    // GET /abc
    //
    // Como não criamos a rota /abc,
    // retornaremos 404.

    res.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8"
    });


    // 404 = Not Found
    //
    // Recurso/página não encontrada.

    res.end("404 - Página não encontrada");

});


// ------------------------------------------------------------
// 11. INICIANDO O SERVIDOR
// ------------------------------------------------------------

// listen() diz ao Node.js para começar a escutar
// requisições em determinada porta.
//
// Aqui escolhemos a porta 3000.
//
// Portanto:
//
// http://localhost:3000

servidor.listen(3000, () => {

    console.log("Servidor rodando em http://localhost:3000");

});