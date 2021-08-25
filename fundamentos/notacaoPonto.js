console.log(Math.ceil(6.8));

const Obj1 = {}
Obj1.nome = "Flávio";
console.log(Obj1.nome);

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec ..');
    }
}