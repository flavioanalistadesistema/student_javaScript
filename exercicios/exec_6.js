/*
06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function simpleInterest(startingCapital, interestRate, applicationTime) {
    return startingCapital * (1 + (interestRate * applicationTime));
}

function compoundInterest(startingCapital, interestRate, applicationTime) {
    let interestTime = Math.pow((1 + interestRate), applicationTime);

    const inv = startingCapital * interestTime;
    return inv.toFixed(2);
}

console.log(compoundInterest(6000, 0.03, 6)); // juros composto
console.log(simpleInterest(1000, 0.03, 10)); // juros simples