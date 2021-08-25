// hoisting basicamente joga a declaração de variavéis com efeito de Var para cima 

console.log(a);

var a = 10;

console.log(a);


// hoisting não funciona para declaraçõpes de variaveis com efeito de Let

console.log(b);

let b = 20;

console.log(b);
