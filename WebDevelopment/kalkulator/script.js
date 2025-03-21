function rony() {
    var input1 = document.getElementById('baba1');
    var input0 = document.getElementById('baba0');
    var input2 = document.getElementById('baba2');
    var number1 = Number(input1.value);
    var oper = input0.value;
    var number2 = Number(input2.value);
    if (oper == "+") {
        var quadre = number1 + number2;
        alert(quadre);
    }
    if (oper == "-") {
        var quadre = number1 - number2;
        alert(quadre);
    }
    if (oper == "*") {
        var quadre = number1 * number2;
        alert(quadre);
    }
    if (oper == "/") {
        var quadre = number1 / number2;
        alert(quadre);
    }
}