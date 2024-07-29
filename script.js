var typed = new Typed(".text", {
    strings: ["Web Developer", "Data Analyst", "Frontend Developer", "Tech Enthusiast", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky",window.scrollY > 120);
});
let menu= document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};