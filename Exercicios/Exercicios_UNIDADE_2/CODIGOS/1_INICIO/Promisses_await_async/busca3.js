var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


function buscarGoogle(parametro) {
    return new Promise((resolve, reject) => {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                resolve(xhttp.responseText);
            }
        };
        xhttp.onerror = function() {
            reject("Deu erro");
        };
        xhttp.open("GET", "https://www.google.com/search?q=" + parametro, true);
        xhttp.send();

    });
}


console.log("Buscando Google");
console.log("Faz uma pesquisa no site do google");


console.log("antes")
buscarGoogle("ufsc")
    .then(function(xx) {
        console.log("Dado encontrado: ", xx);
    })
    .catch(function(e) {
        console.log('deu erro ' + e)
    });

console.log("Depois")