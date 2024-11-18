const slides = document.querySelectorAll('.slide');
const wrapper = document.querySelector('.slider-wrapper');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

// Функция обновления позиции слайдера
const updateSlider = () => {
    const offset = -currentIndex * 100; // Сдвиг в процентах для текущего слайда
    wrapper.style.transform = `translateX(${offset}%)`;
};

// Слушатели событий для кнопок
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
});

// Инициализация
updateSlider();
