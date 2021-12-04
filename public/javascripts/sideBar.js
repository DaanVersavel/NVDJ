// sidebar open close js code
var navLinks = document.querySelector(".nav-links");
var menuOpenBtn = document.querySelector(".navbar .bx-menu");
var menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
    navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
    navLinks.style.left = "-100%";
}