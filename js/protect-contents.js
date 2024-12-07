document.addEventListener("DOMContentLoaded", () => {
    // Scroll Animation
    const images = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    images.forEach(image => observer.observe(image));

    // Disable Right-Click and Text Selection
    document.addEventListener("contextmenu", event => event.preventDefault());
    document.addEventListener("selectstart", event => event.preventDefault());
    document.addEventListener("copy", event => event.preventDefault());
});
