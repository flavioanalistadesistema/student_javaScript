/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function operations(x, y) {
    let soma = `A soma de ${x} + ${y} = ${x + y}`
    let sub = `A subtração de ${x} - ${y} = ${x - y}`
    let mult =`A multiplicação de ${x} * ${y} é = ${x * y}`
    let div = `A divisão de ${x} + ${y} é = ${x / y}`

    console.log(soma, sub, mult, div)
}

operations(10,5)