// var main = document.getElementById('container');
// var div = document.createElement('div');
// div.innerText = '❤️';
// div.classList.add('letter')
// main.appendChild(div);


document.addEventListener('DOMContentLoaded', (event) => {
    let userName = prompt("Enter your name: ", "Name");
    const container = document.getElementById('container');
    
    container.innerHTML = '';
    
    if (userName) {
        userName = userName.split('');
        
        userName.forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.classList.add('letter');
            span.style.animationDelay = (`${index * 0.25}s`);
            container.appendChild(span);
        });
    }
});
