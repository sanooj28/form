
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    
    if (password.toLowerCase() === "password" || password.toLowerCase() === name.toLowerCase() || password.length < 8) {
        alert("Password cannot be 'password', your name, or less than 8 characters.");
        return;
    }
    
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    
    alert("Form submitted successfully!");
});
