const prompt = require('prompt-sync')();

let valor1;
let valor2;
let resultado;
let opcao;

while(true){
    console.log("Opções:");
    console.log("1 = Adição");
    console.log("2 = Subtração");
    console.log("3 = Multiplicação");
    console.log("4 = Divisão");
    console.log("5 = Sair");

    opcao = prompt("Escolha uma opção: ")

    if (opcao === '1'){
        valor1 = parseInt(prompt("Insira um valor: "))
        valor2 = parseInt(prompt("Insira um segundo valor: "))

        resultado = valor1 + valor2;
        console.log(resultado);
    }
    else if (opcao === '2'){
        valor1 = parseInt(prompt("Insira um valor: "))
        valor2 = parseInt(prompt("Insira um segundo valor: "))

        resultado = valor1 - valor2;
        console.log(resultado);
    }
    else if(opcao === '3'){
        valor1 = parseInt(prompt("Insira um valor: "))
        valor2 = parseInt(prompt("Insira um segundo valor: "))

        resultado = valor1 * valor2;
        console.log(resultado);
    }
    else if(opcao === '4'){
        valor1 = parseInt(prompt("Insira um valor: "))
        valor2 = parseInt(prompt("Insira um segundo valor: "))

        resultado = valor1 / valor2;
        console.log(resultado);
    }
    else if(opcao === '5'){
        console.log("Encerrando o programa!!");
        break;
    }
}

