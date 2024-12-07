document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".language");
    const englishContent = document.querySelector(".lang.eng");
    const frenchContent = document.querySelector(".lang.fr");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const language = button.getAttribute("data-language");
            if (language === "eng") {
                englishContent.style.display = "block";
                frenchContent.style.display = "none";
            } else if (language === "fr") {
                frenchContent.style.display = "block";
                englishContent.style.display = "none";
            }
        });
    });
});
