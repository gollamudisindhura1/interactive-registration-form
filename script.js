//DOM Elements

const form = document.getElementById("registrationForm")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const usernameError = document.getElementById("usernameError")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
const confirmPasswordError = document.getElementById("confirmPasswordError")

//Saving or loading the username to LocalStorage
window.addEventListener("load", ()=>{
    const savedUsername = localStorage.getItem("registeredUsername")
    if(savedUsername){
        username.value = savedUsername
        validateField(username, usernameError,"Username" )
    }
})

//Generic validation function

function validateField(input, errorSpan, fieldName){
    const value = input.value().trim()
    let isValid = true
    let message = ""

    // Clearing the previous data
    errorSpan.textContent = ""
    input.classList.remove("valid", "invalid")

    //Check the Required fields
    if(input.hasAttribute("required")&& value ===""){
        message= `${fieldName} is required.`
        isValid == false
       
        //minimum Length

    }else if(input.hasAttribute("minLength")&& value.lengrh<input.minLength){
        message =`${fieldName} must be atleast ${minLength} characters.`
        isValid = false
       
        //Email Type
    }else if(input.tyep === "email" && !input.checkValidity()){
        message = "Please enter a valid Input"
        isValid = false
    }


}