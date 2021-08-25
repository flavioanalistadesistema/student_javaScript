function soma(a, b ,c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma(), soma(2), soma(2,3,4), soma(0,0,0))

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = isNaN(b) ? 1 : b
    c = 2 in arguments ?x c : 1 
    return a + b + c
}

console.log(soma2(), soma2(2), soma2(2,3,4), soma2(0,0,0))