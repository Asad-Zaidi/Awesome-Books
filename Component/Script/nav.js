document.querySelector('.navbar-btn').addEventListener('click', function() {
    document.querySelector('.navbar ul').classList.toggle('show');
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const darkModeToggler = document.querySelector('.dark-mode-toggler');
    const isDarkMode = document.body.classList.contains('dark-mode');
    darkModeToggler.textContent = isDarkMode ? '☀️' : '🌙';

    sessionStorage.setItem('colorMode', isDarkMode ? 'dark' : 'light');
};

document.addEventListener('DOMContentLoaded', function() {
    const storedColorMode = sessionStorage.getItem('colorMode');
    if (storedColorMode === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.dark-mode-toggler').textContent = '☀️';
    }
});