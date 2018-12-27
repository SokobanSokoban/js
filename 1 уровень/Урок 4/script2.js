////////////////////////////////задание 2///////////////////////////
document.write('<br> Задание 2 <br>');
//Продолжить работу с интернет-магазином:
//В прошлом домашнем задании вы реализовали корзину на базе массивов. 
//Какими объектами можно заменить их элементы?
//Реализуйте такие объекты.
//Перенести функционал подсчета корзины на объектно-ориентированную базу.




function Cart() {
    this.arrRowCart = [];

    this.summ = 0;
    this.addItem = function (RowCart) {
        console.log('добавлено ' + RowCart.name);

        this.arrRowCart.push(RowCart);
        this.summ = getCartPrice(this.arrRowCart); //пересчет суммы
    }
    
    this.clearCart = function () {
        console.log('корзина очищена ');
        this.arrRowCart = [];
        this.summ = getCartPrice(this.arrRowCart); //пересчет суммы
    }
    
    this.getRowCart = function (id, name, count, price) {
        var item = {};
        item.id = id;
        item.name = name;
        item.count = count;
        item.price = price;

        return item;
    }

    this.printCart = function () {
        for (var j in this.arrRowCart) {
            rowCart = this.arrRowCart[j];

            document.write('<br>');
            for (var i in rowCart) {
                // Вывести значение каждого свойства объекта
                document.write(i + ':' + rowCart[i] + '; ');
            }
        }
    }

    function getCartPrice(arrRowCart) {
        var summ = 0;
        for (var j in arrRowCart) {
            rowCart = arrRowCart[j];

            summ = summ + (rowCart['price'] * rowCart['count']);
        }
        return summ;
    }
}




var cart = new Cart();
console.log(cart);

cart.addItem(cart.getRowCart(3, 'носки', 3, 50));
cart.addItem(cart.getRowCart(2, 'сумка', 1, 150));
console.log('сумма в корзине ' +cart.summ);
cart.printCart();
cart.clearCart();

console.log(cart);
cart.printCart();

