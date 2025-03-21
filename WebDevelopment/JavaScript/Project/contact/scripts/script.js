var openPanel = document.getElementById('home-panel');
var navMenu = document.getElementById('menu');
var closePanel = document.getElementById('home-panel-closes');
openPanel.addEventListener('click', () => {
    navMenu.classList.remove('closeMenu');
    navMenu.classList.add('openMenu');
    document.body.style.overflowY = 'hidden';
});
closePanel.addEventListener('click', () => {
    navMenu.classList.remove('openMenu');
    navMenu.classList.add('closeMenu');
    document.body.style.overflowY = '';
});

var textName = document.getElementById('textName');
var yourName = document.getElementById('name');
var textEmail = document.getElementById('textEmail');
var email = document.getElementById('email');
var textSms = document.getElementById('textSms');
var sms = document.getElementById('sms');
var btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    var theError = false;

    [yourName, email, sms].forEach(item => {
        if (!item.value) {
            item.parentElement.style.borderBottom = '2px #FF0000 solid';
            theError = true;
        } else {
            item.parentElement.style.borderBottom = '';
        }
    });

    if (!theError) {
        [yourName, email, sms].forEach(item => {
            item.value = '';
        });
        alert('Messages have been sent successfully!');
    }
    
});