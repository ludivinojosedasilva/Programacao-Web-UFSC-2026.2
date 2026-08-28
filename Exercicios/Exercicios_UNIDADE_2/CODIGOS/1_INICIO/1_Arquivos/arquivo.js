var fs = require('fs');

// Forma 1

console.log('oi mundo');


function roda (erro, arquivo)
{
    if (erro) 
    {
      console.log("Erro")
    }
    else console.log('lido '+arquivo);

}

//fs.readFile('index.html', roda);  // assync

let a;

a = fs.readFileSync('index.html');

console.log(a.toString());

console.log('FIM')

