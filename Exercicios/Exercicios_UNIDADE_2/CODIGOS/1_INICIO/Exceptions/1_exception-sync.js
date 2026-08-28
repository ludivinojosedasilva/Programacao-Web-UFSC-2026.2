// Esse codigo detecta um problema usando o try-catch
// Ele exemplifica a chamada de uma função sincrona

function minhaFuncao() {
  return A;
}

try {
  minhaFuncao();
} catch (erro) {
  console.log("detectou problema na funcao");
  console.log(erro);
}

console.log("Meu programa continua funcionando....");
