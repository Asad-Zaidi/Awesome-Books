document.querySelector('.navbar-btn').addEventListener('click', function () {
    document.querySelector('.navbar ul').classList.toggle('show');
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const darkModeToggler = document.querySelector('.dark-mode-toggler');
    darkModeToggler.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}