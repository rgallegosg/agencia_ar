const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navigation-menu');
menuIcon.addEventListener('click', () =>{
    navbar.classList.toggle('change')
});