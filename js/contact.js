document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const userMessage = document.getElementById("user-message");
    const confirmationMessage = document.getElementById("confirmation-message");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();  // Prevent default form submission

        const message = userMessage.value.trim();
        if (!message) {
            alert("Please enter a message before sending.");
            return;
        }

        // Create mailto link
        const email = "killergrafik@gmail.com";  // Update with your email
        const subject = "New Message from Website";
        const body = encodeURIComponent(message);

        // Open the mail client
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

        // Show Confirmation Message
        userMessage.style.display = "none";
        document.getElementById("send-message-btn").style.display = "none";
        confirmationMessage.style.display = "block";
    });

    // Prevent Enter key from creating a new line
    userMessage.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();  // Prevents adding a new line
            contactForm.requestSubmit();  // Trigger the form submission
        }
    });
});
