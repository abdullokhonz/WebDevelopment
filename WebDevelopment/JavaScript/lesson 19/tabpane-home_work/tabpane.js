'use strict';

const wrapper = document.querySelector('[data-id="cards"]');

const btnClear = wrapper.querySelector('[data-tab="clear"]')
const btn1 = wrapper.querySelector('[data-tab="first"]');
const btn2 = wrapper.querySelector('[data-tab="second"]');
const btn3 = wrapper.querySelector('[data-tab="third"]');

const cardsWelcome = wrapper.querySelector('.block');
const cardsOne = wrapper.querySelector('[data-tabpane="first"]');
const cardsSecond = wrapper.querySelector('[data-tabpane="second"]');
const cardsThird = wrapper.querySelector('[data-tabpane="third"]');

btnClear.addEventListener('click', () => {
    location.reload(); return false;
})

btn1.addEventListener('click', () => {
    if (cardsOne.classList.contains('blockCards')) {
        cardsSecond.classList.add('blockCards');
        cardsThird.classList.add('blockCards');
        cardsOne.classList.remove('blockCards');
        cardsWelcome.style.display = 'none'
        document.body.style.background = 'linear-gradient(to right, white, black)';
        btn1.style.backgroundColor = 'inherit'
        btn2.style.backgroundColor = 'inherit'
        btn3.style.backgroundColor = 'inherit'
        btnClear.style.backgroundColor = 'inherit'
    } else {

    }
});

btn2.addEventListener('click', () => {
    if (cardsSecond.classList.contains('blockCards')) {
        cardsThird.classList.add('blockCards');
        cardsOne.classList.add('blockCards');
        cardsSecond.classList.remove('blockCards');
        cardsWelcome.style.display = 'none'
        document.body.style.background = 'linear-gradient(to right, green, khaki)';
        btn1.style.backgroundColor = 'inherit'
        btn2.style.backgroundColor = 'inherit'
        btn3.style.backgroundColor = 'inherit'
        btnClear.style.backgroundColor = 'inherit'
    } else {

    }
});

btn3.addEventListener('click', () => {
    if (cardsThird.classList.contains('blockCards')) {
        cardsOne.classList.add('blockCards');
        cardsSecond.classList.add('blockCards');
        cardsThird.classList.remove('blockCards');
        cardsWelcome.style.display = 'none'
        document.body.style.background = 'linear-gradient(to right, orange, pink)';
        btn1.style.backgroundColor = 'inherit'
        btn2.style.backgroundColor = 'inherit'
        btn3.style.backgroundColor = 'inherit'
        btnClear.style.backgroundColor = 'inherit'
    } else {

    }
});