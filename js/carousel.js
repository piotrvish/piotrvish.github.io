
document.addEventListener('DOMContentLoaded', () => {
    const initializeCarousel = (trackSelector, prevSelector, nextSelector, slideWidthCalc) => {
        const track = document.querySelector(trackSelector);
        const slides = Array.from(track.children);
        const prevButton = document.querySelector(prevSelector);
        const nextButton = document.querySelector(nextSelector);
        const slideWidth = slides[0].getBoundingClientRect().width;

        let currentIndex = 0;

        const updateButtons = () => {
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex >= slides.length - slideWidthCalc;
        };

        const moveToSlide = (index) => {
            track.style.transform = `translateX(-${index * slideWidth}px)`;
            currentIndex = index;
            updateButtons();
        };

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) moveToSlide(currentIndex - 1);
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < slides.length - slideWidthCalc) moveToSlide(currentIndex + 1);
        });

        updateButtons();
    };

    // Initialize carousels
    initializeCarousel('.carousel-track', '.carousel-control.prev', '.carousel-control.next', 3);
    initializeCarousel('.single-carousel-track', '.carousel-control.single-prev', '.carousel-control.single-next', 1);
});