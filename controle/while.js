function getInteiroAleartorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let condition = 0
while (condition != 5) {
    condition = getInteiroAleartorio(1, 5)
    console.log(`Numero aleartório: ${condition}`);
}

console.log('Até a próxima..');