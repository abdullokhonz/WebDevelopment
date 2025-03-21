// Функция для старта таймера обратного отсчета
function startTimer(duration, display) {
    // Установка начального времени
    var timer = duration, minutes, seconds;
    
    // Функция, которая будет обновлять таймер каждую секунду
    var intervalId = setInterval(function () {
        // Вычисляем минуты и секунды из timer
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        // Форматируем минуты и секунды, добавляя лидирующий ноль при необходимости
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        // Отображаем таймер
        display.textContent = minutes + ":" + seconds;
        
        // Уменьшаем таймер
        if (--timer < 0) {
            // Когда таймер достигает 0, останавливаем интервал и можно выполнить дополнительные действия
            clearInterval(intervalId);
            display.textContent = "Время вышло!";
        }
    }, 1000);
}

// Функция запускается при загрузке страницы
window.onload = function () {
    // Устанавливаем время таймера, например, 5 минут (5 * 60 секунд)
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time'); // Элемент, в котором будет отображаться таймер
    startTimer(fiveMinutes, display);
};