const valores = [7.9, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);

valores[4] = 10;
console.log(valores[4]);
console.log(valores);

valores.push({id: 11}, false, true, null, 'teste texto');
console.log(valores);

console.log(valores.pop());
console.log(valores);

delete valores[0];
console.log(valores);

console.log(typeof valores);