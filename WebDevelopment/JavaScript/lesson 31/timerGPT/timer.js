// Установить время окончания таймера для демонстрации
const endTime = new Date().getTime() + 5 * 60000; // Для таймера на 5 минут

function updateTimer() {
    const currentTime = new Date().getTime(); // Текущее время
    const timeLeft = endTime - currentTime; // Оставшееся время

    // Расчет минут и секунд из оставшегося времени
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Отображение таймера на странице
    document.getElementById('timer').innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // Момент остановки таймера
    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').innerHTML = "Время истекло!";
    }
}

// Обновление таймера каждую секунду
const timerInterval = setInterval(updateTimer, 1000);