document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const pageContent = document.querySelector(".page-content");

    const closeOverlay = () => {
        overlay.style.visibility = "hidden";
        overlay.style.opacity = "0";
        pageContent.classList.remove("blurred");
        overlay.innerHTML = "";
    };

    const enlargeImages = (selector, shouldBlur) => {
        const images = document.querySelectorAll(selector);

        images.forEach((img) => {
            img.addEventListener("click", () => {
                overlay.style.visibility = "visible";
                overlay.style.opacity = "1";

                if (shouldBlur) {
                    pageContent.classList.add("blurred");
                }

                const enlargedImg = document.createElement("img");
                enlargedImg.id = "image-overlay";
                enlargedImg.src = img.src;
                enlargedImg.alt = img.alt;

                Object.assign(enlargedImg.style, {
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "auto",
                    height: "100vh",
                    maxWidth: "90vw",
                    maxHeight: "90vh",
                    objectFit: "contain",
                    zIndex: "1000",
                    display: "block",
                });

                overlay.appendChild(enlargedImg);
                enlargedImg.addEventListener("click", closeOverlay);
            });
        });
    };

    enlargeImages(".illustration img", true);  // Blur effect for illustrations
    enlargeImages(".carousel-container img, .single-carousel-container img", true);  //  Blur for carousels

    overlay.addEventListener("click", closeOverlay);
});
