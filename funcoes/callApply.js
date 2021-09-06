function getPrice(imposto = 0, moeda= 'R$') {
    return `${moeda} ${this.price * (1 - this.desc) * (1 + imposto)}`
}

const product = {
    price: 100,
    desc: 0.25,
    imposto: 0.1,
    getPrice
}

console.log(getPrice());
console.log(product.getPrice(product.imposto));

const carro = {price: 10000, desc: 0.10}

console.log(getPrice.call(carro));
console.log(getPrice.apply(carro));
console.log(getPrice.call(carro, 0.2, '$'));
console.log(getPrice.apply(carro, [0.1, '$$']));