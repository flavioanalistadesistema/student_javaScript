function soma(a, b) {
    console.log(a + b)
}

soma(10,11)
soma(1)
soma()
soma(1 , 2, 3, 4, 5, 6)

function multiplicar(a, b = 1 ) {
    return a * b
}

let mult = multiplicar(10,3)
let mult1 = multiplicar(10)
let mult2 = multiplicar()

console.log(mult)
console.log(mult1)
console.log(mult2)
