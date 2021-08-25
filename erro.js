function imprimirAlert(obj) {
     try {

        console.log(obj.name.toUpperCase() + "!!!");

     } catch (error) {
        mensageError(error)
     } finally {
        console.log('final');
    }

}

function mensageError(error) {
    // throw new Error('Error ')
    // throw 10
    // throw 'Mensage'
    throw {
        name: error.name,
        msg: error.message,
        date: new Date
    } 
}


imprimirAlert({name:'Flavio'})