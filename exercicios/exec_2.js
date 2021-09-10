/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function validationTypeTriangulo(a, b, c) {

    const valid = validationsTriangulo(a, b, c);

    const numbers = [a, b, c]
    if (valid) {
        seeSidesTriangle(a, b, c);

        const count = numbers =>
            numbers.reduce((x, y) => ({...x,
                [y]: (x[y] || 0) + 1
            }), {})

        let result = new Map(Object.entries(count(numbers)));

        let resultVal = [];
        result.forEach(val => {
            this.resultVal = val;
        });

        verifyResult(this.resultVal);
    }
}

function verifyResult(result) {
    let stringResult = {
        '3': 'Equilátero',
        '2': 'Isósceles',
        '1': 'Escaleno'
    }

    console.log(`Triângulo: ${stringResult[result]}`);
}

function seeSidesTriangle(a, b, c) {
    console.log(
        `Medida do lado A: ${a} \nMedida do lado B: ${b} \nMedida do lado C: ${c}`
    );
}

function validationsTriangulo(a, b, c) {

    function verify(x, y) {
        const arr = [x, y];
        const min = Math.min(...arr);
        const max = Math.max(...arr);

        return { min, max }
    }


    const return1 = (verify(b - c).max - verify(b, c).min) < a < b + c;
    const return2 = (verify(a - c).max - verify(a, c).min) < b < a + c;
    const return3 = (verify(a - b).max - verify(a, b).min) < c < a + b;

    if (return1 && return2 && return3) {
        return true;
    } else {
        console.log(`Medidas invalidas`);
    }
}

validationTypeTriangulo(1, 0, 0) //chamada da funcao