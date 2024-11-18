const startBtn = document.getElementById('start');
const countdownEl = document.getElementById('countdown');

startBtn.addEventListener('click', () => {
    // Получаем значения из полей
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    // Проверяем, что хотя бы одно значение задано
    if (hours === 0 && minutes === 0 && seconds === 0) {
        countdownEl.textContent = 'Пожалуйста, введите корректное значение!';
        return;
    }

    // Вычисляем общее количество секунд
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    // Обновляем таймер каждую секунду
    const timerInterval = setInterval(() => {
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        // Форматируем отображение времени
        countdownEl.textContent = 
            `${hrs}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;

        if (totalSeconds > 0) {
            totalSeconds--;
        } else {
            clearInterval(timerInterval);
            countdownEl.textContent = 'Время вышло!';
        }
    }, 1000);
});
