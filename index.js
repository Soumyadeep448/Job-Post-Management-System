// Toggle between Login and Register forms
function toggleForms() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
}

// Validate Login Form
function validateLogin() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const loginrole=document.getElementById("user-type-login").value;
    console.log(loginrole);

    let isValid = true;

    if (!email.includes("@")) {
        document.getElementById("login-email-error").textContent = "Invalid email address";
        isValid = false;
    } else {
        document.getElementById("login-email-error").textContent = "";
    }

    if (password.length < 8) {
        document.getElementById("login-password-error").textContent = "Password must be at least 8 characters";
        isValid = false;
    } else {
        document.getElementById("login-password-error").textContent = "";
    }

    if (isValid) {
        
        if (loginrole == "career") {
            alert("Login Successful");
            window.location.href = "career.html"; 
        } else if (loginrole == "employee") {
            alert("Login Successful");
            window.location.href = "dashboard.html"; 
        }
        
        
    }
}

// Validate Register Form
function validateRegister() {
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("register-confirm-password").value;
    const registerrole=document.getElementById("user-type-register").value;

    let isValid = true;

    if (name === "") {
        document.getElementById("register-name-error").textContent = "Name is required";
        isValid = false;
    } else {
        document.getElementById("register-name-error").textContent = "";
    }

    if (!email.includes("@")) {
        document.getElementById("register-email-error").textContent = "Invalid email address";
        isValid = false;
    } else {
        document.getElementById("register-email-error").textContent = "";
    }

    if (password.length < 8) {
        document.getElementById("register-password-error").textContent = "Password must be at least 8 characters";
        isValid = false;
    } else {
        document.getElementById("register-password-error").textContent = "";
    }

    if (password !== confirmPassword) {
        document.getElementById("register-confirm-password-error").textContent = "Passwords do not match";
        isValid = false;
    } else {
        document.getElementById("register-confirm-password-error").textContent = "";
    }

    if (isValid) {
        if (registerrole == "career") {
            alert("Login Successful");
            window.location.href = "career.html"; 
        } else if (registerrole == "employee") {
            alert("Login Successful");
            window.location.href = "dashboard.html"; 
        }
    }
        
}


