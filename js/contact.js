document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const userMessage = document.getElementById("user-message");
    const sendButton = document.getElementById("send-message-btn");
    const confirmationMessage = document.getElementById("confirmation-message");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form behavior

        const message = userMessage.value.trim();
        if (!message) {
            alert("Please enter a message before sending.");
            return;
        }

        // Create and trigger mailto link
        const email = "killergrafik@gmail.com";  // Replace with your email
        const subject = "New Message from Website";
        const body = encodeURIComponent(message);

        // Use a hidden <a> element for the mailto link
        let mailLink = document.createElement("a");
        mailLink.href = `mailto:${email}?subject=${subject}&body=${body}`;
        mailLink.style.display = "none"; // Hide the element
        document.body.appendChild(mailLink); // Add it to the DOM

        // Simulate click
        mailLink.click();
        document.body.removeChild(mailLink); // Clean up

        // Show Confirmation Message
        userMessage.style.display = "none";
        sendButton.style.display = "none";
        confirmationMessage.style.display = "block";
    });

    // Prevent Enter key from adding a new line
    userMessage.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // Prevents adding a new line
            contactForm.requestSubmit(); // Trigger the form submission
        }
    });
});
