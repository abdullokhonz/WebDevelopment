document.write("<h2>Моя первая программа на JS</h2>", "<br>");

const author = "Луций Анней Сенека";
const quotes = "Век живи век учись!";
console.log(`"-${quotes}", так сказал: "${author}".`);
document.write(`-"${quotes}", так сказал: "${author}".`);

var result = `"-${quotes}", так сказал: "${author}".`;
console.log(typeof (result));
var index = 1;
console.log(typeof (index));


let x = 45;
let s = "45";
let y = 23.7854;
console.log(x, y);
console.log(typeof (x));
console.log(typeof (s));

let some = (15 == 20);
console.log(some);
console.log(typeof (some));

let isAlive;
console.log(isAlive);
isAlive = null;
console.log(isAlive);
isAlive = undefined;
console.log(isAlive);

const user = { name: "Tom", age: 24 };
console.log("Name:", user.name, "Age:", user.age);
console.log(typeof (user));

const car = {
  color: "black",
  year: 2023,
  mark: "Bugatti",
  owner: "Abdullo",
  cost: "10000000$",
  design: "minimalism",
  sold_out: true
}
console.log("The owner of that new car is", car.owner);
console.log(typeof (car));
console.log(typeof (car.owner));
console.log(typeof (car.year));
console.log(typeof (car.sold_out));

let id;
console.log(id);
id = 45;
console.log(id);
id = "45";
console.log(id);

let a = 45;
let b = a + 5;
console.log(b);

a = "45";
let c = a + 5;
console.log(c);
console.log(typeof (c));

a = "45";
let d = 5 + a;
console.log(d);
console.log(typeof(c));