const prompt = require('prompt-sync')();

    let valor = prompt("Digite um Valor: ")

        for(let cont = 1; cont <= 10; cont++){

            let pergunta = prompt("Deseja continuar?")

            if(pergunta === 'sim' || pergunta === "s"){
                let conta = valor * cont
                console.log("3 X",cont, "=",conta);
            }else{
                    console.log("Programa Encerrado :D ");
                break;}

}

