let isAtivo = true;
console.log(isAtivo);

isAtivo = false;
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo);

console.log('os verdadeiros.....');
console.log(!!3);
console.log(!!-1);
console.log(!!(isAtivo = 1));
console.log(!!' ');
console.log(!![]);
console.log(!!Infinity);
console.log(!!{});
console.log(!!(isAtivo = true));

console.log('os falsos........');
console.log(!!0);
console.log(!!'');
console.log(!!(isAtivo = 0));
console.log(!!NaN);
console.log(!!undefined);
console.log(!!null);
console.log(!!(isAtivo = false));

console.log('para finalizar.......');
console.log(!!(null || '' || 0 || ' '));
console.log((null || '' || 0 || '' || 123));

let name = 'Flávio';
console.log(name || 'Não não identificado');