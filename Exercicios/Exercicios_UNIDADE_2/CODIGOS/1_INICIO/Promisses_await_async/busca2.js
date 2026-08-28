var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


function buscarGoogle(parametro, cb) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            return cb(null, xhttp.responseText);
        }
    };
    xhttp.onerror = function() {
        return cb("Deu erro");
    };
    xhttp.open("GET", "https://www.google.com/search?q=" + parametro, true);
    xhttp.send();
}

console.log("Buscando Google");
console.log("Faz uma pesquisa no site do google");

pesquisaGoogle = buscarGoogle("ufsc", function(erro, valor) {
    if (erro) {
        console.log('ocorreu um erro');
        return;
    }
    console.log("Dado encontrado: ", valor);
});