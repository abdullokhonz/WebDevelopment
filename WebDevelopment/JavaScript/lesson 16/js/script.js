function plus() {
    var getNum1 = parseFloat(document.getElementById("num1").value);
    var getNum2 = parseFloat(document.getElementById("num2").value);
    var plusNum = getNum1 + getNum2;
    document.write("<h1>" + "Результат сложение этих чисел равен: " + "</h1>" + plusNum);
}

function minus() {
    var getNum1 = parseFloat(document.getElementById("num1").value);
    var getNum2 = parseFloat(document.getElementById("num2").value);
    var minusNum = getNum1 - getNum2;
    document.write("<h1>" + "Результат минус этих чисел равен: " + "</h1>" + minusNum);
}

function multiple() {
    var getNum1 = parseFloat(document.getElementById("num1").value);
    var getNum2 = parseFloat(document.getElementById("num2").value);
    var multipleNum = getNum1 * getNum2;
    document.write("<h1>" + "Результат умножение этих чисел равен: " + "</h1>" + multipleNum);
}

function divide() {
    var getNum1 = parseFloat(document.getElementById("num1").value);
    var getNum2 = parseFloat(document.getElementById("num2").value);
    var divideNum = getNum1 / getNum2;
    document.write("<h1>" + "Результат деление этих чисел равен: " + "</h1>" + divideNum);
}



function changeColor() {
    var text = document.getElementById("paragraph");
    
    if (index >= someColors.length) {
        index = 0;    
    }

}