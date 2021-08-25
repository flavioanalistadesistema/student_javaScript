function getAleartorio(min, max) {
    let valor = Math.random() * (max -min) + min
    return Math.floor(valor)
}

condition = 1
do {
    condition = getAleartorio(1,5)
    console.log(`Number ${condition}`);
} while (condition != 1)