let wallet = 50001;
let cost = 50000;

if (wallet >= cost) {
  console.log('Вам хватило денег чтобы купить Газель! :)')
}
else {
  console.log('Копите деньги! Эти не хватят :(')
}



let income = 2200;
let iphone = 25000;

if (income > iphone) {
  console.log('Congratulations! You bought iphone! :)')
}
else if (income == iphone) {
  console.log('You bought iphone! You have to go home on foot O_o')
}
else {
  console.log('Sorry... You are not lucky!')
}

if (income > iphone) console.log('Congratulations! You bought iphone! :)')
else if (income == iphone) console.log('You bought iphone! You have to go home on foot O_o')
else console.log('Sorry... You are not lucky!')



let building = "house"; //and
let floor = 50; //or
let room = 200; //or
let windows = "tinted glass"; //and
let roof = "flat"; //or
let location1 = "center"; //and
let city = "Khujand"; //and
let fountain = true; //and
let color = "gold"; //or
let seesaw = true; //or
let basement = true; //and
let wallet1 = 192000000000; //and
let cost1 = 1583654695; //and

if (wallet >= cost) {
  if (building == "house" && windows == "tinted glass" && location1 == "center" && city == "Khujand" && fountain == true && basement == true) {
    console.log('Live & Enjoy!');
  }
  else if (floor >= 50 || room >= 200 || roof == "not necessary" || color == "not necessary" || seesaw == "not necessary") {
    console.log("И так сойдёт...");
  }
  else {
    console.log("Строители держитесьй!")
  }
}
else {
  console.log("Спуститесь на землю!")
}