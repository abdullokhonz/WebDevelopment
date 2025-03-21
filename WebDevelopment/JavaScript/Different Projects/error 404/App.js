//Movement Animation to happean
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
//Moving Animation Event
container.addEventListener("mousemove", (e) => {
let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
card.style.transition = "none";
//Popout
title.style.transform = "translateZ(150px)";
sneaker.style.transform = "translateZ(200px) rotateZ(-25deg)";
description.style.transform = "translateZ(125px)";
sizes.style.transform = "translateZ(100px)";
purchase.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
card.style.transition = "all 0.5s ease";
card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//Popback
title.style.transform = "translateZ(0px)";
sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
description.style.transform = "translateZ(0px)";
sizes.style.transform = "translateZ(0px)";
purchase.style.transform = "translateZ(0px)";
});
































































let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let endDate = new Date(2023, 0, 1, 00, 00);
let endTime = endDate.getTime();

function countdown() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  if (endTime < todayTime) {
    clearInterval(i);
    document.querySelector(
      ".countdown"
    ).innerHTML = `<h1>Countdown Has Expired</h1>`;
  } else {
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
  }
}

let i = setInterval(countdown, 1000);
countdown();    














