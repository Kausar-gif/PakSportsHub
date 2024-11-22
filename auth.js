document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Reset error messages
        firstNameError.textContent = "";
        lastNameError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

        let isValid = true;

        // First name validation
        if (!isValidName(firstNameInput.value)) {
            isValid = false;
            firstNameError.textContent = "First name can only contain letters";
        }

        // Last name validation
        if (!isValidName(lastNameInput.value)) {
            isValid = false;
            lastNameError.textContent = "Last name can only contain letters, underscores, or dashes.";
        }

        // Password validation
        if (!isValidPassword(passwordInput.value)) {
            isValid = false;
            passwordError.textContent = "Password must be at least 8 characters, with at least one uppercase letter, one lowercase letter, one special character, and one number.";
        }

        // Confirm Password validation
        if (passwordInput.value !== confirmPasswordInput.value) {
            isValid = false;
            confirmPasswordError.textContent = "Passwords do not match.";
        }

        // Submit form if all inputs are valid
        if (isValid) {
            alert("Account created successfully!");
            form.submit();
            window.location.href = "index.html";
        }
    });

    // Function to validate name fields
    function isValidName(name) {
        const nameRegex = /^[A-Za-z_-]+$/;
        return nameRegex.test(name);
    }

    // Function to validate password
    function isValidPassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }
});
