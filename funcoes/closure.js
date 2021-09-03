// Closure é o escopo criado quando uma funcção é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

const x = 'Globall'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro()
}

console.log(fora()) // return 'Local' - contexto continua sendo léxico e a função parte do local onde ela foi definida
