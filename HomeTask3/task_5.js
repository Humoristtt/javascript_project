/* Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
x
xx
xxx */
let count = 0;
while (count < 20) {
    let str = '';
    for (let i = -1; i < count; i++)
        str += '*';
    console.log(str);
    count++;
}
