const prompt = require('prompt-sync')();
let valor1,valor2,valor3,valor4,valor5;

valor1 = parseInt(prompt("Digite um valor 1: "))
valor2 = parseInt(prompt("Digite um valor 2: "))
valor3 = parseInt(prompt("Digite um valor 3: "))
valor4 = parseInt(prompt("Digite um valor 4: "))
valor5 = parseInt(prompt("Digite um valor 4: "))
let guarda = [valor1,valor2,valor3,valor4,valor5]

let soma = valor1 + valor2 + valor3 + valor4 + valor5;

console.log("Está é a soma dos valores:",soma);
console.log(guarda);

