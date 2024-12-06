document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".category");
    const posts = document.querySelectorAll(".post");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            posts.forEach(post => {
                if (post.classList.contains(filter) || filter === "all") {
                    post.style.display = "list-item";
                } else {
                    post.style.display = "none";
                }
            });
        });
    });
});
