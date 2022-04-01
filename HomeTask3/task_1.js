/* С помощью цикла while вывести все простые числа в промежутке от 0 до 100. */

let count = 1;

while (count <= 100) {
    let divider = 0;
    for (let i = 0; i <= count; i++) {
        if (count % i === 0) {
            divider++;
            if (divider > 2)
                break;
        }
    }
    if (divider === 2)
        console.log(count);
    count++;
}
