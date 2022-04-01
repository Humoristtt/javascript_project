/* Товары в корзине хранятся в массиве. Задачи:
a. Организовать такой массив для хранения товаров в корзине;
b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */

function countBasketPrice(basket) {
    let amount = 0;
    basket.forEach(el => amount += el);
    return amount;
}

let productsInBasket = [20, 58, 67, 89, 234, 545, 22];
console.log(countBasketPrice(productsInBasket));