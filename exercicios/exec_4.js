/*
04) ​ Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function share(a, b) {
    return `resultado: ${a / b} \nresto: ${a % b}`;
}

console.log(share(12, 3));