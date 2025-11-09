# Interactive User Registration Form

## Overview
This project creates an interactive user registration form that validates user input in real time. It gives visual feedback green for valid, red for invalid, displays error messages, and saves the username to **localStorage** after successful registration.

## Features
- Used red borders and messages for invalid fields
- Used green borders when valid
- Saves the username in localStorage
- Alerts the user upon successful registration
- Resets form and clears styles after submission

## Reflection Questions

1. How did event.preventDefault() help in handling form submission?
- It stops the page from reloading when submitting the form, that allows validation to happen with JavaScript first.

2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
- HTML5 gives quick built-in checks, while JS allows custom logic, patterns, and user friendly error messages.

3. Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
- The username is stored locally so it reappears next time the user opens the page, but localStorage is not secure  so never use it for sensitive info like passwords.

4. Describe a challenge you faced in implementing the real-time validation and how you solved it.
- Handling real time validation smoothly  I have solved by adding input event listeners for each field and updating feedback instantly.

5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
- I have used clear messages near each field and simple color like green for success, red for errors.
