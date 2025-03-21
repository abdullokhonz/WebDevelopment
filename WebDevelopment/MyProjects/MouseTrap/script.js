const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const overlay = document.getElementById('overlay');
const audio = document.getElementById('audio');

noButton.addEventListener('mouseover', () => {
    const randomTop = Math.random() * (window.innerHeight - 150);
    const randomLeft = Math.random() * (window.innerWidth - 150);
    noButton.style.top = `${randomTop}px`;
    noButton.style.left = `${randomLeft}px`;
});

yesButton.addEventListener('click', () => {
    audio.play();
    overlay.style.display = 'flex';
});
