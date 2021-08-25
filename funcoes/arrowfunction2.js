function ageCliente() {
    this.age = 0

    setInterval(() => { // function arrow referencia this para dentro do escopo atual que esta acima mesmo sendo chamado em outro contexto
        this.age++
        console.log(this.age);
    }, 1000 )
}

new ageCliente