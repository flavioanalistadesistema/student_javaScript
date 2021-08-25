var number = 1
{
    let number = 2
    console.log('Dentro',number)
}
console.log('Fora', number)

// com a palavra reservada LET tem escopo de bloco
// Por isso passa ser vista dentro do escopo menor, 
// caso ela nao encontre a variavel no escopo menor, tentara achar no escopo maior (global)

