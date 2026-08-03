let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let country = document.querySelectorAll("select")[0];
let gender = document.querySelectorAll("select")[1];

let message = document.querySelector("textarea");

let form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Check if any field is empty
    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        password.value.trim() === "" ||
        country.value === "" ||
        gender.value === "" ||
        message.value.trim() === ""
    ) {
        alert("⚠ Please fill all the fields.");
        return;
    }

    // Name validation
    if (name.value.trim().length < 3) {
        alert("❌ Name must be at least 3 characters long.");
        return;
    }

    // Email validation
    if (!email.value.includes("@") || !email.value.includes(".")) {
        alert("❌ Please enter a valid email address.");
        return;
    }

    // Password validation
    if (password.value.length < 8) {
        alert("❌ Password must be at least 8 characters long.");
        return;
    }

    // Message validation
    if (message.value.trim().length < 10) {
        alert("❌ Message must contain at least 10 characters.");
        return;
    }

    alert("✅ Form submitted successfully!");

    form.reset();
});