const correctPassword = "h]4[0y[m-F8a";  // Задаём правильный пароль
const loginForm = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        window.location.href = "fnab.html";  // Перенаправление на основную страницу после входа
    } else {
        errorMessage.textContent = "Неверный пароль. Попробуйте снова.";
    }
});
