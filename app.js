//setup date
<<<<<<< HEAD
const date = document.getElementById('date');
if (date) {
  date.innerHTML = new Date().getFullYear();
}
// setup nav
const navBtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');
// show nav
if (navBtn) {
  navBtn.addEventListener('click', () => {
    navbar.classList.add('showNav');
  });
}
=======
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());

const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
>>>>>>> beefe30 (first commit)

if (navClose) {
  navClose.addEventListener('click', () => {
    navbar.classList.remove('showNav');
  });
}
// close nav
