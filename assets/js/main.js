const current_year = document.getElementById('current_year');
const year = new Date().getFullYear();
current_year.textContent = year;


const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

document.getElementById('menu_btn').addEventListener('click', () => {
    menu.classList.add('show');
    overlay.classList.add('show');
});

document.getElementById('close_menu').addEventListener('click', () => {
    menu.classList.remove('show');
    overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('show');
    overlay.classList.remove('show');
})
