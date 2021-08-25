const saudacao = 'Ola' // contexto léxico 1

function exec() {
    const saudacao = "Boa noite" // contexto léxico 2
    return saudacao
}

// objetos são alinhados de pares chave/valores
const Client = {
    name: "Flávio",
    Year: 43,
    peso: 90,
    endereco: {
        logradouro: 'Rua São Paulo',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(Client   );
