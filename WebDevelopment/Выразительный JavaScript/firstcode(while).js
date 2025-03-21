/*
var total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);
*/



//?console.log(sum(range(1, 10))); Не работает!
/*
function range(start, end, step) {
    if (step == null) step = 1;
    var array = [];

    if (step > 0) {
        for (var i = start; i <= end; i += step)
        array.push(i);
    } else {
        for (var i = start; i >= end; i += step)
        array.push(i);
    }
    return array;
}

function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++)
        total += array[i];
    return total;
}

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
      return factorial(n - 1) * n;
    }
}
*/
//!console.log(sum(range(1, 10))); Работает!



//*console.log(2.998e8); 299800000
//*console.log(2.998e3); 2998



//*console.log(314 % 100); = 14, Остатки!




//TODO: В JavaScript есть три специальных значения, которые считаются числами, но ведут себя не как обычные числа.
//!Infinity Положительная бесконечность!
//!-Infinity Отрицательная бесконечность!
//!NaN = "Not a Number"; (Не число).



//TODO: Экранирование символов (Escape character);
//?console.log("Privet, \"Andrey\"\nKak\tu\ttebya\tdela?");
//*\" можно заключать в двойные кавычки.
//*\n обозначает перевод строки.
//*\t – табуляцию.
//TODO: Строки нельзя делить, умножать и складывать. Однако с ними можно использовать оператор +, который будет соединять их друг с другом. Следующее выражение выдаст слово «соединение»:
//!console.log("сое" + "ди" + "н" + "ение"); = соединение.



