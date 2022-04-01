/* Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return. */


function addition(a, b) {
    return a + b;
}

function difference(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0)
        return 'На ноль делить нельзя';
    else
        return a / b;
}

let a = 22, b = 11;
console.log(addition(a, b))
console.log(difference(a, b))
console.log(multiplication(a, b))
console.log(division(a, b))