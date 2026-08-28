const user = {
  id: 1,
  nome: "Maria",
  idade: 28,
  pais: "Brasil",
};

function showUser_1(x) {
  console.log(`${x.nome} tem ${x.idade} anos.`);
  console.log(x.pais);
}

function showUser({ nome, idade }) {
  console.log(`${nome} tem ${idade} anos.`);
  // console.log(pais); Erro, nao exste pais
}
showUser_1(user);
showUser(user);
