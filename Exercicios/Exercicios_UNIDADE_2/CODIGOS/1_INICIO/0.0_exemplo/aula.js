console.log("meu primero codigo em nodejs");

const prompt = require("prompt-sync")();

let nome = prompt("Qual o seu ID:");
let senha = prompt.hide("Entre com sua senha:");

if (senha == "123") {
  console.log(`Caro ${nome}, seu acesso foi garantido `);
} else console.log("acesso negado");
