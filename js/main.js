// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Menu Open Close
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = ()=> {
    menu.classList.toggle("move-js");
    navbar.classList.toggle("open-menu-js")
}
// Close menu on scroll
window.onscroll = ()=> {
    menu.classList.remove("move-js");
    navbar.classList.remove("open-menu-js");
}
