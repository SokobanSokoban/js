////////////////////////////////задание 2///////////////////////////
document.write('<br> Задание 2 <br>');
//С этого урока начинаем работать с функционалом интернет-магазина. 
//Предположим, есть сущность корзины.
//Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
//Товары в корзине хранятся в массиве. 
//Задачи:
//Организовать такой массив для хранения товаров в корзине;
//Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

function printCart(arrRowCart) {
    for (var j in arrRowCart) {
        rowCart = arrRowCart[j];

        document.write('<br>');
        for (var i in rowCart) {
            // Вывести значение каждого свойства объекта
            document.write(i + ':' + rowCart[i] + '; ');
        }
    }
}

function countBasketPrice(arrRowCart) {
    var summ = 0;
    for (var j in arrRowCart) {
        rowCart = arrRowCart[j];

        summ = summ + (rowCart['price'] * rowCart['count']);
    }
    return summ;
}


function rowCart(id, name, count, price) {
    this.id = id;
    this.name = name;
    this.count = count;
    this.price = price;
}

var arrRowCart = [];

arrRowCart.push(new rowCart(3,'носки',1,50));

arrRowCart.push({
    'id': 1,
    'name': 'сумка',
    'count': 2,
    'price': 100
});

arrRowCart.push({
    'id': 2,
    'name': 'обувь',
    'count': 1,
    'price': 300
});



printCart(arrRowCart);
document.write('<br>');
document.write('');
document.write('сумма в корзине ' + countBasketPrice(arrRowCart));
