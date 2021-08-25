// Armazenando uma função e uma variavel
const imprimirSoma = function (a, b) {
    return a + b;
}
console.log(imprimirSoma(10,5));

// armazenando uma funcao arrow em uma vaiavel
const soma = (a, b) => {
    return a + b;
}
console.log(soma(10,20));

// retorno implícito
const subtracao = (a,b) => a-b;
console.log(subtracao(50,20));

const imprimir = a => console.log(a);
imprimir('Teste legal!!');
 

