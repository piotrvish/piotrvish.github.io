document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".illustration img");
    const overlay = document.getElementById("overlay");
    const pageContent = document.querySelector(".page-content");

    images.forEach(img => {
        img.addEventListener("click", () => {
            if (overlay.classList.contains("active")) {
                // Close the enlarged view
                overlay.classList.remove("active");
                pageContent.classList.remove("blurred");
                overlay.innerHTML = "";
            } else {
                // Open the enlarged view
                overlay.classList.add("active");
                pageContent.classList.add("blurred");
                overlay.innerHTML = `<img id="image-overlay" src="${img.src}" alt="${img.alt}">`;
                document.getElementById("image-overlay").style.display = "block";
                document.getElementById("image-overlay").style.opacity = "1";
            }
        });
    });

    // Close on Overlay Click
    overlay.addEventListener("click", () => {
        overlay.classList.remove("active");
        pageContent.classList.remove("blurred");
        overlay.innerHTML = "";
    });
});
