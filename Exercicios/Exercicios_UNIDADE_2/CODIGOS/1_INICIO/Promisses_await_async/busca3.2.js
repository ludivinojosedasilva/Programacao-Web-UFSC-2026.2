var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


async function buscarGoogle(parametro) {
    let pp = new Promise((resolve, reject) => {

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

    return (await pp);
}


console.log("Buscando Google");
console.log("Faz uma pesquisa no site do google");


(async function(){
    console.log('Antes')
    let a = await buscarGoogle("ufsc");
        console.log('resultado = '+a);
})()
   