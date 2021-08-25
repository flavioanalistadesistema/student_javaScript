const nome = 'Flávio';
const concatenando = 'Olá ' + nome + '!';
const template = `
    olá
        ${nome}!
`; // template string

console.log(concatenando, template);

/// expressões
console.log(`1  + 1 = ${1 + 1}`);

const up = s => s.toUpperCase();
console.log(`Ei... ${up('cuidado')}`);