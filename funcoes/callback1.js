const fabricantes = ["BMW", "HB20", "TOYOTA", "HONDA"]

function imprimir(name, indice) {
    console.log(`${indice + 1}. ${name}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))