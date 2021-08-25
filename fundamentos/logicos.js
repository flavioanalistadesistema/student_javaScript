function compras(compra1, compra2) {
    const sorvete = compra1 || compra2
    const tv50 = compra1 && compra2
    const tv32 = !!(compra1 ^ compra2)
    const saude = !sorvete 

    return {sorvete, tv50, tv32, saude}
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
