/**Funcao literal */
function fn1() {}

/**Armazena em uma variavel */
const fn2 = function () {}

/**Armazenar em uma array */
const array = [function(a,b){return a + b}, fn1, fn2]
console.log(array[0](3,4)) // 7

/**Armazena em um atributo de objeto */
const obj = {}
obj.name = function (name) {return `Meu nome é ${name}`}
console.log(obj.name('Flávio'))// Flávio

/**Uma função pode retornar uma outra funcao */
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
let somar = soma(2,3)
somar(10)

/**Passar funcao com parametro */
function run(fun) {
    fun()
}
run(function () {console.log('Executando a funcao....')})

