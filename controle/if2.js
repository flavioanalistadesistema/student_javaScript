function teste(number) {
    if(number >= 7)
        console.log("Aprovado, sua nota é " + number) // quando não declaramos o escopo para nossas estruturas de controle, 
                                      // a primeira declaração estara ligada a estrutura
        console.log("Final!!");
}
// teste(10)
// teste(5)

function teste2(number) {
    if(number >= 7); // o ponto e virgula (;), não deve ser usado nas estruturas de controle, ela indicara o fim do codigo 
    {
        console.log("Aprovado, sua nota é " + number)
    }
}

teste2(5)
teste2(8)