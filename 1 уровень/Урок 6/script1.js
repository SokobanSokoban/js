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
    this.getRowCart = function (id, name, count, price, img) {
        var item = {};
        item.id = id;
        item.name = name;
        item.count = count;
        item.price = price;
        item.img = img;
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

function addToCart(e) {
    var id = 0;
    console.log('Button clicked' + e.target.classList);
    console.log('Button clicked' + e.target.parentNode.parentNode.parentNode.id);
    id = e.target.parentNode.parentNode.parentNode.id;

    cart.addItem(cart.getRowCart(id, 'курта', 1, 300, 'img/Layer 43.jpg'));
    var $cart = document.getElementById('cart');
    var summ = cart.summ;
    $cart.text = 'корзина на ' + '$' + summ;
}

// Выбираем все кнопки на странице и получаем массив
var btns = document.querySelectorAll('.js-add-product')
// Проходим по массиву
btns.forEach(function (btn) {
    // Вешаем событие клик
    btn.addEventListener('click', addToCart)
})


//var $products = document.querySelector('.products');
//var $products__item = document.querySelector('.products__item');
//var $products__item_clon = $products__item.cloneNode(true);
//
//$products__item_clon.id = '1221';
//$products.appendChild($products__item_clon);
addBlock('1111');
addBlock('2222');

function addBlock(id) {
    var $products = document.querySelector('.products');
    var $products__item = document.querySelector('.products__item');
    var $products__item_clon = $products__item.cloneNode(true);

    $products__item_clon.id = id;
    $products.appendChild($products__item_clon);
}
