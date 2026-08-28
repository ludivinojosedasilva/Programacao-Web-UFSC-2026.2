const user = {
  name: "Alice",
  age: 25,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

console.log(user.name);
user.greet();
console.log(user);
user.mostraIdade = function () {
  console.log(this.age);
};
user.dataNascimento = "20/01/2000";
user.mostraIdade();
console.log(user);
// Array
const colors = ["red", "green", "blue"];

const lengths = colors.map((apelido2) => apelido2.length);
