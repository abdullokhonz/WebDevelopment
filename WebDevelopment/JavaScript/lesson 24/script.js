function validateForm(event) {
    event.preventDefault()

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var passwordConfirmInput = document.getElementById('confirmPassword');

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value;
    var confirmPassword = passwordConfirmInput.value;
}