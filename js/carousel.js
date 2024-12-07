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

    const singleTrack = document.querySelector('.single-carousel-track');
    const singleSlides = Array.from(singleTrack.children);
    const singlePrevButton = document.querySelector('.carousel-control.single-prev');
    const singleNextButton = document.querySelector('.carousel-control.single-next');
    const singleSlideWidth = singleSlides[0].getBoundingClientRect().width;

    let singleCurrentIndex = 0;

    const updateSingleButtons = () => {
        singlePrevButton.disabled = singleCurrentIndex === 0;
        singleNextButton.disabled = singleCurrentIndex >= singleSlides.length - 1;
    };

    const moveToSingleSlide = (index) => {
        singleTrack.style.transform = `translateX(-${index * singleSlideWidth}px)`;
        singleCurrentIndex = index;
        updateSingleButtons();
    };

    singlePrevButton.addEventListener('click', () => {
        if (singleCurrentIndex > 0) moveToSingleSlide(singleCurrentIndex - 1);
    });

    singleNextButton.addEventListener('click', () => {
        if (singleCurrentIndex < singleSlides.length - 1) moveToSingleSlide(singleCurrentIndex + 1);
    });

    updateSingleButtons();
});
