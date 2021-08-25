const escola = "Cod3r4";

console.log(escola.charAt(4)); // retorna o valor do indice
console.log(escola.charCodeAt(4)); // retorna o unicode-table
console.log(escola.indexOf('r')); // retorna o código do indice
console.log(escola.substring(1)); // retorna valores apartir de determinado indice 
console.log(escola.substring(0, 6)); // retorna valores apartir indice inicial e fina
console.log("esola ".concat(escola).concat("!")); // concatenando os dados com as informações
console.log("esola " + escola + "!"); // concatenando os dados com as informações
console.log(escola.replace(/\d/g, 'e')); // substituir todos os digitos pela letra "e" por expressão regular
console.log(escola.replace(3, 'e')); // substituir 3 pela letra "e"
console.log('Ana,Maria,Pedro'.split(',')); // quebrar uma string para uma array
console.log('10' / 2 );
console.log('5' + 2); // string ganha
console.log('5' - 2);
console.log("show" * 2);
console.log(0.1 + 0.7);


