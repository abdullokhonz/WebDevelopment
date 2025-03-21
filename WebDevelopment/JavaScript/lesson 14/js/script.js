/*const arr = [1, 2, 3, 4, -6, -7, -9];
let positiv = 0;
let negative = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiv++;
    } else {
        negative++;
    }
    
}
console.log("Количество положительных чисел в массиве: " + positiv);
console.log("Количество отрицательных чисел в массиве: " + negative);*/


/*
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let umnozh of num) {
    umnozh *= 3;
    console.log(umnozh);
}*/


/*var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let delit of num) {
    delit /= 3;
    console.log(delit);
}*/



/*var emloyee = [
    {
        category: "технолог",
        salary: 25000,
        emloyeeName: "Гулнора"
    },

    {
        category: "инженер",
        salary: 28000,
        emloyeeName: "Mарьям"
    },

    {
        category: "экономист",
        salary: 8000,
        emloyeeName: "Рахима"
    },

    {
        category: "механик",
        salary: 5000,
        emloyeeName: "Махина"
    }
]

for (var sortirovka of emloyee) {
    if (sortirovka.salary > 25000) {
        console.log(sortirovka.emloyeeName);
    }
}*/



/*var cars = [
    {
        mark: "BMW",
        color: "black",
        cost: 150000,
        type: "sportCar",
        year: 2023
    },

    {
        mark: "Mercedes-Benz",
        color: "grey",
        cost: 100000,
        type: "sportCar",
        year: 2022
    },

    {
        mark: "Tesla",
        color: "white",
        cost: 200000,
        type: "electricCar",
        year: 2021
    },

    {
        mark: "Lamborghini",
        color: "red",
        cost: 175000,
        type: "electricCar",
        year: 2020
    }
]

for (let car of cars) {
    if (car.color != "black" && car.cost >= 200000) {
        console.log(car.mark);
    }
}*/



/*const arr = [1, 2, 3, 4, -6, -7, -9];
let positiv = 0;
let negative = 0;
for (var num in arr) {
    if (arr[num] > 0) {
        positiv++;
    } else {
        negative++;
    }
}
console.log("Количество положительных чисел в массиве: " + positiv);
console.log("Количество отрицательных чисел в массиве: " + negative);*/




//---------------------------------------------------------------------------------




/*var pElement = document.getElementsByTagName("p");
for (var i = 0; i < pElement.length; i++) {

}
document.write(pElement[i].innerText);*/


var pElement = document.getElementsByTagName("h1")[0];
var pElement2 = document.getElementsByTagName("h2")[0];
var pElement3 = document.getElementsByTagName("h3")[0];
var pElement4 = document.getElementsByTagName("h4")[0];
var pElement5 = document.getElementsByTagName("h5")[0];
document.write(pElement.innerText + "<br>");
document.write(pElement2.innerText + "<br>");
document.write(pElement3.innerText + "<br>");
document.write(pElement4.innerText + "<br>");
document.write(pElement5.innerText + "<br>");