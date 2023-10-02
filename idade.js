const prompt = require('prompt-sync')();

let cal = 0;
let pessoas = 0;

while(true){
    let idade = prompt("Digite sua idade: ")

    if(idade <= 0){
        break;
    }

    let altura = Number(prompt("Digite sua altura: "));

    if (idade > 50) {
        cal += altura
        pessoas++;
    }

}

let media = 0;

if(pessoas > 0 ){
    media = cal / pessoas;
}

console.log("A Média da altura das pessoas com mais de 50 anos é:",media);