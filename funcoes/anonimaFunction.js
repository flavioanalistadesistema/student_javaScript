const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(10, 5)
imprimirResultado(10, 5, soma)
imprimirResultado(10, 5, function (a, b) {
    return a - b
} )
imprimirResultado(10, 5, (a, b) => a * b )

const pessoa = {
    falar: op => op
}
pessoa.falar(console.log('Ola'))