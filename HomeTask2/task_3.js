/* Объявить две целочисленные переменные — a и b и задать им произвольные начальные
значения. Затем написать скрипт, который работает по следующему принципу:
1. если a и b положительные, вывести их разность;
2. если а и b отрицательные, вывести их произведение;
3. если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом. */

let a = 5, b = 0;
if (a >= 0 && b >= 0)
    console.log(`Разность равна ${a - b}`);
else if (a < 0 && b < 0)
    console.log(`Произведение равно ${a * b}`);
else console.log(`Сумма равна ${a + b}`);