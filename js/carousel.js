document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const slideWidth = slides[0].getBoundingClientRect().width;

    let currentIndex = 0;

    const updateButtons = () => {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= slides.length - 3;
    };

    const moveToSlide = (index) => {
        track.style.transform = `translateX(-${index * (slideWidth + 10)}px)`;
        currentIndex = index;
        updateButtons();
    };

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            moveToSlide(currentIndex - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 3) {
            moveToSlide(currentIndex + 1);
        }
    });

    updateButtons();
});