function Carro (velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0

    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

let fiat = new Carro
fiat.acelerar()
fiat.acelerar()
console.log(fiat.getVelocidadeAtual());

const ferrari = new Carro(350, 80)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar() 
console.log(ferrari.getVelocidadeAtual());