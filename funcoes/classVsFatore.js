class Pessoa {
    constructor(name) {
        this.name = name
    }

    falar() {
        console.log(`Meu nome é ${this.name}`);
    }
} // ex: class

const p1 = new Pessoa('Flavio')
p1.falar()

const pessoa2 = nome => {
    return {
        falar: `Meu nome é ${nome}`
    }
} // ex: factore

const p2 = pessoa2('Thiago')
console.log(p2.falar);
