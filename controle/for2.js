const notas = [1,2,3,4,5,6,7.8,8.9,10]

for (let i in notas) {
    console.log(`indice: ${i} e notas: ${notas[i]} `);
}

const pessoa = {
    nome: "Flávio",
    sobrenome: "Santos",
    idade: 43,
    peso: 90
}

for (let atributos in pessoa) {
    console.log(`Atributos ${atributos}\n dados pessoa: ${pessoa[atributos]}`);
}