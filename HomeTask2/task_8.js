/* С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow),
где val — заданное число, pow –— степень. */

function power(val, pow) {
    console.log(val)
    if (pow === 0)
        return 1;
    return val * power(val, --pow);
}

let a = 2, b = 4;
console.log(power(a, b));