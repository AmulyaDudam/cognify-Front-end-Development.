document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("formFeedback");

    let errors = [];

    if (name === "") {
        errors.push("Name is required.");
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        errors.push("Please enter a valid email.");
    }

    if (message.length < 10) {
        errors.push("Message must be at least 10 characters.");
    }

    if (errors.length > 0) {
        feedback.textContent = errors.join(" ");
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Form submitted successfully!";
        feedback.style.color = "green";
        // Optionally clear form
        document.getElementById("contactForm").reset();
    }
});
