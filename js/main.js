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
// ScrollReveal
const animate = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "2500",
    delay: "400",
});

animate.reveal(".nav");
animate.reveal(".home-text", {origin: "left"});
animate.reveal(".home-img", {origin: "bottom"});
animate.reveal(".ser-box, .product-box, .team-box, .book-data", {interval: 100});



// Mouse move
const ball1 = document.querySelector('#ball1');
const ball2 = document.querySelector('#ball2');
const ball3 = document.querySelector('#ball3');
const ball4 = document.querySelector('#ball4');
const ball5 = document.querySelector('#ball5');
const ball6 = document.querySelector('#ball6');
const ball7 = document.querySelector('#ball7');
const ball8 = document.querySelector('#ball8');

function ballPicker(ball, dets) {
    ball.style.left = dets.pageX + "px";
    ball.style.top = dets.pageY + "px";
}

document.querySelector('body').addEventListener('mousemove', (dets) => {

    console.log(dets);
    ballPicker(ball1, dets);
    ballPicker(ball2, dets);
    ballPicker(ball3, dets);
    ballPicker(ball4, dets);
    ballPicker(ball5, dets);
    ballPicker(ball6, dets);
    ballPicker(ball7, dets);
    ballPicker(ball8, dets);
});