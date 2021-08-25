function area(a, b) {
    let result = a * b
    if (result > 20) {
        return `Essa area é maior que permitido ${result}m²0`
    }
    return result
}

console.log(area(2,3))
console.log(area(2,4,5,6));
console.log(area(1))
console.log(area())
console.log(area(5,6));
