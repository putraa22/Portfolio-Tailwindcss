// Navbar Fixed

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};


// button toggle 
const humbuger = document.querySelector('#humbuger');
const navMenu = document.querySelector('#nav-menu');

humbuger.addEventListener('click', () => {
    humbuger.classList.toggle('humbuger-active');
    navMenu.classList.toggle('hidden');
})