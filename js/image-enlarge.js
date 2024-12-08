document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const pageContent = document.querySelector(".page-content");

    // Close overlay function
    const closeOverlay = () => {
        overlay.style.visibility = "hidden";
        overlay.style.opacity = "0";
        pageContent.classList.remove("blurred");
        overlay.innerHTML = "";
    };

    // Function to handle image enlargement
    const enlargeImages = (selector, shouldBlur) => {
        const images = document.querySelectorAll(selector);

        images.forEach((img) => {
            img.addEventListener("click", () => {
                overlay.style.visibility = "visible";
                overlay.style.opacity = "1";

                // Apply blur effect only if specified
                if (shouldBlur) {
                    pageContent.classList.add("blurred");
                }

                const enlargedImg = document.createElement("img");
                enlargedImg.id = "image-overlay";
                enlargedImg.src = img.src;
                enlargedImg.alt = img.alt;

                // Center and enlarge the image
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

                // Close on image click
                enlargedImg.addEventListener("click", closeOverlay);
            });
        });
    };

    // Apply rules
    enlargeImages(".illustration img", true); // Blur on illustration images
    enlargeImages(".carousel-container img, .single-carousel-container img", false); // No blur on carousel images

    // Close on overlay click
    overlay.addEventListener("click", closeOverlay);
});
