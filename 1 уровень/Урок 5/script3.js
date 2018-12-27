////////////////////////////////задание 3///////////////////////////
document.write('<br> Задание 2 и 3 <br>');
//у меня все в долларах постарался воткнуть в сайт, что мы делали на курсе версти
//не думаю, что применил правильных подход

//Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
//Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
//Пустая корзина должна выводить строку «Корзина пуста»;
//Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
//* Сделать так, чтобы товары в каталоге выводились при помощи JS:
//Создать массив товаров (сущность Product);
//При загрузке страницы на базе данного массива генерировать вывод из него. 
//HTML-код должен содержать только div id=”catalog” без вложенного кода. 
//Весь вид каталога генерируется JS.
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
cart.addItem(cart.getRowCart(3, 'курта', 3, 50, 'img/Layer 43.jpg'));
cart.addItem(cart.getRowCart(2, 'курта', 2, 150, 'img/Layer%2044.jpg'));
cart.addItem(cart.getRowCart(4, 'курта', 1, 1500, 'img/Layer 45.jpg'));
console.log('сумма в корзине ' + cart.summ);

//формирование каталога

var catalog = document.getElementById('catalog');
var rowTH = document.createElement('div');
var rowProduct;
rowTH.className = 'row th-cart';
rowTH.innerHTML = '     <div class="row th-cart"> <div class="col col-sup">Product Details</div> <div class="col col-prop">unite Price</div> <div class="col col-prop">Quantity</div> <div class="col col-prop">shipping</div> <div class="col col-prop">subTotal</div> <div class="col col-prop">ACTION</div>';
catalog.appendChild(rowTH);

function createRow(img, count, price) {
    rowProduct = document.createElement('div');
    rowProduct.className = 'row';
    rowProduct.innerHTML = '<div class="col col-sup"> <img src="_img_" alt="photo"/><div class="box-text-cart-tb"><a href="SinglePage.html">Mango People T-shirt</a><p class="tb-info">Color: <span class="tb-info-val">Red</span></p><p class="tb-info">Size:  <span class="tb-info-val">Xll</span></p></div></div><div class="col col3 grey col-prop"><p>$_unPrice_</p></div><div class="col col4 grey col-prop"><input class="quant_cart" type="number" value="_count_" min="1"></div><div class="col col5 grey col-prop"><p>FREE</p></div><div class="col col6 grey col-prop"><p>$_subTotal_</p></div><div class="col col7 grey col-prop"><a href="#" class="delete-itm"></a></div>';
    rowProduct.innerHTML = rowProduct.innerHTML.replace('_img_', img);
    rowProduct.innerHTML = rowProduct.innerHTML.replace('_unPrice_', price);
    rowProduct.innerHTML = rowProduct.innerHTML.replace('_subTotal_', price * count);
    rowProduct.innerHTML = rowProduct.innerHTML.replace('_count_', count);
    return rowProduct;
}
//    rowProduct = createRow('img/Layer 43.jpg', 1, 123);
//    catalog.appendChild(rowProduct);
//вывод товара
for (var j in cart.arrRowCart) {
    rowCart = cart.arrRowCart[j];
    rowProduct = createRow(rowCart.img, rowCart.count, rowCart.price);
    catalog.appendChild(rowProduct);
}

function setinnerHTML(id, value) {
    var grandTotal = document.getElementById(id);
    grandTotal.innerHTML = '$' + value;
}
var summ = cart.summ;
setinnerHTML('subTotal', summ);
setinnerHTML('grandTotal', summ);
//  <!--название колонок-->
//    <div class="row th-cart">
//        <div class="col col-sup">Product Details</div>
//        <div class="col col-prop">unite Price</div>
//        <div class="col col-prop">Quantity</div>
//        <div class="col col-prop">shipping</div>
//        <div class="col col-prop">subTotal</div>
//        <div class="col col-prop">ACTION</div>
//    </div>
//    <!--строки-->
//    <div class="row" >
//        <div class="col col-sup">
//            <img src="img/Layer 43.jpg" alt="photo"/>
//
//            <div class="box-text-cart-tb">
//                <a href="SinglePage.html">Mango People T-shirt</a>
//                <p class="tb-info">Color: <span class="tb-info-val">Red</span></p>
//                <p class="tb-info">Size:  <span class="tb-info-val">Xll</span></p>
//            </div>
//        </div>
//
//        <div class="col col3 grey col-prop">
//            <p>$150</p>
//        </div>
//
//        <div class="col col4 grey col-prop">
//            <input class="quant_cart" type="number" value="2" min="1">
//        </div>
//
//        <div class="col col5 grey col-prop">
//            <p>FREE</p>
//        </div>
//
//        <div class="col col6 grey col-prop">
//            <p>$300</p>
//        </div>
//
//        <div class="col col7 grey col-prop">
//            <a href="#" class="delete-itm"></a>
//        </div>
//
//    </div>
//    <div class="row">
//        <div class="col col-sup">
//            <img src="img/Layer%2044.jpg" alt="photo"/>
//
//            <div class="box-text-cart-tb">
//                <a href="SinglePage.html">Mango People T-shirt</a>
//                <p class="tb-info">Color: <span class="tb-info-val">Red</span></p>
//                <p class="tb-info">Size:  <span class="tb-info-val">Xll</span></p>
//            </div>
//        </div>
//
//        <div class="col col3 grey col-prop">
//            <p>$150</p>
//        </div>
//
//        <div class="col col4 grey col-prop">
//            <input class="quant_cart" type="number" value="2" min="1">
//        </div>
//
//        <div class="col col5 grey col-prop">
//            <p>FREE</p>
//        </div>
//
//        <div class="col col6 grey col-prop">
//            <p>$300</p>
//        </div>
//
//        <div class="col col7 grey col-prop">
//            <a href="#" class="delete-itm"></a>
//        </div>
//
//    </div>
//    <div class="row">
//        <div class="col col-sup">
//            <img src="img/Layer 45.jpg" alt="photo"/>
//
//            <div class="box-text-cart-tb">
//                <a href="SinglePage.html">Mango People T-shirt</a>
//                <p class="tb-info">Color: <span class="tb-info-val">Red</span></p>
//                <p class="tb-info">Size:  <span class="tb-info-val">Xll</span></p>
//            </div>
//        </div>
//
//        <div class="col col3 grey col-prop">
//            <p>$150</p>
//        </div>
//
//        <div class="col col4 grey col-prop">
//            <input class="quant_cart" type="number" value="2" min="1">
//        </div>
//
//        <div class="col col5 grey col-prop">
//            <p>FREE</p>
//        </div>
//
//        <div class="col col6 grey col-prop">
//            <p>$300</p>
//        </div>
//
//        <div class="col col7 grey col-prop">
//            <a href="#" class="delete-itm"></a>
//        </div>
//
//    </div>