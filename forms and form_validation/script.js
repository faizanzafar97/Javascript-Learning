let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#validatorForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    
    let emailErrorElement = document.querySelector("#emailError");
    let passwordErrorElement = document.querySelector("#passwordError");

    // 2. Clear out any old error messages from a previous click
    emailErrorElement.textContent = "";
    passwordErrorElement.textContent = "";

    // 3. Grab the values and clean them with .trim()
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    // 4. Set up Regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isEmailValid = emailRegex.test(emailValue);
    let isPasswordValid = passwordRegex.test(passwordValue);
    
    // 5. Validation Logic
    if (emailValue === "" || passwordValue === "") {
        alert("Please fill in all fields.");
        return; // This stops the rest of the code from running if fields are empty
    }

    if (!isEmailValid) {
        
        emailErrorElement.textContent = "Please enter a valid email address.";
    }

    if (!isPasswordValid) {
        
        passwordErrorElement.textContent = "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
    }

   
    if (isEmailValid && isPasswordValid) {
        alert("Success! Form is valid.");
        
    }
});