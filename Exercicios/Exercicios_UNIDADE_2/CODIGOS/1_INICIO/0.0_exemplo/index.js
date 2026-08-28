
// Inicialmente instalamos o pacote necessário
// npm i prompt-sync
// node index.js
//
// Ou ainda da forma ideal:
// npm init -y           <- Cria um projeto 'package.json', assume yes para todas as perguntas
// npm i prompt-sync
// node index.js




const prompt = require('prompt-sync')();

const A = parseInt(prompt('Entre com um numero '));
const B = parseInt(prompt('Entre com outro um numero '));

console.log('A soma é',A+B);


// Pesquise sobre a leitura de dados. Por que usar o parseInt ? E se nao tivesse o parseInt o que seria apresentado ?
// Const ? O que é isso ?
// Pesquise sobre 'var' e 'let' e 'global'