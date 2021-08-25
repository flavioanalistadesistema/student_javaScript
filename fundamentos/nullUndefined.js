let valor; // undefined
console.log(valor);

valor = null; // ausencia de valor
console.log(valor);
// console.log(valor.toString()) // error

const prod = {}; 
console.log(prod); // vazio
console.log(prod.name); // undefined

prod.price = 30.0
console.log(prod.price);

prod.price = undefined
console.log(!!prod.price);
console.log(prod);

prod.price = null
console.log(!!prod.price);
console.log(prod);



