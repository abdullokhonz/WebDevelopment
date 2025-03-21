const counter = document.querySelector('.counter');
function animateValue(start, end , duration) {
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval(() => {
        current += increment;
        counter.textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}
animateValue(78, 265, 1000);

/*const counter1 = document.querySelector('.counter1');
function animateValue1(start1, end1 , duration1) {
    let current1 = end1;
    const range1 = start1 - end1;
    const increment1 = start1 > end1 ? 1 : -1;
    const stepTime1 = Math.abs(Math.floor(duration1 / range1));
    const timer1 = setInterval(() => {
        current1 -= increment1;
        counter1.textContent = current1;
        if (current1 === start1) {
            clearInterval(timer1);
        }
    }, stepTime1);
}
animateValue1(265, 78, 1000);*/

//BOM
console.log(window.history.length);
console.log(window.history.back());
console.log(window.history.forward());
console.log(window.history.go(-5));
console.log(window.history.go(3));

//WINDOW
const windowWidth = window.innerWidth;
console.log(windowWidth);
//Navigator
/*
С помощью объекта navigator, мы можем получить информацию о самом браузере и операционной системе. 
*/

//Браузер
console.log(navigator.userAgent);

if (navigator.userAgent.includes("Chrome")) {
    console.log('Браузер Хром');
} else if (navigator.userAgent.includes("Edge")) {
    console.log('Браузер Microsoft Edge');
} else {
    console.log('???');
}

//Платформа
console.log()

var button = document.createElement("button");
button.innerHTML = "Click";
var container = document.getElementById('button-container');
container.appendChild(button);
button.addEventListener('click', function () {
    confirm("Button has in clicked.")
})