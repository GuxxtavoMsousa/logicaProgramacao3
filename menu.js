const prompt = require('prompt-sync')();

let valor1;
let valor2;
let valor3;
let resultado;
let opcao;

while(true){
    console.log("Opções:");
    console.log("1 = Média Aritmética");
    console.log("2 = Média Ponderada");
    console.log("3 = Sair");

    opcao = prompt("Escolha uma opção: ")

    if (opcao === '1'){
        valor1 = parseInt(prompt("Nota 1: "))
        valor2 = parseInt(prompt("Nota 2: "))

        resultado = valor1 + valor2  / 2;
        console.log(resultado);
    }
    else if (opcao === '2'){
        valor1 = parseInt(prompt("Nota 1: "))
        valor2 = parseInt(prompt("Nota 2: "))
        valor3 = parseInt(prompt("Nota 3: "))
        

        resultado = (1*valor1) + (2*valor2) + (3*valor3)/6;
        console.log(resultado);
    }
    else if(opcao === '3'){
        console.log("Encerrando o programa!!");
        break;
    }
    else{
        console.log("Opção Invalida");
    }
}