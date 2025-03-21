//If 1

/*var a = prompt("Enter an integer: ");
if (a > 0) {
    a++;
    console.log(a);
} else {
    console.log(a);
}*/



//If 2

/*var a = prompt("Enter an integer: ");
if (a > 0) {
    a++;
    console.log(a);
} else {
    a--, a--;
    console.log(a);
}*/



//If 3

/*var a = prompt("Enter number: ");
if (a > 0) {
    a++;
    console.log(a);
} else if (a < 0) {
    a--, a--;
    console.log(a);
} else {
    a = 10;
    console.log(a);
}*/



//If 4

/*let a = prompt("Enter number A: ");
let b = prompt("Enter number B: ");
let c = prompt("Enter number C: ");
let d = 0;

if (a > 0) {
a = d + 1;
} else {
    a = 0;
}

if (b > 0) {
b = d + 1;
} else {
    b = 0;
}

if (c > 0) {
c = d + 1;
} else {
    c = 0;
}

console.log(a + b + c);*/



//If 5

/*let a = prompt("Enter number A: ");
let b = prompt("Enter number B: ");
let c = prompt("Enter number C: ");
let p = 0;
let o = 0;

if (a > 0) {
    p++;
} else if (a < 0) {
    o++;
} else (
    a = 0
)

if (b > 0) {
    p++;
} else if (b < 0) {
    o++;
} else (
    b = 0
)

if (c > 0) {
    p++;
} else if (c < 0) {
    o++;
} else (
    c = 0
)

console.log("Положительные: ", p);
console.log("Отрицательные: ", o);*/



//If 6

/*var a = prompt("Enter number A: ");
var b = prompt("Enter number B: ");

if (a > b) {
    console.log(`${a}: Первое число больше второго.`)
} else if (a < b) {
    console.log(`${b}: Второе число больше первого.`)
} else {
    console.log("Оба числа равны.")
}*/



//If 7

/*var a = prompt("Enter number A: ");
var b = prompt("Enter number B: ");

if (a > b) {
    console.log(`${b}, ${a}.`);
} else if (a < b) {
    console.log(`${a}, ${b}.`);
} else {
    console.log(`${a}, ${b}.`);
}*/



//If 8

/*var a = prompt("Enter number A: ");
var b = prompt("Enter number B: ");

if (a > b) {
    console.log(`${a}, ${b}.`);
} else if (a < b) {
    console.log(`${b}, ${a}.`);
} else {
    console.log(`${a}, ${b}.`);
}*/



//If 9

/*var a = prompt("Enter number A: ");
var b = prompt("Enter number B: ");

if (a > b) {
    console.log(`A = ${b}, B = ${a}.`);
} else {
    console.log(`A = ${a}, B = ${b}.`);
}*/



//If 10

/*var a = (parseInt(prompt("Enter number A: ")));
var b = (parseInt(prompt("Enter number B: ")));
var x = 0;

if (a !== b) {
    x = a + b;
    a += x;
    b += x;
    console.log(`A = ${a}, B = ${b}.`);
} else if (a == b) {
    a = 0;
    b = 0;
    console.log(`A = ${a}, B = ${b}.`);
}*/



//If 11

/*var a = prompt("Enter number A: ");
var b = prompt("Enter number B: ");

if (a > b) {
    b = a;
} else if (a < b) {
    a = b;
} else {
    a = 0;
    b = 0;
}

console.log(`A = ${a}, B = ${b}.`);*/



//If 12

/*var a = prompt("Enter number A: ");
var b = prompt("Enter number B: ");
var c = prompt("Enter number C: ");

if (a < b && a < c) {
    console.log(a);
} else if (a > b && b < c) {
    console.log(b);
} else {
    console.log(c);
}*/



//If 13

/*var a = prompt("Enter number A: ");
var b = prompt("Enter number B: ");
var c = prompt("Enter number C: ");

if ((b > a) && (a > c) || (b < a) && (a < c)) {
    console.log(a);
} else if ((a > b) && (b > c) || (a < b) && (b < c)) {
    console.log(b);
} else {
    console.log(c);
}*/



//If 14

/*var a = prompt("Enter number A: ");
var b = prompt("Enter number B: ");
var c = prompt("Enter number C: ");

if (a < b && a < c && b <= c) {
    console.log(a , b , c);
} else if (a < b && a < c && b >= c) {
    console.log(a , c , b);
}

if (b < a && b < c && a <= c) {
    console.log(b , a , c);
} else if (b < a && b < c && a >= c) {
    console.log(b , c , a);
}

if (c < a && c < b && a <= b) {
    console.log(c , a , b);
} else if (c < a && c < b && a >= b) {
    console.log(c , b , a);
}*/



//If 15

/*var a = (parseInt(prompt("Enter number A: ")));
var b = (parseInt(prompt("Enter number B: ")));
var c = (parseInt(prompt("Enter number C: ")));

if (a >= b && a >= c && b >= c) {
    console.log(a + b);
} else if (a >= b && a >= c && b < c) {
    console.log(a + c);
} else if (b >= a && b >= c && a > c) {
    console.log(b + a);
} else if (b >= a && b >= c && a < c) {
    console.log(b + c);
} else if (c >= a && c >= b && a > b) {
    console.log(c + a);
} else if (c >= a && c >= b && a < b) {
    console.log(c + b);
}*/



//If 16

/*var a = (parseInt(prompt("Enter number A: ")));
var b = (parseInt(prompt("Enter number B: ")));
var c = (parseInt(prompt("Enter number C: ")));
var z;

if (a < b && b < c) {
    a **= 2;
    b **= 2;
    c **= 2;
} else {
    z = a, a = a - (z * 2);
    z = b, b = b - (z * 2);
    z = c, c = c - (z * 2);
    //z = a, a = a * (-1);  --↘
    //z = b, b = b * (-1);  ---→ SECOND WAY;
    //z = c, c = c * (-1);  --↗
}

console.log(a, b, c);*/



//If 17

/*var a = (parseInt(prompt("Enter number A: ")));
var b = (parseInt(prompt("Enter number B: ")));
var c = (parseInt(prompt("Enter number C: ")));
var z;
 if ((a < b && b < c)  || (a  > b && b > c)) {
    a **= 2;
    b **= 2;
    c **= 2;
} else {
    z = a, a = a - (z * 2);
    z = b, b = b - (z * 2);
    z = c, c = c - (z * 2);
}

console.log(a, b, c);*/



//If 18

/*var a = (parseInt(prompt("Enter number A: ")));
var b = (parseInt(prompt("Enter number B: ")));
var c = (parseInt(prompt("Enter number C: ")));

if ((a == b) && (a != c && b != c)) {
    console.log(3);
} else if ((a == c) && (a != b && c != b)) {
    console.log(2);
} else if ((b == c) && (b != a && c != a)) {
    console.log(1);
} else {
    console.log(0);
}*/



//If 19

/*var a = (parseInt(prompt("Enter number A: ")));
var b = (parseInt(prompt("Enter number B: ")));
var c = (parseInt(prompt("Enter number C: ")));
var d = (parseInt(prompt("Enter number D: ")));

if ((a == b && a == c && b == c) && (a != d && b != d && c != d)) {
    console.log(4);
} else if ((a == b && a == d && b == d) && (a != c && b != c && d != c)) {
    console.log(3);
} else if ((a == c && a == d && c == d) && (a != b && c != b && d != b)) {
    console.log(2);
} else if ((b == c && b == d && c == d) && (b != a && c != a && d != a)) {
    console.log(1);
} else {
    console.log(0);
}*/



//If 20

/*var a = prompt("Enter number A: ");
var b = prompt("Enter number B: ");
var c = prompt("Enter number C: ");
var x;

if (a <= b && a <= c && b < c) {
    x = b - a;
    console.log(`Число "B: ${b}" ближе к числу "A: ${a}". Расстояние от A до B: ${x}.`);
} else if (a <= b && a <= c && b > c) {
    x = c - a;
    console.log(`Число "C: ${c}" ближе к числу "A: ${a}". Расстояние от A до C: ${x}.`);
} else if (a >= b && a >= c && b > c) {
    x = a - b;
    console.log(`Число "B: ${b}" ближе к числу "A: ${a}". Расстояние от A до B: ${x}.`);
} else if (a >= b && a >= c && b < c) {
    x = a - c;
    console.log(`Число "C: ${c}" ближе к числу "A: ${a}". Расстояние от A до C: ${x}.`);
} else if ((a <= b && a <= c && ((b >= c) || (b <= c)))) {
    x = b - a;
    console.log(`Оба числа "B: ${b}" и "C: ${c}" близки к числу "A: ${a}". Расстояние от A до B и C: ${x}.`);
} else if ((a >= b && a >= c && ((b >= c) || (b <= c)))) {
    x = a - b;
    console.log(`Оба числа "B: ${b}" и "C: ${c}" близки к числу "A: ${a}". Расстояние от A до B и C: ${x}.`);
}*/



//If 21

//If 3 function

function Chislo(a) {
    if (a > 0) {
        a++;
    } else if (a < 0) {
        a--, a--;
    } else {
        a = 10;
    }
    console.log(a);
}
var a = prompt("Enter number A: ");
Chislo(a);