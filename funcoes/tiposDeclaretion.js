console.log(somar(10, 20))

console.log(sub(20, 10)) // function nao declarada

console.log(multy(5, 20)) // function nao declarada

// function declaration
function somar(x, y) {
    return x + y
}

// function expression
const sub = function(x, y) {
    return x- y
}

// named function expression
let multy = function multy(x, y) {
    return y * x
}

