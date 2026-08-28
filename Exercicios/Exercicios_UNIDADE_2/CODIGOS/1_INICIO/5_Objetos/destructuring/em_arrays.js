const numbers = [10, 20, 30, 40, 50, 60];

// Sem destructuring
const first = numbers[0];
const second = numbers[1];

// Com destructuring
const [a, b] = numbers;

console.log(a); // 10
console.log(b); // 20

// ignorando posicoes

const [, , third, outro, proximo] = numbers;

console.log(third); // 30
