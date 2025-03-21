const preLoad = document.getElementById('preloader');
var load1 = document.querySelector('#loader1');
var load2 = document.querySelector('#loader2');
var load3 = document.querySelector('#loader3');

window.addEventListener('load', function() {
    setTimeout(function() {
        preLoad.style.display = 'none';
    }, 3000);
});

function addAnimationClassToElement(element, animationClass) {
    element.classList.add(animationClass);
}

function removeAnimationClassFromElement(element, animationClass) {
    element.classList.remove(animationClass);
}
function addAndRemoveClassAnimateLoad() {
    addAnimationClassToElement(load1, 'animate1');
    addAnimationClassToElement(load2, 'animate2');
    addAnimationClassToElement(load3, 'animate3');
    setTimeout(function() {
        removeAnimationClassFromElement(load1, 'animate1');
        removeAnimationClassFromElement(load2, 'animate2');
        removeAnimationClassFromElement(load3, 'animate3');
    }, 901)
}
function addAndRemoveClassAnimateLoadReverse() {
    addAnimationClassToElement(load1, 'animate3');
    addAnimationClassToElement(load2, 'animate2');
    addAnimationClassToElement(load3, 'animate1');
    setTimeout(function() {
        removeAnimationClassFromElement(load1, 'animate3');
        removeAnimationClassFromElement(load2, 'animate2');
        removeAnimationClassFromElement(load3, 'animate1');
    }, 901)
}
addAndRemoveClassAnimateLoad();
setTimeout(function() {
    addAndRemoveClassAnimateLoadReverse();
}, 910);
setTimeout(function() {
    addAndRemoveClassAnimateLoad();
}, 1820);
setTimeout(function() {
    addAndRemoveClassAnimateLoadReverse();
}, 2730);
setTimeout(function() {
    addAndRemoveClassAnimateLoad();
}, 3640);

var links = document.querySelectorAll("li > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}





const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);s
    });
});

const autoSlide = () => {
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

console.log(window.innerWidth);






const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 1000,
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
    }
});

const talantedImage = document.getElementById("talanted-img");
const talantedSocialMedia = document.getElementById("talanted-social-media");
const talantedImage2 = document.getElementById("talanted-img2");
const talantedSocialMedia2 = document.getElementById("talanted-social-media2");
const talantedImage3 = document.getElementById("talanted-img3");
const talantedSocialMedia3 = document.getElementById("talanted-social-media3");

talantedImage.addEventListener("mouseover", () => {
    talantedSocialMedia.style.opacity = "1";
    talantedSocialMedia.style.transition = "all .2s linear";
});

talantedImage.addEventListener("mouseout", () => {
    talantedSocialMedia.style.opacity = "0";
    talantedSocialMedia.style.transition = "all .2s linear";
});

talantedImage2.addEventListener("mouseover", () => {
    talantedSocialMedia2.style.opacity = "1";
    talantedSocialMedia2.style.transition = "all .2s linear";
});

talantedImage2.addEventListener("mouseout", () => {
    talantedSocialMedia2.style.opacity = "0";
    talantedSocialMedia2.style.transition = "all .2s linear";
});

talantedImage3.addEventListener("mouseover", () => {
    talantedSocialMedia3.style.opacity = "1";
    talantedSocialMedia3.style.transition = "all .2s linear";
});

talantedImage3.addEventListener("mouseout", () => {
    talantedSocialMedia3.style.opacity = "0";
    talantedSocialMedia3.style.transition = "all .2s linear";
});

var whyQuestion = document.getElementById("why-question");
var whyText = document.getElementById("why-text");
var whySpan = document.getElementById("pm");
var whyQuestion2 = document.getElementById("why-question2");
var whyText2 = document.getElementById("why-text2");
var whySpan2 = document.getElementById("pm2");
var whyQuestion3 = document.getElementById("why-question3");
var whyText3 = document.getElementById("why-text3");
var whySpan3 = document.getElementById("pm3");
var whyQuestion4 = document.getElementById("why-question4");
var whyText4 = document.getElementById("why-text4");
var whySpan4 = document.getElementById("pm4");
var whyQuestion5 = document.getElementById("why-question5");
var whyText5 = document.getElementById("why-text5");
var whySpan5 = document.getElementById("pm5");
var whyQuestion6 = document.getElementById("why-question6");
var whyText6 = document.getElementById("why-text6");
var whySpan6 = document.getElementById("pm6");

whyQuestion.addEventListener("mouseover", () => {
    whySpan.textContent = "-";
    whyText.style.display = "block";

});

whyQuestion.addEventListener("mouseout", () => {
    whySpan.textContent = "+";
    whyText.style.display = "none";
});

whyQuestion2.addEventListener("mouseover", () => {
    whySpan2.textContent = "-";
    whyText2.style.display = "block";
});

whyQuestion2.addEventListener("mouseout", () => {
    whySpan2.textContent = "+";
    whyText2.style.display = "none";
});

whyQuestion3.addEventListener("mouseover", () => {
    whySpan3.textContent = "-";
    whyText3.style.display = "block";
});

whyQuestion3.addEventListener("mouseout", () => {
    whySpan3.textContent = "+";
    whyText3.style.display = "none";
});

whyQuestion4.addEventListener("mouseover", () => {
    whySpan4.textContent = "-";
    whyText4.style.display = "block";
});

whyQuestion4.addEventListener("mouseout", () => {
    whySpan4.textContent = "+";
    whyText4.style.display = "none";
});

whyQuestion5.addEventListener("mouseover", () => {
    whySpan5.textContent = "-";
    whyText5.style.display = "block";
});

whyQuestion5.addEventListener("mouseout", () => {
    whySpan5.textContent = "+";
    whyText5.style.display = "none";
});

whyQuestion6.addEventListener("mouseover", () => {
    whySpan6.textContent = "-";
    whyText6.style.display = "block";
});

whyQuestion6.addEventListener("mouseout", () => {
    whySpan6.textContent = "+";
    whyText6.style.display = "none";
});

var fullName = document.getElementById('name');
var phoneNumber = document.getElementById('number');
var emailAdress = document.getElementById('email');
var btn = document.getElementById('registration-button');
var hr = document.getElementById('hr');

btn.addEventListener('click', () => {
    var theError = false;

    [fullName, phoneNumber, emailAdress].forEach(item => {
        if (!item.value) {
            hr.style.backgroundColor = '#FF0000';
            theError = true;
        } else {
            hr.style.backgroundColor = '';
        }
    });

    if (!theError) {
        [fullName, phoneNumber, emailAdress].forEach(item => {
            item.value = '';
        });
        alert('Successful registration!');
    }
});