// DESKTOP MENU (CLASE 7 AND CLASE 11 UNION)
const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

navbar_email.addEventListener('click', () => {
    desktop_menu.classList.toggle('inactive');
});

