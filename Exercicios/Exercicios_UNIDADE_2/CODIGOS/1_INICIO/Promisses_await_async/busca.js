let pesquisaGoogle;

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


function buscarGoogle(parametro) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            return (xhttp.responseText);
        }
    };
    xhttp.onerror = function() {
        return ("Deu erro");
    };
    xhttp.open("GET", "https://www.google.com/search?q=" + parametro, true);
    xhttp.send();
}

console.log("Buscando Google");
console.log("Faz uma pesquisa no site do google");

pesquisaGoogle = buscarGoogle("ufsc");
console.log("Dado encontrado: ", pesquisaGoogle);