const valor = 'Global'

function valor1() {
    console.log(valor);
}

function valor2() {
    const valor = 'Local'
    valor1()
}

valor2() // return 'Global' - procura dentro do escolpo Lexico onde ela foi definida