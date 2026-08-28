/*
	Exporta apenas uma funcao
	forma de usar:
	var hello = require ('./hello.js');
	hello('oi mundo');
*/

let varIdade;
let varNome;

function setaNome (nome)
{
  varNome = nome;
}

function setaIdade (idade)
{
  varIdade = idade;
}

function mostra ()
{
  console.log('IDADE=' + varIdade);
  console.log('NOME=' + varNome);
}

module.exports = {setaNome,
setaIdade,mostra};
