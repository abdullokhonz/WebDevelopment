const sliderContainer = document.querySelector(".slider-container");``
const slider = document.querySelector(".slider")
var isMouseDown = false;
var startX;
var scrollLeft;

sliderContainer.addEventListener("mousedown", function(event) {
    isMouseDown = true;
})