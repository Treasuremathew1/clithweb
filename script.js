let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-close')
    navbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    navbar.classList.remove('active');
})