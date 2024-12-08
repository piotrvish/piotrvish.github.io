document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".illustration img");
    const overlay = document.getElementById("overlay");
    const pageContent = document.querySelector(".page-content");

    const closeOverlay = () => {
        overlay.style.visibility = "hidden";
        overlay.style.opacity = "0";
        pageContent.classList.remove("blurred");
        overlay.innerHTML = "";
    };

    images.forEach(img => {
        img.addEventListener("click", () => {
            if (overlay.style.visibility === "visible") {
                closeOverlay();
            } else {
                overlay.style.visibility = "visible";
                overlay.style.opacity = "1";
                pageContent.classList.add("blurred");

                const enlargedImg = document.createElement("img");
                enlargedImg.id = "image-overlay";
                enlargedImg.src = img.src;
                enlargedImg.alt = img.alt;

                // Center the image in the viewport
                enlargedImg.style.position = "fixed";
                enlargedImg.style.top = "50%";
                enlargedImg.style.left = "50%";
                enlargedImg.style.transform = "translate(-50%, -50%)";
                enlargedImg.style.maxWidth = "90vw";
                enlargedImg.style.maxHeight = "90vh";
                enlargedImg.style.objectFit = "contain";
                enlargedImg.style.zIndex = "1000";
                enlargedImg.style.display = "block";

                overlay.appendChild(enlargedImg);

                // Close on image click
                enlargedImg.addEventListener("click", closeOverlay);
            }
        });
    });

    // Close on overlay click
    overlay.addEventListener("click", closeOverlay);
});
