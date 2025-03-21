var openPanel = document.getElementById('home-panel');
var navMenu = document.getElementById('menu');
var closePanel = document.getElementById('home-panel-closes');
openPanel.addEventListener('click', () => {
    navMenu.classList.remove('closeMenu');
    navMenu.classList.add('openMenu');
    document.body.style.overflowY = 'hidden';
});
closePanel.addEventListener('click', () => {
    document.body.style.overflowY = '';
    navMenu.classList.remove('openMenu');
    navMenu.classList.add('closeMenu');
});

function image(myModal, smallImg, largeImg, closeModal) {
    var modal = document.getElementById(myModal);
    var smallImg = document.getElementById(smallImg);
    var largeImg = document.getElementById(largeImg);
    var span = document.getElementById(closeModal);

    modal.classList.add('myModal');
    largeImg.classList.add('largeImage');
    span.classList.add('closeModal');

    smallImg.onclick = function() {
        modal.style.display = 'block';
        document.body.style.overflowY = 'hidden';
    }
    
    span.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflowY = '';
    }

    window.onclick = function(event) {
        if (event.target.classList.contains('myModal')) {
            event.target.style.display = 'none';
            document.body.style.overflowY = '';
        }
    }
}

image('nftMyModal', 'nftSmallImage', 'nftLargeImage', 'nftCloseModal');
image('oilMyModal', 'oilSmallImage', 'oilLargeImage', 'oilCloseModal');
image('jadooMyModal', 'jadooSmallImage', 'jadooLargeImage', 'jadooCloseModal');