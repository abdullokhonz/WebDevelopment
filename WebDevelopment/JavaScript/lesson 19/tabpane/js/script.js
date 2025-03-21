'use strict';
const wrapper = document.querySelector('[data-id="cards"]');
const btn1 = wrapper.querySelector('[data-tab="first"]');
const btn2 = wrapper.querySelector('[data-tab="second"]');
const cardsOne = wrapper.querySelector('.block1');
const cardsSecond = wrapper.querySelector('[data-tabpane="second"]');
btn1.addEventListener('click', () => {
  if (cardsOne.classList.contains('blockCards')) {
    cardsSecond.classList.add('blockCards');
    cardsOne.classList.remove('blockCards');
  } else {
    
  }
});
btn2.addEventListener('click', () => {
  if (cardsSecond.classList.contains('blockCards')) {
    cardsOne.classList.add('blockCards');
    cardsSecond.classList.toggle('blockCards');
  } else {
    
  }
});