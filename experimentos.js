a = 1

global.b = 2

this.c = 3
this.d = 4
this.e = 5

var f = 6

console.log(this.a);
console.log(this === global);
console.log(global.a);
console.log(global.b);
console.log(this);
console.log(module.exports);
console.log(module.exports === this);
console.log(module.export === global);
console.log(module.exports.c);
console.log(f);
console.log(this.f);
console.log(global.f);
