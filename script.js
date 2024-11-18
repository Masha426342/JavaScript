const randomNumber = Math.floor(Math.random() * 100) + 1;
const feedbackEl = document.getElementById('feedback');
const guessInput = document.getElementById('guess');
const checkBtn = document.getElementById('check');

checkBtn.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedbackEl.textContent = 'Пожалуйста, введи число от 1 до 100';
        return;
    }

    if (userGuess < randomNumber) {
        feedbackEl.textContent = 'Слишком маленькое. Попробуй ещё!';
    } else if (userGuess > randomNumber) {
        feedbackEl.textContent = 'Слишком большое. Попробуй ещё!';
    } else {
        feedbackEl.textContent = `Поздравляю! Ты угадал, число было ${randomNumber}.`;
    }
});
