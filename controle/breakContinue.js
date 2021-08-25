const numbers = [1,2,3,4,5,6,7.8,8.9,10]

for (let i in numbers) {
    if (i == 5) break
    console.log(`Indice ${i}, valor do indice ${numbers[i]}`) 
}

for (let i in numbers) {
    if (i == 5) continue
    console.log(`Indice ${i}, valor do indice ${numbers[i]}`) 
}

atribuicao: for (let a in numbers) {
    for (let b in numbers) {
        if (a == 2 && b == 3 ) break atribuicao
        console.log(`Indice ${b}, valor do indice ${numbers[b]}`) 
    }
}