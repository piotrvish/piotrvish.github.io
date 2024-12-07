document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".illustration img");
    const overlay = document.getElementById("overlay");
    const pageContent = document.querySelector(".page-content");

    images.forEach(img => {
        img.addEventListener("click", () => {
            if (overlay.style.visibility === "visible") {
                // Close the enlarged view
                overlay.style.visibility = "hidden";
                overlay.style.opacity = "0";
                pageContent.classList.remove("blurred");
                overlay.innerHTML = "";
            } else {
                // Open the enlarged view
                overlay.style.visibility = "visible";
                overlay.style.opacity = "1";
                pageContent.classList.add("blurred");
                overlay.innerHTML = `<img id="image-overlay" src="${img.src}" alt="${img.alt}">`;
                document.getElementById("image-overlay").style.display = "block";
            }
        });
    });

    // Close on Overlay Click
    overlay.addEventListener("click", () => {
        overlay.style.visibility = "hidden";
        overlay.style.opacity = "0";
        pageContent.classList.remove("blurred");
        overlay.innerHTML = "";
    });
});
