document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const userMessage = document.getElementById("user-message");
    const sendButton = document.getElementById("send-message-btn");
    const confirmationMessage = document.getElementById("confirmation-message");

    // Handle Form Submission
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        const message = userMessage.value.trim();
        if (!message) {
            alert("Please enter a message before sending.");
            return;
        }

        // Create and trigger the mailto link
        const email = "killergrafik@gmail.com";  // Update with your email
        const subject = "New Message from Website";
        const body = encodeURIComponent(message);

        // Use an <a> element for compatibility
        const mailLink = document.createElement("a");
        mailLink.href = `mailto:${email}?subject=${subject}&body=${body}`;
        mailLink.target = "_blank";
        mailLink.click();

        // Show Confirmation Message
        userMessage.style.display = "none";
        sendButton.style.display = "none";
        confirmationMessage.style.display = "block";
    });

    // Handle "Enter" Key Press
    userMessage.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // Prevents adding a new line
            contactForm.requestSubmit(); // Trigger form submission
        }
    });
});
