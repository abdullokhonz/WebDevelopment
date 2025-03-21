var slide = document.getElementsByClassName("slider");
var images = document.getElementsByTagName("img");
var currentIndex = 0;

function showImages(index) {
    for (var i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
    }
    images[index].classList.add("active");
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex >= images.length;
    }
    showImages(currentIndex);
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImages(currentIndex);
}

var prevBtn = document.getElementsByClassName("btn-preview");
prevBtn.addEventListener("click", prevSlide);
var nextBtn = document.getElementsByClassName("btn-next");
nextBtn.addEventListener("click", nextSlide);