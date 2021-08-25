Number.prototype.num = function (start, end) {
    return this >= start && this <= end
}

function avaliacao(nota) {
    if (nota.num(9,10)) {
        console.log("Quadro de honra")
    }else if (nota.num(7,8.99)) {
        console.log("Aprovado")
    }else if (nota.num(5,6.99)) {
        console.log("Recuperação")
    } else if (nota.num(1,4.99)) {
        console.log("reprovado")
    }else {
        console.log("Nota inválida")
    }
}

avaliacao(10)
avaliacao(5)
avaliacao(2)
avaliacao(-1)

