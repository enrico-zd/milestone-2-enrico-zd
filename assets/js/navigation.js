import { observer1 } from "./observer.js";

const playGround = document.getElementById('playground');

const mobileNavbar = document.getElementById('mobile-navbar');
const mobileNavbarMenu = document.getElementById('mobile-navbar-menu');
const mobileLinks = mobileNavbarMenu.querySelectorAll("a");

mobileLinks.forEach(link =>{
    link.addEventListener("click", () => {
        mobileNavbarMenu.classList.add("hidden");
        mobileNavbar.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

mobileNavbar.addEventListener('click', () => {
    mobileNavbarMenu.classList.toggle('hidden');
    if (mobileNavbar.innerHTML === '<i class="fa-solid fa-xmark"></i>') {
    mobileNavbar.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
    mobileNavbar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
});

observer1.observe(playGround);