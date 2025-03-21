'use strict';

document.body.style.background = `${getRandomColor()}`;

const wrapper = document.querySelector('[data-id="cards"]');

const btn1 = wrapper.querySelector('[data-tab="first"]');
const btn2 = wrapper.querySelector('[data-tab="second"]');
const btn3 = wrapper.querySelector('[data-tab="third"]');
const btn4 = wrapper.querySelector('[data-tab="fourth"]');

const cardsOne = wrapper.querySelector('.block');
const cardsSecond = wrapper.querySelector('[data-tabpane="first"]');
const cardsThird = wrapper.querySelector('[data-tabpane="second');
const cardsFourth = wrapper.querySelector('[data-tabpane="third"]');

        btn1.style.background = "white";
        btn2.style.background = "orange";
        btn3.style.background = "lightgreen";
        btn4.style.background = "lightblue";

btn1.addEventListener('click', () => {
    if (cardsOne.classList.contains('blockCards')) {
        cardsSecond.classList.add('blockCards');
        cardsThird.classList.add('blockCards');
        cardsFourth.classList.add('blockCards');
        cardsOne.classList.remove('blockCards');
        document.body.style.background = `${getRandomColor()}`;
    } else {

    }
})

btn2.addEventListener('click', () => {
    if (cardsSecond.classList.contains('blockCards')) {
        cardsOne.classList.add('blockCards');
        cardsThird.classList.add('blockCards');
        cardsFourth.classList.add('blockCards');
        cardsSecond.classList.remove('blockCards');
        document.body.style.background = `${getRandomColor()}`;
    } else [

    ]
})

btn3.addEventListener('click', () => {
    if (cardsThird.classList.contains('blockCards')) {
        cardsOne.classList.add('blockCards');
        cardsSecond.classList.add('blockCards');
        cardsFourth.classList.add('blockCards');
        cardsThird.classList.remove('blockCards');
        document.body.style.background = `${getRandomColor()}`;
    } else {

    }
})

btn4.addEventListener('click', () => {
    if (cardsFourth.classList.contains('blockCards')) {
        cardsOne.classList.add('blockCards');
        cardsSecond.classList.add('blockCards');
        cardsThird.classList.add('blockCards');
        cardsFourth.classList.remove('blockCards');
        document.body.style.background = `${getRandomColor()}`;
    } else {

    }
})

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
