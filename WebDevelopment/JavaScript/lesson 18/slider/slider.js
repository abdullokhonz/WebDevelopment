var slider = document.querySelector('.slider');
var images = slider.getElementsByTagName('img');
var currentIndex = 1;

function showImage(index) {
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
  images[index].classList.add('active');
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
}

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', nextSlide);

var prevButton = document.querySelector('.prev-button');
prevButton.addEventListener('click', prevSlide);