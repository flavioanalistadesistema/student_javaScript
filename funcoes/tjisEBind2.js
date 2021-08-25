function Pessoa() {
  this.idade = 0

  setInterval(
    function() {
      this.idade++
      console.log(this.idade);
    }.bind(this), 1000 // method bind pode referencia a mesma funcao com parametro this
  )
}

Pessoa()

function Client() {
  this.age = 0

  const self = this // contante referencia a funcao atual permitindo acesso ao objeto
  setInterval(
    function() {
      self.age++
      console.log(self.age);
    }, 1000
  )
}

Client()