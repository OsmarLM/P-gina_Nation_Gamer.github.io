let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicator');

    if (index >= Math.ceil(slides.length / 3)) slideIndex = 0;
    if (index < 0) slideIndex = Math.ceil(slides.length / 3) - 1;

    const offset = slideIndex * -100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[slideIndex].classList.add('active');
}

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});