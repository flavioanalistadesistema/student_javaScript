const client1 = {};
client1.name = 'Flávio';
client1.sobreNome = 'Santos';
client1.altura = 1.89;
client1['ativo no sistema'] = true;

console.log(client1);

const client2 = {
    name: 'Luciana',
    sobreNome: 'Santos',
    endereco: {
        rua: 'Rua São Paulo',
        numero: 48,
        bairro: {
            nome: 'vila freitas'
        }
    }
}

console.log(client2);