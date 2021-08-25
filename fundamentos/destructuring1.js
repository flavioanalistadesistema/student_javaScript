const pessoa = {
    nome: "Flávio",
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123
    }
}

const { nome, idade} = pessoa
console.log(nome, idade);

const { endereco: {logradouro, numero} } = pessoa
console.log(logradouro, numero);

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada);

const { nome: n, idade: i} = pessoa
console.log(n, i);