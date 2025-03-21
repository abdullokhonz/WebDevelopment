var input = document.getElementById('input');

function calcInput(btn, keyNum, keyNum2) {
    var btn = document.getElementById(btn);
    btn.onclick = function() {
        input.value += btn.textContent;
    }

    document.addEventListener('keydown', function(event) {
        if (event.keyCode === keyNum || event.keyCode === keyNum2) {
            btn.click();
        }
    });
}

calcInput('btn0', 48, 96);
calcInput('btn1', 49, 97);
calcInput('btn2', 50, 98);
calcInput('btn3', 51, 99);
calcInput('btn4', 52, 100);
calcInput('btn5', 53, 101);
calcInput('btn6', 54, 102);
calcInput('btn7', 55, 103);
calcInput('btn8', 56, 104);
calcInput('btn9', 57, 105);
calcInput('comma', 190, 110);

function del(btn, keyNum, keyNum2) {
    var btn = document.getElementById(btn);
    btn.onclick = function() {
        input.value = '';
    }

    document.addEventListener('keydown', function(event) {
        if (event.keyCode === keyNum || event.keyCode === keyNum2) {
            btn.click();
        }
    });
}

del('del', 46);

document.getElementById('back').onclick = function() {
    input.value = input.value.slice(0, -1);
}
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 8) {
        document.getElementById('back').click();
    }
});

function keyShift(btn, keyNum, keyNum2) {
    var btn = document.getElementById(btn);
    btn.onclick = function() {
        input.value += btn.textContent;
    }

    document.addEventListener('keydown', function(event) {
        if (event.shiftKey && event.keyCode === keyNum || event.keyCode === keyNum2) {
            btn.click();
        }
    });
}

calcInput('divide', 191, 111);
keyShift('times', 56, 106);
keyShift('plus', 187, 107);
calcInput('minus', 189, 109);

// document.getElementById('equal').onclick = function() {
//     input.value = Function('return' + input.value)();
// }

document.getElementById('equal').onclick = function() {
    try {
        input.value = Function("return" + input.value)();
    } catch (e) {
        input.value = 'error!';
    }
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        document.getElementById('equal').click();
    }
});

document.getElementById('comma').onclick = function() {
    input.value += '.';
}