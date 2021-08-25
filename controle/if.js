function boaNoticia(nota) {
    if (nota >= 7) {
        console.log("Você foi aprovado, sua nota é " + nota)
    }
}

boaNoticia(10)
boaNoticia(6.1)

function seraQueExiste(val) {
    if (val) {
        console.log("Essa variavel existe e seu valor é " + val)
    }
}

seraQueExiste()
seraQueExiste('')
seraQueExiste(null)
seraQueExiste(undefined)
seraQueExiste(NaN)
seraQueExiste(0)
seraQueExiste(-1)
seraQueExiste(' ')
seraQueExiste([])
seraQueExiste({})
seraQueExiste('?')
seraQueExiste([1,2,3])