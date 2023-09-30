let anterior = 0
let atual =  1

for(let cont = 0; cont <= 15; cont++){
    let fibo = anterior + atual
    anterior = atual;
    atual = fibo
    console.log(fibo);
}