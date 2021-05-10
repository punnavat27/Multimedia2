//function to toggle hamburger nav
const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.av-links li')
    //toggle nav
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

//function to contain other functions
const app = () => {
    navSlide();
}

/* Run all the functions */ 
app();