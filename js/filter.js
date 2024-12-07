document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".category");
    const postRows = document.querySelectorAll(".post-row");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            postRows.forEach(row => {
                if (row.classList.contains(filter) || filter === "all") {
                    row.style.display = "flex"; // Show matching rows
                } else {
                    row.style.display = "none"; // Hide non-matching rows
                }
            });
        });
    });
});
