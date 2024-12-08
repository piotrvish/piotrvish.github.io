
document.addEventListener('DOMContentLoaded', () => {
    const initializeCarousel = (carouselContainer) => {
        const track = carouselContainer.querySelector('.carousel-track, .single-carousel-track');
        const slides = Array.from(track.children);
        const prevButton = carouselContainer.querySelector('.carousel-control.prev, .carousel-control.single-prev');
        const nextButton = carouselContainer.querySelector('.carousel-control.next, .carousel-control.single-next');
        const isSingle = carouselContainer.classList.contains('single-carousel-container');
        const slideWidth = slides[0].getBoundingClientRect().width;

        let currentIndex = 0;

        const updateButtons = () => {
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex >= slides.length - (isSingle ? 1 : 3);
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
            if (currentIndex < slides.length - (isSingle ? 1 : 3)) moveToSlide(currentIndex + 1);
        });

        updateButtons();
    };

    // Initialize all carousels on the page
    document.querySelectorAll('.carousel-container, .single-carousel-container')
        .forEach(initializeCarousel);
});
