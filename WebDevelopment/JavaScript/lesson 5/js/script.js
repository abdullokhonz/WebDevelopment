let a = 10;
let b = "10";

let result = a == b;
let result1 = a === b;
let result2 = a != b;
let result3 = a !== b;
let result4 = a < b;
let result5 = a > b;
let result6 = a >= b;
let result7 = a <= b;

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);



let pasport = 2;
let reys = 5;
let ticket = 1;
let weather = "storm";

let result8 = (pasport != 0 && reys == 5 && ticket == 1 && weather != "storm");

console.log(result8);



let color = "black";
let mark = "Bugatti";
let cost = 10000000;
let type = "hypercar";
let wheels = 4;
let wallet = 229000000000;

let result9 = (color == "black" && mark == "Bugatti" && wallet >= cost && type == "hypercar" && wheels == 4);

console.log(result9);



let building = "house";
let floor = 4;
let room = 30;
let color1 = "white";
let windows = "tinted glass";
let roof = "flat";
let basement = true;
let location1 = "center";
let fountain = true;
let seesaw = true;
let cost1 = 100000000;
let wallet1 = 228990000000;
let city = "Khujand";

let result0 = (building == "house" && floor >= 4 && room >= 30 && windows == "tinted glass" && basement == true && location1 == "center" && fountain == true && wallet1 >= cost1) || (color1 == "not necessary" || roof == "not necessary" || seesaw == false || city == "not necessary");

console.log(result0);