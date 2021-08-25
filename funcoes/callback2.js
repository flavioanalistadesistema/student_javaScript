const notas = [9, 8.3, 7, 6.5, 5.8, 4, 1.5, 0.9]

const notasBaixas1 = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
} 

console.log(notasBaixas1);

/********************* callback - exemplo 1*/

const notasBaixas2 = notas.filter(
    function (notas) {
        return notas < 7
    }
)
console.log(notasBaixas2);
 

/******************** callback - exemplo 2 */

const validationNotas = nota => nota < 7
const notasBaixas3 = notas.filter(validationNotas)
console.log(notasBaixas3);