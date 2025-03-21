function chooseAnswer(subTitleID, answerID) {
    var subTitle = document.getElementById(subTitleID);
    var answer = document.getElementById(answerID);
    subTitle.innerHTML = answer.innerHTML;
}

function checkAnswer(subTitleID, answerID) {
    var subTitle = document.getElementById(subTitleID);
    var answer = document.getElementById(answerID);
    if (subTitle.innerHTML == answer.innerHTML) {
        subTitle.innerHTML = 'Правильно';
    } else if (subTitle.innerHTML != answer.innerHTML) {
        subTitle.innerHTML = 'Неправильно';
    }
}