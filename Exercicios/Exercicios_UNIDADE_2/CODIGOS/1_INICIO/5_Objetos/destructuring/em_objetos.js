
const user = {
  id: 1,
  nome: "Maria",
  idade: 28,
  pais: "Brasil"
};

// Sem destructuring:
const nome = user.nome;
const idade = user.idade;

// Com destructuring:
//const { nome, idade } = user;

console.log(nome); // "Maria"
console.log(idade);  // 28
//Você também pode renomear variáveis:


const { pais: country } = user;
console.log(country); // "Brasil"
