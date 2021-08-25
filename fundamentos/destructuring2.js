const [a] = [1,2,3]
console.log(a);

const [n1, n2, , n4, n5, , n7] = [1,2,3,4,5,6, 7]
console.log(n1,n2,n4,n5, n7);

const [, [, nota]] = [[, 1,2], [3,4]]
console.log(nota);

// lembrando, destructuring no ponto de vista de objeto, usa a sintaze das chaves {}
    // porque esta desustruturando de um objeto
    // quando esta desustruturando de uma array ele usa colchetes []