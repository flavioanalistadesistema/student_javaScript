const Client = {
    name: 'Flávio',
    printName() {
        console.log(this.name)
    }
}

Client.printName()
const nameClient = Client.printName
nameClient()

const nameClient2 = Client.printName.bind(Client) // metodo bind, cria uma nova funcao com a palavra chave this definida de acordo com method definido
nameClient2() 

/******************** */

let calc = function() {
    return {
      sum: this.sum,
      mult: this.mult,
      div: this.div,
    }
  }
  
  let methods = {
    sum: function(x, y) {
      return x + y;
    },
    mult: function(x, y) {
      return x * y;
    },
    div: function(x, y) {
      return x / y;
    }
  }
  calcBound = calc.bind(methods);
  
  console.log(calcBound().sum(2,2)); // => 4
  console.log(calcBound().mult(2,3)); // => 6
  console.log(calcBound().div(6,3)); // => 2

  /****************************************** */
  let cook = function() {
    console.log(this.ingredients);
  }
  
  let dinner = {
    cookDinner: cook,
    ingredients: 'bacon'
  }
  dinner.cookDinner(); // => "bacon"
  
  let lunch = {
    cookLunch: cook,
    ingredients: 'salad'
  }
  lunch.cookLunch(); // => "salad"