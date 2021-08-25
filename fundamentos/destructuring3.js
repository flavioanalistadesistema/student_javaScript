function numberRondow({min= 10, max = 1000} = {}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {min: 5, max: 100}

console.log(numberRondow(obj));
console.log(numberRondow(955));
console.log(numberRondow());

