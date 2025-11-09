// Get form and input elements
const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Load saved username from localStorage (if available)
const savedUsername = localStorage.getItem("registeredUsername");
if (savedUsername) {
  username.value = savedUsername;
}

// Validate individual field
function validateField(input) {
  const value = input.value.trim();
  let isValid = true;

  // Reset colors
  input.classList.remove("valid", "invalid");

  if (input === username) {
    if (!value) {
      isValid = false;
      input.dataset.message = "Username is required.";
    } else if (value.length < 3) {
      isValid = false;
      input.dataset.message = "Username must be at least 3 characters long.";
    }
  }

  if (input === email) {
    if (!value) {
      isValid = false;
      input.dataset.message = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      isValid = false;
      input.dataset.message = "Enter a valid email address (e.g., name@example.com).";
    }
  }

  if (input === password) {
    if (!value) {
      isValid = false;
      input.dataset.message = "Password is required.";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value)) {
      isValid = false;
      input.dataset.message =
        "Password must be 8+ characters long and include uppercase, lowercase, and a number.";
    }
  }

  if (input === confirmPassword) {
    if (!value) {
      isValid = false;
      input.dataset.message = "Please confirm your password.";
    } else if (value !== password.value) {
      isValid = false;
      input.dataset.message = "Passwords do not match.";
    }
  }
  // Apply color feedback
  if (isValid) {
    input.classList.add("valid");
    input.dataset.message = "";
  } else {
    input.classList.add("invalid");
  }

  return isValid;
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop page reload

  // Validate all fields
  const fields = [username, email, password, confirmPassword];
  let allValid = true;
  let errorMessages = [];

  fields.forEach((field) => {
    if (!validateField(field)) {
      allValid = false;
      errorMessages.push(field.dataset.message);
    }
  });

  // Show alert if any fields are invalid
  if (!allValid) {
    alert(
      "Please fix the following before submitting:\n\n" +
        errorMessages.filter(Boolean).join("\n")
    );
    return;
  }
  // If all good — save username and show success message
  localStorage.setItem("registeredUsername", username.value.trim());
  alert(`Registration successful!\nWelcome, ${username.value}!`);
  form.reset();
  fields.forEach((f) => f.classList.remove("valid", "invalid"));
});

// Real-time validation while typing
[username, email, password, confirmPassword].forEach((input) => {
  input.addEventListener("input", () => validateField(input));
});
