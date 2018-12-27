////////////////////////////////задание 1///////////////////////////
document.write('<br> Задание 1 <br>');
//Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. 
//Доска должна быть верно разлинована на черные и белые ячейки. 
//Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.

function setupColor(itColorWeit, cell) {
    if (itColorWeit) {
        cell.className = cell.className + ' colWeit';
    } else {
        cell.className = cell.className + ' colBlack';
    }
    return cell;
}

function noborder(cell) {
    cell.className = cell.className + ' noborder';
    return cell;
}

function getChessBoard() {

    var chessBoard = document.createElement('div');
    chessBoard.className = 'chessBoard';
    var body = document.querySelector('body');
    body.appendChild(chessBoard);
    var cell;
    var itColorWeit = true;

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {

            cell = document.createElement('div');
            cell.className = 'cell text_center';

            if (i == 0 && j !== 0) {
                //буквы
                cell.innerHTML = String.fromCharCode(64 + j);
                cell = noborder(cell);
            } else if (j == 0 && i !== 0) {
                //цифры
                cell.innerHTML = i;
                cell = noborder(cell);
            } else if (j == 0 && i == 0) {
                //левая верхняя ячейка
                cell = noborder(cell);
            } else {
                cell = setupColor(itColorWeit, cell);
            }

            chessBoard.appendChild(cell)
            itColorWeit = !itColorWeit;
        }
    }
}

getChessBoard();
