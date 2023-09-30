const prompt = require('prompt-sync')();

let nome1 = prompt("Digite um nome: ")
let nome2 = prompt("Digite um nome: ")
let nome3 = prompt("Digite um nome: ")
let nome4 = prompt("Digite um nome: ")
let nome5 = prompt("Digite um nome: ")

let nomes = []
nomes = [nome1,nome2,nome3,nome4,nome5]

console.log(nomes);

let nomesI = nomes.reverse();
console.log(nomesI);