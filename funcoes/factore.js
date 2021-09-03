// Factory simples

function Client(prod, price, desc) {
    let total = price - desc
    return {
        'name': prod,
        'price': price,
        'desc': desc,
        'Total': total
    }
}

console.log(Client('Relogio', 200, 15))
console.log(Client('Celular', 1200, 150))
console.log(Client('Notebook', 12000, 1500))