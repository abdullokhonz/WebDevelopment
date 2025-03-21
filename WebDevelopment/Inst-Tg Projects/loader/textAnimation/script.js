// var main = document.getElementById('container');
// var div = document.createElement('div');
// div.innerText = '❤️';
// div.classList.add('letter')
// main.appendChild(div);


document.addEventListener('DOMContentLoaded', (event) => {
    const printButton = document.getElementById('print');
    const inputField = document.getElementById('input');
    const mainContainer = document.getElementById('main');

    inputField.setAttribute('maxlength', '12');

    printButton.addEventListener('click', () => {
        let userName = inputField.value.trim();

        if (!userName) {
            alert('Пожалуйста, заполните это поле!');
            return;
        }

        mainContainer.innerHTML = '';

        printButton.style.display = 'none';
        inputField.style.display = 'none';
        mainContainer.style.display = 'flex';
        mainContainer.style.flexDirection = 'row';

        userName = userName.split('');

        userName.forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.classList.add('letter');
            span.style.animationDelay = (index * 0.25) + 's'; //! (`${index * 0.25}s`)
            mainContainer.appendChild(span);
            mainContainer.style.gap = '0px';
        });
    })
});
