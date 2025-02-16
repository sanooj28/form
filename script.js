document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Stop default form submission

    let form = this;
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let messageDiv = document.getElementById("formMessage");

    let strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phone)) {
        messageDiv.innerHTML = "<p class='error'>📞 Enter a valid 10-digit phone number.</p>";
        return;
    }

    if (!strongPasswordRegex.test(password)) {
        messageDiv.innerHTML = "<p class='error'>🔒 Password must have 8+ chars, an uppercase letter, a number & a special char.</p>";
        return;
    }

    if (password !== confirmPassword) {
        messageDiv.innerHTML = "<p class='error'>⚠ Passwords do not match!</p>";
        return;
    }

    messageDiv.innerHTML = "<p class='success'>🎉 Success! Redirecting...</p>";

    setTimeout(() => {
        form.submit();
    }, 1500);
});
