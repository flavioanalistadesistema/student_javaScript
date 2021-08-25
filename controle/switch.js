function avaliacao(nota) {
    
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log("Quadro de honra")
            break;
        case 8: case 7:
            console.log("Aprovado");
            break;
        case 6: case 5: case 4:
            console.log("Recuperação");
            break;
        case 3: case 2: case 1: case 0:
            console.log("Reprovado");
            break;
        default:
            console.log("Invalido");
    }
}

avaliacao(10)
avaliacao(7)
avaliacao(5)
avaliacao(2)
avaliacao(0)
avaliacao(-1)