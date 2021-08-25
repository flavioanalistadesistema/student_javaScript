
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 3 * a
}

dobro = a => 4 * a

console.log(dobro(5));

let falar = function () {
    return 'Ola mundo'
}

falar = () => {
    return 'Oi oi'
}

falar = _ => 'To aqui'

console.log(falar());
