////////////////////////////////задание 4///////////////////////////
document.write('<br> Задание 4 <br>');
document.write('<br> Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке: <br>');
var str = '';

for (var i = 0; i < 20; i++) {
    str = str + 'x';
    for (var j = 0; j < 20; j++) {
        console.log(str);
    }
}
