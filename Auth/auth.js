document.addEventListener("DOMContentLoaded", function () {
    const switchForm = document.getElementById("switchForm");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const backToTop = document.getElementById("backToTop");

    // Ensure correct initial background
    document.body.classList.add("login-active");

    // Switch Forms
    switchForm.addEventListener("click", function () {
        loginForm.classList.toggle("hidden");
        signupForm.classList.toggle("hidden");

        if (loginForm.classList.contains("hidden")) {
            document.body.classList.replace("login-active", "signup-active");
        } else {
            document.body.classList.replace("signup-active", "login-active");
        }
    });

});
