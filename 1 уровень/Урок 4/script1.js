////////////////////////////////задание 1///////////////////////////
document.write('<br> Задание 1 <br>');
//Написать функцию, преобразующую число в объект. 
//Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих 
//свойствах описаны единицы, десятки и сотни.
//Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function parse(digit) {
    var MAX_DIGIT = 999;
    
    var obj = {
        digit: digit,
        rate_10_2: 0,
        rate_10_1: 0,
        rate_10_0: 0
    };

    obj.rate_10_2 = Math.floor(digit / 100 % 10);
    obj.rate_10_1 = Math.floor(digit / 10 % 10);
    obj.rate_10_0 = digit - Math.floor(digit / 100 % 10) * 100 - Math.floor(digit / 10 % 10) * 10;
    
    if (digit > MAX_DIGIT) {
//        obj.error = 'число больше 999';
        console.log(digit +' число больше 999');
        obj = {};
    }

    return obj;

}

console.log(parse(getRandomArbitrary(1, 2000)));
console.log(parse(getRandomArbitrary(1, 2000)));
console.log(parse(getRandomArbitrary(1, 2000)));
