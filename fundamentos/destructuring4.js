function randow([min = 0, max = 1000 ]) {
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(randow([100, 10]))
console.log(randow([50]))
console.log(randow([, 10]))
console.log(randow([]))
console.log(randow())