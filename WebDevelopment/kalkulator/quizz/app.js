var d = document.getElementById('qwe');
var c = '';
var btn = document.getElementById('rty');
function quizz(a, b) {
    while (b != c) {
        c = prompt(a).toLowerCase().replace(/ /g, '');
        if (b != c) {
            d.innerHTML = false;
            break;
        } else {
            d.innerHTML = true;
            break;
        }
    }
}

btn.addEventListener('click', () => {
    quizz('HTML', 'hypertextmarkuplanguage');
});